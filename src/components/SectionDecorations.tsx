import styledWithConfig, { css } from "../utils/styledWithConfig";
import {
  decorFloatLeft,
  decorFloatRight,
  ringSpin,
} from "../theme/GlobalStyle";
import type { ViewId } from "../i18n/translations";
import {
  FeminineRingArt,
  HaldiHeapArt,
  MasculineRingArt,
} from "./decor/WeddingDecorArt";

const DecorLayer = styledWithConfig("div")`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const motionSafe = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;

    * {
      animation: none !important;
    }
  }
`;

const FloatSlot = styledWithConfig("div")<{
  $side: "left" | "right";
  $variant: "haldi" | "ring";
}>`
  position: fixed;
  opacity: var(--section-decor-opacity);
  animation: ${({ $side }) =>
      $side === "left" ? decorFloatLeft : decorFloatRight}
    12s ease-in-out infinite;
  ${motionSafe};

  ${({ $side, $variant }) =>
    $side === "left"
      ? css`
          left: max(8px, 2vw);
          top: ${$variant === "haldi" ? "18%" : "22%"};
        `
      : css`
          right: max(8px, 2vw);
          top: ${$variant === "haldi" ? "28%" : "20%"};
        `}

  ${({ $variant }) =>
    $variant === "haldi"
      ? css`
          width: min(140px, 22vw);
          height: min(120px, 18vw);
        `
      : css`
          width: min(100px, 16vw);
          height: min(100px, 16vw);
          animation-duration: 10s;
        `}

  svg {
    width: 100%;
    height: 100%;
    display: block;
    filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.12));
  }

  @media (max-width: 900px) {
    opacity: calc(var(--section-decor-opacity) * 0.75);
  }

  @media (max-width: 620px) {
    opacity: calc(var(--section-decor-opacity) * 0.55);
    ${({ $variant }) =>
      $variant === "haldi"
        ? css`
            width: min(100px, 26vw);
            height: min(86px, 22vw);
          `
        : css`
            width: min(72px, 20vw);
            height: min(72px, 20vw);
          `}
  }
`;

const RingSlot = styledWithConfig(FloatSlot)<{ $side: "left" | "right" }>`
  animation: ${({ $side }) =>
      $side === "left"
        ? css`
            ${decorFloatLeft} 11s ease-in-out infinite,
            ${ringSpin} 16s ease-in-out infinite
          `
        : css`
            ${decorFloatRight} 11s ease-in-out infinite,
            ${ringSpin} 16s ease-in-out infinite
          `};
  ${motionSafe};
`;

const SecondaryHaldi = styledWithConfig(FloatSlot)`
  top: 58%;
  width: min(96px, 15vw);
  height: min(82px, 13vw);
  opacity: calc(var(--section-decor-opacity) * 0.72);
  animation-duration: 15s;
  animation-delay: -4s;

  ${({ $side }) =>
    $side === "left"
      ? css`
          left: max(24px, 5vw);
        `
      : css`
          right: max(20px, 4vw);
        `}

  @media (max-width: 620px) {
    display: none;
  }
`;

type SectionDecorationsProps = {
  view: ViewId;
};

export function SectionDecorations({ view }: SectionDecorationsProps) {
  if (view === "haldi") {
    return (
      <DecorLayer data-component-id="SectionDecorations" aria-hidden="true">
        <FloatSlot
          data-component-id="HaldiHeapLeft"
          $side="left"
          $variant="haldi"
        >
          <HaldiHeapArt idPrefix="haldi-left" />
        </FloatSlot>
        <SecondaryHaldi
          data-component-id="HaldiHeapRight"
          $side="right"
          $variant="haldi"
        >
          <HaldiHeapArt idPrefix="haldi-right" />
        </SecondaryHaldi>
      </DecorLayer>
    );
  }

  if (view === "wedding") {
    return (
      <DecorLayer data-component-id="SectionDecorations" aria-hidden="true">
        <RingSlot
          data-component-id="FeminineRing"
          $side="left"
          $variant="ring"
        >
          <FeminineRingArt idPrefix="ring-feminine" />
        </RingSlot>
        <RingSlot
          data-component-id="MasculineRing"
          $side="right"
          $variant="ring"
        >
          <MasculineRingArt idPrefix="ring-masculine" />
        </RingSlot>
      </DecorLayer>
    );
  }

  return null;
}
