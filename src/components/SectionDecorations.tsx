import styledWithConfig, { css } from "../utils/styledWithConfig";
import {
  decorFloatLeft,
  decorFloatRight,
  ringSpin,
} from "../theme/GlobalStyle";
import type { ViewId } from "../i18n/translations";

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

function HaldiHeapArt({ idPrefix }: { idPrefix: string }) {
  return (
    <svg viewBox="0 0 140 120" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id={`${idPrefix}-mound`} cx="45%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#ffe082" />
          <stop offset="55%" stopColor="#ffb300" />
          <stop offset="100%" stopColor="#ff8f00" />
        </radialGradient>
        <linearGradient id={`${idPrefix}-bowl`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bcaaa4" />
          <stop offset="100%" stopColor="#6d4c41" />
        </linearGradient>
      </defs>

      {/* brass bowl */}
      <ellipse cx="70" cy="98" rx="46" ry="10" fill="#5d4037" opacity="0.35" />
      <path
        d="M28 88 Q28 72 70 72 Q112 72 112 88 L108 98 Q70 104 32 98 Z"
        fill={`url(#${idPrefix}-bowl)`}
      />
      <ellipse cx="70" cy="74" rx="38" ry="8" fill="#8d6e63" opacity="0.55" />

      {/* heaped haldi */}
      <path
        d="M42 78 Q70 18 98 78 Q88 84 70 86 Q52 84 42 78 Z"
        fill={`url(#${idPrefix}-mound)`}
      />
      <path
        d="M52 68 Q70 38 88 68"
        stroke="#fff59d"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* texture specks */}
      {[
        [58, 52],
        [70, 44],
        [82, 56],
        [64, 62],
        [76, 58],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.8" fill="#fff8e1" opacity="0.7" />
      ))}

      {/* marigold accents */}
      <circle cx="38" cy="92" r="5" fill="#ff9800" opacity="0.85" />
      <circle cx="38" cy="92" r="2" fill="#ffeb3b" />
      <circle cx="102" cy="90" r="4.5" fill="#ff9800" opacity="0.8" />
      <circle cx="102" cy="90" r="1.8" fill="#ffeb3b" />
    </svg>
  );
}

function FeminineRingArt({ idPrefix }: { idPrefix: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${idPrefix}-rose`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f8bbd0" />
          <stop offset="45%" stopColor="#e0bfb8" />
          <stop offset="100%" stopColor="#b76e79" />
        </linearGradient>
        <radialGradient id={`${idPrefix}-gem`} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#e1f5fe" />
          <stop offset="100%" stopColor="#80deea" />
        </radialGradient>
      </defs>

      <ellipse
        cx="50"
        cy="58"
        rx="28"
        ry="10"
        stroke={`url(#${idPrefix}-rose)`}
        strokeWidth="7"
        fill="none"
      />
      <ellipse cx="50" cy="58" rx="28" ry="10" fill="#fff" opacity="0.12" />

      {/* diamond */}
      <path d="M50 18 L62 34 L50 42 L38 34 Z" fill={`url(#${idPrefix}-gem)`} />
      <path d="M50 18 L62 34 L50 42 L38 34 Z" stroke="#c9a227" strokeWidth="1" />
      <path
        d="M44 28 L50 18 L56 28"
        stroke="#fff"
        strokeWidth="1.2"
        opacity="0.65"
        fill="none"
      />

      {/* prongs */}
      <path
        d="M42 34 L44 28 M50 36 L50 18 M58 34 L56 28"
        stroke="#b76e79"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MasculineRingArt({ idPrefix }: { idPrefix: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${idPrefix}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff8e1" />
          <stop offset="35%" stopColor="#ffd54f" />
          <stop offset="100%" stopColor="#c9a227" />
        </linearGradient>
      </defs>

      <ellipse
        cx="50"
        cy="54"
        rx="32"
        ry="13"
        stroke={`url(#${idPrefix}-gold)`}
        strokeWidth="11"
        fill="none"
      />
      <ellipse cx="50" cy="54" rx="32" ry="13" fill="#fff" opacity="0.1" />

      {/* brushed highlight */}
      <path
        d="M24 50 Q50 42 76 50"
        stroke="#fff8e1"
        strokeWidth="2"
        opacity="0.45"
        strokeLinecap="round"
        fill="none"
      />

      {/* subtle inset line */}
      <ellipse
        cx="50"
        cy="54"
        rx="24"
        ry="8"
        stroke="#a67c00"
        strokeWidth="1"
        opacity="0.35"
        fill="none"
      />
    </svg>
  );
}

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
