export type LoadImageBlobHandlers = {
  onProgress?: (percent: number) => void;
  onComplete: (objectUrl: string) => void;
  onError?: () => void;
};

/** Fetch an image as a blob; optional byte progress when Content-Length is present. */
export function loadImageBlob(
  url: string,
  handlers: LoadImageBlobHandlers,
): () => void {
  let cancelled = false;
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.responseType = "blob";

  xhr.onprogress = (event) => {
    if (cancelled || !event.lengthComputable || !handlers.onProgress) {
      return;
    }
    handlers.onProgress(
      Math.min(99, Math.round((event.loaded / event.total) * 100)),
    );
  };

  xhr.onload = () => {
    if (cancelled) {
      return;
    }
    if (xhr.status >= 200 && xhr.status < 300) {
      handlers.onComplete(URL.createObjectURL(xhr.response));
      return;
    }
    handlers.onError?.();
  };

  xhr.onerror = () => {
    if (!cancelled) {
      handlers.onError?.();
    }
  };

  xhr.send();

  return () => {
    cancelled = true;
    xhr.abort();
  };
}
