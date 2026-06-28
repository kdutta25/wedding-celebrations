export const GALLERY_BATCH_SIZE = 20;

export type AlbumId = "haldi" | "wedding";

export type PhotoManifest = {
  photos: string[];
};

function albumBase(albumId: AlbumId): string {
  return `${import.meta.env.BASE_URL}album/${albumId}`;
}

export async function loadPhotos(albumId: AlbumId): Promise<string[]> {
  try {
    const response = await fetch(`${albumBase(albumId)}/manifest.json`);
    if (!response.ok) return [];
    const data = (await response.json()) as PhotoManifest;
    return data.photos ?? [];
  } catch {
    return [];
  }
}

/** Full-size image for the lightbox. */
export function fullPhotoUrl(albumId: AlbumId, filename: string): string {
  return `${albumBase(albumId)}/full/${filename}`;
}

/** WebP thumbnail for the grid (generated at build time). */
export function thumbPhotoUrl(albumId: AlbumId, filename: string): string {
  const webpName = filename.replace(/\.[^.]+$/i, ".webp");
  return `${albumBase(albumId)}/thumbs/${webpName}`;
}
