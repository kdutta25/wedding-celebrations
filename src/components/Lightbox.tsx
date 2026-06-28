import { useEffect, useCallback, useState } from "react";
import { FiDownload } from "react-icons/fi";
import styledWithConfig from "../utils/styledWithConfig";
import { useI18n } from "../i18n/I18nContext";
import { useLightboxImageCache } from "../hooks/useLightboxImageCache";
import { useSwipeNavigation } from "../hooks/useSwipeNavigation";
import { type AlbumId } from "../utils/photos";
import { LightboxLoader } from "./loaders/LightboxLoader";
import { Snackbar } from "./Snackbar";

const Overlay = styledWithConfig("div")`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: var(--lightbox-bg);
  touch-action: pan-y pinch-zoom;
`;

const PhotoStage = styledWithConfig("div")`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(100%, 1100px);
  max-height: 88vh;
  min-height: min(60vh, 420px);
  touch-action: none;
`;

const PhotoFrame = styledWithConfig("div")`
  position: relative;
  display: inline-flex;
  max-width: 100%;
  max-height: 88vh;
`;

const Photo = styledWithConfig("img")`
  max-width: 100%;
  max-height: 88vh;
  border-radius: 12px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
  user-select: none;
  -webkit-user-drag: none;
`;

const DownloadButton = styledWithConfig("button")`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 999px;
  background: rgba(20, 14, 10, 0.55);
  color: #fff;
  cursor: pointer;
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
  transition: background 0.15s ease, transform 0.15s ease;

  &:hover {
    background: rgba(20, 14, 10, 0.72);
    transform: translateY(-1px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const LoadingPanel = styledWithConfig("div")`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
`;

const CloseButton = styledWithConfig("button")`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 3;
  border: none;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  font-size: 24px;
  cursor: pointer;
  backdrop-filter: blur(8px);
`;

const NavButton = styledWithConfig("button")`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  border: none;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  font-size: 24px;
  cursor: pointer;
  backdrop-filter: blur(8px);
`;

const PrevButton = styledWithConfig(NavButton)`
  left: 18px;
`;

const NextButton = styledWithConfig(NavButton)`
  right: 18px;
`;

const Caption = styledWithConfig("p")`
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  margin: 0;
`;

type LightboxProps = {
  albumId: AlbumId;
  photos: string[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({
  albumId,
  photos,
  index,
  onClose,
  onChange,
}: LightboxProps) {
  const { t } = useI18n();
  const current = photos[index];
  const { objectUrl, progress, ready, error } = useLightboxImageCache(
    albumId,
    photos,
    index,
  );
  const [showDownloadSnackbar, setShowDownloadSnackbar] = useState(false);

  const goToPrevious = useCallback(() => {
    if (index > 0) onChange(index - 1);
  }, [index, onChange]);

  const goToNext = useCallback(() => {
    if (index < photos.length - 1) onChange(index + 1);
  }, [index, onChange, photos.length]);

  const { onTouchStart, onTouchEnd } = useSwipeNavigation({
    onSwipeLeft: index < photos.length - 1 ? goToNext : undefined,
    onSwipeRight: index > 0 ? goToPrevious : undefined,
  });

  const handleDownload = useCallback(() => {
    if (!objectUrl || !current) return;
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = current;
    link.click();
    setShowDownloadSnackbar(true);
  }, [objectUrl, current]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goToNext, goToPrevious, onClose]);

  if (!current) return null;

  const loadingLabel =
    progress > 0
      ? t("lightboxLoading", { percent: progress })
      : t("lightboxLoadingIndeterminate");

  return (
    <Overlay
      data-component-id="Lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={t("lightboxLabel")}
      onClick={onClose}
    >
      <CloseButton
        data-component-id="LightboxClose"
        type="button"
        aria-label={t("close")}
        onClick={onClose}
      >
        ×
      </CloseButton>

      {index > 0 ? (
        <PrevButton
          data-component-id="LightboxPrev"
          type="button"
          aria-label={t("previousPhoto")}
          onClick={(event) => {
            event.stopPropagation();
            goToPrevious();
          }}
        >
          ‹
        </PrevButton>
      ) : null}

      <PhotoStage
        data-component-id="LightboxStage"
        onClick={(event) => event.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {!ready ? (
          <LoadingPanel
            data-component-id="LightboxLoading"
            role="status"
            aria-live="polite"
            aria-label={loadingLabel}
          >
            <LightboxLoader
              albumId={albumId}
              progress={progress}
              error={Boolean(error)}
              errorMessage={t("lightboxLoadError")}
              loadingMessage={loadingLabel}
            />
          </LoadingPanel>
        ) : null}

        {objectUrl && ready ? (
          <PhotoFrame data-component-id="LightboxPhotoFrame">
            <DownloadButton
              data-component-id="LightboxDownload"
              type="button"
              aria-label={t("downloadPhoto")}
              onClick={(event) => {
                event.stopPropagation();
                handleDownload();
              }}
            >
              <FiDownload aria-hidden="true" />
            </DownloadButton>
            <Photo
              data-component-id="LightboxPhoto"
              src={objectUrl}
              alt={t("galleryPhoto", { n: index + 1, total: photos.length })}
              draggable={false}
            />
          </PhotoFrame>
        ) : null}
      </PhotoStage>

      {index < photos.length - 1 ? (
        <NextButton
          data-component-id="LightboxNext"
          type="button"
          aria-label={t("nextPhoto")}
          onClick={(event) => {
            event.stopPropagation();
            goToNext();
          }}
        >
          ›
        </NextButton>
      ) : null}

      <Caption data-component-id="LightboxCaption">
        {t("galleryPhoto", { n: index + 1, total: photos.length })}
      </Caption>

      {showDownloadSnackbar ? (
        <Snackbar
          message={t("imageDownloaded")}
          onDismiss={() => setShowDownloadSnackbar(false)}
        />
      ) : null}
    </Overlay>
  );
}
