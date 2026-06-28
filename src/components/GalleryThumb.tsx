import { useState } from "react";
import styledWithConfig, { keyframes } from "../utils/styledWithConfig";

const shimmer = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

const ThumbWrap = styledWithConfig("div")`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--gallery-skeleton-bg);
`;

const Skeleton = styledWithConfig("div")`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    var(--gallery-skeleton-bg) 8%,
    var(--gallery-skeleton-shine) 18%,
    var(--gallery-skeleton-bg) 33%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: var(--gallery-skeleton-bg);
  }
`;

const Thumb = styledWithConfig("img")<{ $visible: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.25s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

type GalleryThumbProps = {
  src: string;
  alt: string;
};

export function GalleryThumb({ src, alt }: GalleryThumbProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <ThumbWrap data-component-id="GalleryThumbWrap">
      {!loaded && !failed ? (
        <Skeleton data-component-id="GalleryThumbSkeleton" aria-hidden="true" />
      ) : null}
      <Thumb
        data-component-id="GalleryThumbImage"
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        $visible={loaded}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />
    </ThumbWrap>
  );
}
