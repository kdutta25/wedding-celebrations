import { useId } from "react";
import styledWithConfig, { css, keyframes } from "../../utils/styledWithConfig";
import { HaldiHeapArt } from "../decor/WeddingDecorArt";

const heapPulse = keyframes`
  0%, 100% { clip-path: inset(78% 0 0 0); }
  50% { clip-path: inset(62% 0 0 0); }
`;

const Frame = styledWithConfig("div")`
  position: relative;
  width: min(200px, 52vw);
  aspect-ratio: 140 / 120;
  filter: drop-shadow(0 16px 28px rgba(0, 0, 0, 0.22));

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const Layer = styledWithConfig("div")`
  position: absolute;
  inset: 0;
`;

const GhostLayer = styledWithConfig(Layer)`
  opacity: 0.22;
`;

const FillLayer = styledWithConfig(Layer)<{
  $percent: number;
  $indeterminate: boolean;
}>`
  clip-path: inset(${({ $percent }) => 100 - $percent}% 0 0 0);
  transition: clip-path 0.35s ease;

  ${({ $indeterminate }) =>
    $indeterminate
      ? css`
          animation: ${heapPulse} 1.4s ease-in-out infinite;
        `
      : ""}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

type HaldiHeapLoaderProps = {
  progress: number;
  indeterminate?: boolean;
};

export function HaldiHeapLoader({
  progress,
  indeterminate = false,
}: HaldiHeapLoaderProps) {
  const id = useId().replace(/:/g, "");
  const percent = indeterminate
    ? 22
    : Math.max(4, Math.min(100, progress));

  return (
    <Frame data-component-id="HaldiHeapLoader" aria-hidden="true">
      <GhostLayer>
        <HaldiHeapArt idPrefix={`${id}-ghost`} />
      </GhostLayer>
      <FillLayer $percent={percent} $indeterminate={indeterminate}>
        <HaldiHeapArt idPrefix={id} />
      </FillLayer>
    </Frame>
  );
}
