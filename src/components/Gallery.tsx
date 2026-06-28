import { useEffect, useRef, useState } from "react";
import styledWithConfig from "../utils/styledWithConfig";
import { useI18n } from "../i18n/I18nContext";
import {
  GALLERY_BATCH_SIZE,
  thumbPhotoUrl,
  type AlbumId,
} from "../utils/photos";
import { Lightbox } from "./Lightbox";
import { GalleryThumb } from "./GalleryThumb";

const Section = styledWithConfig("section")`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  padding: 0 4px 8px;
  text-align: left;
`;

const Heading = styledWithConfig("h2")`
  font-size: 20px;
  font-weight: 800;
  margin: 0 0 6px;
`;

const Subheading = styledWithConfig("p")`
  margin: 0 0 18px;
  color: var(--muted);
  font-size: 15px;
`;

const ProgressWrap = styledWithConfig("div")`
  margin-bottom: 18px;
`;

const ProgressLabel = styledWithConfig("p")`
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 14px;
`;

const ProgressTrack = styledWithConfig("div")`
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: var(--gallery-progress-track);
  overflow: hidden;
`;

const ProgressFill = styledWithConfig("div")<{ $percent: number }>`
  width: ${({ $percent }) => $percent}%;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent-dark), var(--accent));
  transition: width 0.35s ease;
`;

const Grid = styledWithConfig("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
`;

const Item = styledWithConfig("button")`
  display: flex;
  border: none;
  padding: 0;
  background: transparent;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 1;
  box-shadow: 0 10px 24px -14px var(--gallery-shadow);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 30px -12px var(--gallery-shadow);
  }
`;

const EmptyState = styledWithConfig("p")`
  text-align: center;
  color: var(--muted);
  font-size: 15px;
  padding: 24px 12px;
  border: 1px dashed var(--gallery-empty-border);
  border-radius: 16px;
  background: var(--gallery-empty-bg);
`;

const LoadMoreSentinel = styledWithConfig("div")`
  width: 100%;
  height: 1px;
`;

const LoadingMore = styledWithConfig("p")`
  text-align: center;
  color: var(--muted);
  font-size: 14px;
  margin: 16px 0 0;
`;

type GalleryProps = {
  albumId: AlbumId;
  photos: string[];
};

export function Gallery({ albumId, photos }: GalleryProps) {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(GALLERY_BATCH_SIZE);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleCount(GALLERY_BATCH_SIZE);
  }, [photos]);

  useEffect(() => {
    const hasMore = visibleCount < photos.length;
    const sentinel = loadMoreRef.current;
    if (!hasMore || !sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisibleCount((count) =>
            Math.min(count + GALLERY_BATCH_SIZE, photos.length),
          );
        }
      },
      { rootMargin: "320px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [photos.length, visibleCount]);

  const visiblePhotos = photos.slice(0, visibleCount);
  const hasMorePhotos = visibleCount < photos.length;
  const progressPercent =
    photos.length > 0 ? Math.round((visibleCount / photos.length) * 100) : 0;

  return (
    <Section data-component-id="Gallery" aria-label={t("galleryHeading")}>
      <Heading data-component-id="GalleryHeading">{t("galleryHeading")}</Heading>
      <Subheading data-component-id="GallerySubheading">
        {t("gallerySub")}
      </Subheading>

      {photos.length === 0 ? (
        <EmptyState data-component-id="GalleryEmpty">
          {t("galleryEmpty")}
        </EmptyState>
      ) : (
        <>
          <ProgressWrap data-component-id="GalleryProgress">
            <ProgressLabel data-component-id="GalleryProgressLabel">
              {hasMorePhotos
                ? t("galleryProgress", {
                    visible: visibleCount,
                    total: photos.length,
                  })
                : t("galleryProgressComplete", { total: photos.length })}
            </ProgressLabel>
            <ProgressTrack>
              <ProgressFill
                data-component-id="GalleryProgressFill"
                role="progressbar"
                aria-valuenow={visibleCount}
                aria-valuemin={0}
                aria-valuemax={photos.length}
                $percent={progressPercent}
              />
            </ProgressTrack>
          </ProgressWrap>
          <Grid data-component-id="GalleryGrid">
            {visiblePhotos.map((filename, index) => (
              <Item
                key={filename}
                data-component-id="GalleryItem"
                type="button"
                aria-label={t("openPhoto", { n: index + 1 })}
                onClick={() => setActiveIndex(index)}
              >
                <GalleryThumb
                  src={thumbPhotoUrl(albumId, filename)}
                  alt={t("photoAlt", { n: index + 1 })}
                />
              </Item>
            ))}
          </Grid>
          {hasMorePhotos ? (
            <>
              <LoadingMore
                data-component-id="GalleryLoadingMore"
                aria-live="polite"
              >
                {t("galleryLoadingMore")}
              </LoadingMore>
              <LoadMoreSentinel
                ref={loadMoreRef}
                data-component-id="GalleryLoadMore"
                aria-hidden="true"
              />
            </>
          ) : null}
        </>
      )}

      {activeIndex !== null ? (
        <Lightbox
          albumId={albumId}
          photos={photos}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChange={setActiveIndex}
        />
      ) : null}
    </Section>
  );
}
