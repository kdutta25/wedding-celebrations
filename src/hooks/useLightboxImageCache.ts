import { useEffect, useRef, useState } from "react";
import { fullPhotoUrl, type AlbumId } from "../utils/photos";
import { loadImageBlob } from "../utils/loadImageBlob";

export type ImageLoadState = {
  objectUrl: string | null;
  progress: number;
  ready: boolean;
  error: boolean;
};

type CacheEntry = ImageLoadState;

const initialState: ImageLoadState = {
  objectUrl: null,
  progress: 0,
  ready: false,
  error: false,
};

function getAdjacentUrls(
  albumId: AlbumId,
  photos: string[],
  index: number,
): string[] {
  const urls: string[] = [];
  if (index > 0) {
    urls.push(fullPhotoUrl(albumId, photos[index - 1]));
  }
  urls.push(fullPhotoUrl(albumId, photos[index]));
  if (index < photos.length - 1) {
    urls.push(fullPhotoUrl(albumId, photos[index + 1]));
  }
  return urls;
}

export function useLightboxImageCache(
  albumId: AlbumId,
  photos: string[],
  index: number,
): ImageLoadState {
  const cacheRef = useRef(new Map<string, CacheEntry>());
  const inflightRef = useRef(new Map<string, () => void>());
  const currentUrlRef = useRef<string | null>(null);
  const [currentState, setCurrentState] = useState<ImageLoadState>(initialState);

  useEffect(() => {
    const current = photos[index];
    if (!current) {
      currentUrlRef.current = null;
      setCurrentState(initialState);
      return;
    }

    const currentUrl = fullPhotoUrl(albumId, current);
    currentUrlRef.current = currentUrl;
    const keep = new Set(getAdjacentUrls(albumId, photos, index));

    for (const [url, entry] of cacheRef.current.entries()) {
      if (keep.has(url)) {
        continue;
      }
      inflightRef.current.get(url)?.();
      inflightRef.current.delete(url);
      if (entry.objectUrl) {
        URL.revokeObjectURL(entry.objectUrl);
      }
      cacheRef.current.delete(url);
    }

    const applyCurrentFromCache = () => {
      const cached = cacheRef.current.get(currentUrl);
      if (cached) {
        setCurrentState(cached);
        return cached.ready;
      }
      setCurrentState(initialState);
      return false;
    };

    applyCurrentFromCache();

    const startLoad = (url: string, trackProgress: boolean) => {
      const cached = cacheRef.current.get(url);
      if (cached?.ready || inflightRef.current.has(url)) {
        return;
      }

      if (!cached) {
        cacheRef.current.set(url, { ...initialState });
      }

      const cancel = loadImageBlob(url, {
        onProgress: trackProgress
          ? (progress) => {
              if (currentUrlRef.current !== url) {
                return;
              }
              setCurrentState((state) =>
                state.ready ? state : { ...state, progress },
              );
            }
          : undefined,
        onComplete: (objectUrl) => {
          inflightRef.current.delete(url);
          const entry: CacheEntry = {
            objectUrl,
            progress: 100,
            ready: true,
            error: false,
          };
          cacheRef.current.set(url, entry);
          if (currentUrlRef.current === url) {
            setCurrentState(entry);
          }
        },
        onError: () => {
          inflightRef.current.delete(url);
          const entry: CacheEntry = {
            objectUrl: null,
            progress: 0,
            ready: false,
            error: true,
          };
          cacheRef.current.set(url, entry);
          if (currentUrlRef.current === url) {
            setCurrentState(entry);
          }
        },
      });

      inflightRef.current.set(url, cancel);
    };

    for (const url of keep) {
      startLoad(url, url === currentUrl);
    }

    return () => {
      currentUrlRef.current = null;
    };
  }, [albumId, photos, index]);

  useEffect(() => {
    const cache = cacheRef.current;
    const inflight = inflightRef.current;

    return () => {
      for (const cancel of inflight.values()) {
        cancel();
      }
      inflight.clear();
      for (const entry of cache.values()) {
        if (entry.objectUrl) {
          URL.revokeObjectURL(entry.objectUrl);
        }
      }
      cache.clear();
    };
  }, []);

  return currentState;
}
