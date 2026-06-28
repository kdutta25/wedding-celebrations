import { useId } from "react";
import styledWithConfig, { css, keyframes } from "../../utils/styledWithConfig";
import {
  FeminineRingArt,
  MasculineRingArt,
} from "../decor/WeddingDecorArt";

const ringPulse = keyframes`
  0%, 100% { opacity: 0.45; }
  50% { opacity: 1; }
`;

const Frame = styledWithConfig("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(12px, 4vw, 28px);
  width: min(320px, 86vw);
`;

const RingWrap = styledWithConfig("div")`
  position: relative;
  width: min(130px, 38vw);
  aspect-ratio: 1;
  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.2));

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const RingLayer = styledWithConfig("div")`
  position: absolute;
  inset: 0;
`;

const GhostLayer = styledWithConfig(RingLayer)`
  opacity: 0.2;
`;

const ProgressRing = styledWithConfig("svg")<{
  $dash: number;
  $perimeter: number;
  $indeterminate: boolean;
}>`
  position: absolute;
  inset: 0;
  overflow: visible;
  pointer-events: none;

  ellipse {
    fill: none;
    stroke-linecap: round;
    transform-origin: 50% 58%;
    transform: rotate(-18deg);
    stroke-dasharray: ${({ $dash, $perimeter }) =>
      `${$dash} ${Math.max(1, $perimeter - $dash)}`};
    transition: stroke-dasharray 0.35s ease;

    ${({ $indeterminate }) =>
      $indeterminate
        ? css`
            animation: ${ringPulse} 1.5s ease-in-out infinite;
          `
        : ""}

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
`;

type WeddingRingsLoaderProps = {
  progress: number;
  indeterminate?: boolean;
};

function ellipsePerimeter(rx: number, ry: number): number {
  return (
    Math.PI * (3 * (rx + ry) - Math.sqrt((3 * rx + ry) * (rx + 3 * ry)))
  );
}

export function WeddingRingsLoader({
  progress,
  indeterminate = false,
}: WeddingRingsLoaderProps) {
  const id = useId().replace(/:/g, "");
  const percent = indeterminate
    ? 28
    : Math.max(4, Math.min(100, progress));

  const femininePerimeter = ellipsePerimeter(28, 10);
  const masculinePerimeter = ellipsePerimeter(32, 13);
  const feminineDash = (percent / 100) * femininePerimeter;
  const masculineDash = (percent / 100) * masculinePerimeter;

  return (
    <Frame data-component-id="WeddingRingsLoader" aria-hidden="true">
      <RingWrap data-component-id="FeminineRingLoader">
        <GhostLayer>
          <FeminineRingArt idPrefix={`${id}-f-ghost`} />
        </GhostLayer>
        <RingLayer>
          <FeminineRingArt idPrefix={`${id}-f`} />
        </RingLayer>
        <ProgressRing
          viewBox="0 0 100 100"
          $dash={feminineDash}
          $perimeter={femininePerimeter}
          $indeterminate={indeterminate}
        >
          <defs>
            <linearGradient id={`${id}-f-progress`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f8bbd0" />
              <stop offset="100%" stopColor="#ad1457" />
            </linearGradient>
          </defs>
          <ellipse
            cx="50"
            cy="58"
            rx="28"
            ry="10"
            stroke={`url(#${id}-f-progress)`}
            strokeWidth="8"
          />
        </ProgressRing>
      </RingWrap>

      <RingWrap data-component-id="MasculineRingLoader">
        <GhostLayer>
          <MasculineRingArt idPrefix={`${id}-m-ghost`} />
        </GhostLayer>
        <RingLayer>
          <MasculineRingArt idPrefix={`${id}-m`} />
        </RingLayer>
        <ProgressRing
          viewBox="0 0 100 100"
          $dash={masculineDash}
          $perimeter={masculinePerimeter}
          $indeterminate={indeterminate}
        >
          <defs>
            <linearGradient id={`${id}-m-progress`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff8e1" />
              <stop offset="100%" stopColor="#c9a227" />
            </linearGradient>
          </defs>
          <ellipse
            cx="50"
            cy="54"
            rx="32"
            ry="13"
            stroke={`url(#${id}-m-progress)`}
            strokeWidth="12"
          />
        </ProgressRing>
      </RingWrap>
    </Frame>
  );
}
