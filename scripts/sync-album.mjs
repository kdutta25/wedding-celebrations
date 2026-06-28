import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { homedir } from "node:os";
import { dirname, join, relative } from "node:path";
import sharp from "sharp";

const root = new URL("..", import.meta.url).pathname;
const albumRoot = join(root, "public", "album");
const thumbCacheRoot = join(root, ".cache", "album-thumbs");
const imageExt = /\.(jpe?g|png|webp|gif|avif)$/i;
const THUMB_WIDTH = 500;
const THUMB_QUALITY = 75;
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const OG_UPSCALE_WIDTH = 4800;
const OG_QUALITY = 90;
const ogPreviewPath = join(root, "public", "og-preview.jpg");
const ogCachePath = join(root, ".cache", "og-preview-hd.jpg");
const landingHeroPath = join(root, "src", "assets", "landing-hero.png");
const landingHeroCachePath = join(root, ".cache", "landing-hero-hd.png");

const albums = [
  {
    id: "haldi",
    source: join(homedir(), "Desktop", "Haldi"),
  },
  {
    id: "wedding",
    source: join(homedir(), "Desktop", "Wedding"),
  },
];

function walk(dir, sourceRoot) {
  const files = [];
  if (!existsSync(dir)) return files;

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.name.startsWith(".")) continue;

    if (entry.isDirectory()) {
      files.push(...walk(fullPath, sourceRoot));
      continue;
    }

    if (imageExt.test(entry.name)) {
      files.push(relative(sourceRoot, fullPath));
    }
  }

  return files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function thumbName(filename) {
  return filename.replace(/\.[^.]+$/i, ".webp");
}

function isSourceNewer(sourcePath, targetPath) {
  if (!existsSync(targetPath)) {
    return true;
  }
  return statSync(sourcePath).mtimeMs > statSync(targetPath).mtimeMs;
}

async function generateThumb(sourcePath, thumbPath) {
  mkdirSync(dirname(thumbPath), { recursive: true });
  await sharp(sourcePath)
    .rotate()
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .webp({ quality: THUMB_QUALITY })
    .toFile(thumbPath);
}

async function ensureThumb(sourcePath, photo, albumId) {
  const webp = thumbName(photo);
  const thumbCacheDir = join(thumbCacheRoot, albumId);
  const cachedThumb = join(thumbCacheDir, webp);
  const outputThumb = join(albumRoot, albumId, "thumbs", webp);

  if (isSourceNewer(sourcePath, cachedThumb)) {
    await generateThumb(sourcePath, cachedThumb);
    mkdirSync(dirname(outputThumb), { recursive: true });
    cpSync(cachedThumb, outputThumb);
    return "generated";
  }

  mkdirSync(dirname(outputThumb), { recursive: true });
  cpSync(cachedThumb, outputThumb);
  return "cached";
}

function resolveOgSource() {
  const desktopSource = join(homedir(), "Desktop", "og-preview.jpg");
  if (existsSync(desktopSource)) {
    return desktopSource;
  }
  if (existsSync(landingHeroPath)) {
    return landingHeroPath;
  }
  return null;
}

async function buildHdMaster(sourcePath) {
  return sharp(sourcePath)
    .rotate()
    .resize(OG_UPSCALE_WIDTH, null, {
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: false,
    })
    .sharpen({ sigma: 0.65, m1: 0.5, m2: 0.35, x1: 2, y2: 10 });
}

async function ensureOgPreview(sourcePath) {
  if (!sourcePath) {
    console.warn("OG preview source not found — skipping og-preview.jpg.");
    return;
  }

  const needsOg = isSourceNewer(sourcePath, ogCachePath);
  const needsHero = isSourceNewer(sourcePath, landingHeroCachePath);

  if (needsOg || needsHero) {
    const master = await buildHdMaster(sourcePath);

    if (needsOg) {
      mkdirSync(dirname(ogCachePath), { recursive: true });
      await master
        .clone()
        .resize(OG_WIDTH, OG_HEIGHT, { fit: "cover", position: "centre" })
        .jpeg({ quality: OG_QUALITY, mozjpeg: true, chromaSubsampling: "4:4:4" })
        .toFile(ogCachePath);
    }

    if (needsHero) {
      mkdirSync(dirname(landingHeroCachePath), { recursive: true });
      await master
        .clone()
        .resize(2400, null, {
          kernel: sharp.kernel.lanczos3,
          withoutEnlargement: false,
        })
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toFile(landingHeroCachePath);
    }
  }

  if (existsSync(ogCachePath)) {
    mkdirSync(dirname(ogPreviewPath), { recursive: true });
    cpSync(ogCachePath, ogPreviewPath);
  }

  if (existsSync(landingHeroCachePath)) {
    cpSync(landingHeroCachePath, landingHeroPath);
  }

  if (existsSync(ogCachePath)) {
    const meta = await sharp(ogCachePath).metadata();
    console.log(
      `OG preview → public/og-preview.jpg (${meta.width}×${meta.height}, social / link-preview size).`,
    );
  }
}

async function syncAlbum({ id, source }) {
  const dest = join(albumRoot, id);
  const fullDest = join(dest, "full");
  const thumbsDest = join(dest, "thumbs");
  const thumbCacheDir = join(thumbCacheRoot, id);

  rmSync(dest, { recursive: true, force: true });
  mkdirSync(fullDest, { recursive: true });
  mkdirSync(thumbsDest, { recursive: true });
  mkdirSync(thumbCacheDir, { recursive: true });

  if (!existsSync(source)) {
    writeFileSync(
      join(dest, "manifest.json"),
      JSON.stringify({ photos: [] }, null, 2),
      "utf8",
    );
    console.warn(`Album source not found: ${source}`);
    return { id, count: 0, generated: 0, cached: 0 };
  }

  const photos = walk(source, source);

  if (photos.length === 0) {
    writeFileSync(
      join(dest, "manifest.json"),
      JSON.stringify({ photos }, null, 2),
      "utf8",
    );
    console.warn(`No photos in ${source}`);
    return { id, count: 0, generated: 0, cached: 0 };
  }

  let generated = 0;
  let cached = 0;

  for (const photo of photos) {
    const sourcePath = join(source, photo);
    const destFullPath = join(fullDest, photo);
    mkdirSync(dirname(destFullPath), { recursive: true });
    cpSync(sourcePath, destFullPath);

    const status = await ensureThumb(sourcePath, photo, id);
    if (status === "generated") {
      generated += 1;
    } else {
      cached += 1;
    }
  }

  writeFileSync(
    join(dest, "manifest.json"),
    JSON.stringify({ photos }, null, 2),
    "utf8",
  );

  return { id, count: photos.length, generated, cached };
}

async function main() {
  mkdirSync(albumRoot, { recursive: true });
  mkdirSync(thumbCacheRoot, { recursive: true });

  const results = [];
  for (const album of albums) {
    results.push(await syncAlbum(album));
  }

  await ensureOgPreview(resolveOgSource());

  for (const result of results) {
    console.log(
      `[${result.id}] Synced ${result.count} photo(s) (${result.generated} thumbs generated, ${result.cached} from cache).`,
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
