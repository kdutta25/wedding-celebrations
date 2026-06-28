import styledWithConfig, { css } from "../utils/styledWithConfig";
import {
  featherDrift,
  peacockFloatLeft,
  peacockFloatRight,
  peacockTailSway,
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

const PeacockSlot = styledWithConfig("div")<{ $side: "left" | "right" }>`
  position: fixed;
  top: 12%;
  width: min(280px, 34vw);
  height: min(420px, 58vh);
  opacity: var(--peacock-opacity);
  animation: ${({ $side }) =>
      $side === "left" ? peacockFloatLeft : peacockFloatRight}
    14s ease-in-out infinite;
  ${motionSafe};

  ${({ $side }) =>
    $side === "left"
      ? css`
          left: max(-28px, -2vw);
        `
      : css`
          right: max(-28px, -2vw);
        `}

  @media (max-width: 900px) {
    width: min(200px, 38vw);
    height: min(300px, 46vh);
    top: 8%;
    opacity: calc(var(--peacock-opacity) * 0.72);
  }

  @media (max-width: 620px) {
    width: min(140px, 36vw);
    height: min(220px, 38vh);
    opacity: calc(var(--peacock-opacity) * 0.55);
  }
`;

const PeacockSvgWrap = styledWithConfig("div")<{ $side: "left" | "right" }>`
  width: 100%;
  height: 100%;
  transform: ${({ $side }) => ($side === "right" ? "scaleX(-1)" : "none")};

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const TailGroup = styledWithConfig("g")`
  transform-origin: 58% 72%;
  animation: ${peacockTailSway} 9s ease-in-out infinite;
  ${motionSafe};
`;

const FeatherAccent = styledWithConfig("span")<{
  $top: string;
  $side: "left" | "right";
  $delay: string;
}>`
  position: fixed;
  top: ${({ $top }) => $top};
  ${({ $side }) => ($side === "left" ? "left: 4%;" : "right: 4%;")}
  font-size: 18px;
  opacity: var(--peacock-feather-opacity);
  color: #26a69a;
  animation: ${featherDrift} 7s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
  ${motionSafe};

  @media (max-width: 620px) {
    display: none;
  }
`;

type PeacockArtProps = {
  idPrefix: string;
};

function PeacockArt({ idPrefix }: PeacockArtProps) {
  return (
    <svg viewBox="0 0 160 240" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${idPrefix}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4db6ac" />
          <stop offset="55%" stopColor="#0d7377" />
          <stop offset="100%" stopColor="#00695c" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-wing`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffccbc" />
          <stop offset="100%" stopColor="#d4a574" />
        </linearGradient>
        <radialGradient id={`${idPrefix}-eye`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd54f" />
          <stop offset="45%" stopColor="#00897b" />
          <stop offset="100%" stopColor="#004d40" />
        </radialGradient>
        <filter id={`${idPrefix}-soft`} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
      </defs>

      <TailGroup>
        {/* tail plumes */}
        {[
          { d: "M88 168 Q52 120 28 48", color: "#26a69a", w: 14 },
          { d: "M92 172 Q68 108 58 36", color: "#00897b", w: 12 },
          { d: "M96 176 Q82 112 84 32", color: "#4db6ac", w: 11 },
          { d: "M100 178 Q96 118 108 40", color: "#ff8a65", w: 10 },
          { d: "M104 176 Q108 108 128 52", color: "#26c6da", w: 11 },
          { d: "M108 172 Q118 118 142 72", color: "#00838f", w: 10 },
        ].map((feather, index) => (
          <path
            key={feather.d}
            d={feather.d}
            stroke={feather.color}
            strokeWidth={feather.w}
            strokeLinecap="round"
            opacity={0.72 - index * 0.04}
          />
        ))}

        {/* feather eyes */}
        {[
          { cx: 34, cy: 58, r: 9 },
          { cx: 62, cy: 42, r: 8 },
          { cx: 88, cy: 38, r: 8 },
          { cx: 112, cy: 52, r: 7 },
          { cx: 132, cy: 78, r: 7 },
        ].map((eye) => (
          <g key={`${eye.cx}-${eye.cy}`} filter={`url(#${idPrefix}-soft)`}>
            <circle cx={eye.cx} cy={eye.cy} r={eye.r + 3} fill="#80cbc4" opacity="0.35" />
            <circle
              cx={eye.cx}
              cy={eye.cy}
              r={eye.r}
              fill={`url(#${idPrefix}-eye)`}
              opacity="0.9"
            />
            <circle cx={eye.cx - 2} cy={eye.cy - 2} r={eye.r * 0.22} fill="#fff" opacity="0.7" />
          </g>
        ))}

        {/* floral accents in tail */}
        <circle cx="48" cy="92" r="4" fill="#ff8a65" opacity="0.65" />
        <circle cx="74" cy="72" r="3.5" fill="#f48fb1" opacity="0.6" />
        <circle cx="102" cy="88" r="3.5" fill="#ffb74d" opacity="0.55" />
      </TailGroup>

      {/* body */}
      <ellipse cx="92" cy="178" rx="22" ry="28" fill={`url(#${idPrefix}-body)`} />
      <ellipse cx="92" cy="178" rx="22" ry="28" fill="#fff" opacity="0.08" />

      {/* wing */}
      <path
        d="M78 168 Q58 158 52 142 Q68 150 82 162 Z"
        fill={`url(#${idPrefix}-wing)`}
        opacity="0.92"
      />
      <path
        d="M78 168 Q68 160 64 150"
        stroke="#c9a227"
        strokeWidth="1.2"
        opacity="0.55"
        fill="none"
      />

      {/* neck */}
      <path
        d="M92 152 Q88 136 90 118 Q92 108 96 102"
        stroke="#00796b"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* head */}
      <circle cx="98" cy="98" r="11" fill="#00897b" />
      <circle cx="104" cy="96" r="2.2" fill="#263238" />
      <path d="M108 98 L114 96" stroke="#c9a227" strokeWidth="1.5" strokeLinecap="round" />

      {/* crest */}
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M ${94 + i * 2} 88 Q ${96 + i * 3} 72 ${90 + i * 4} 62`}
          stroke={i % 2 === 0 ? "#26a69a" : "#4dd0e1"}
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.85"
        />
      ))}
    </svg>
  );
}

export function PeacockDecorations({ view }: { view: ViewId }) {
  if (view === "haldi" || view === "wedding") {
    return null;
  }

  return (
    <DecorLayer data-component-id="PeacockDecorations" aria-hidden="true">
      <PeacockSlot data-component-id="PeacockLeft" $side="left">
        <PeacockSvgWrap data-component-id="PeacockLeftArt" $side="left">
          <PeacockArt idPrefix="peacock-left" />
        </PeacockSvgWrap>
      </PeacockSlot>

      <PeacockSlot data-component-id="PeacockRight" $side="right">
        <PeacockSvgWrap data-component-id="PeacockRightArt" $side="right">
          <PeacockArt idPrefix="peacock-right" />
        </PeacockSvgWrap>
      </PeacockSlot>

      <FeatherAccent
        data-component-id="FeatherAccentLeftOne"
        $top="28%"
        $side="left"
        $delay="0s"
      >
        ✦
      </FeatherAccent>
      <FeatherAccent
        data-component-id="FeatherAccentLeftTwo"
        $top="62%"
        $side="left"
        $delay="1.4s"
      >
        ❧
      </FeatherAccent>
      <FeatherAccent
        data-component-id="FeatherAccentRightOne"
        $top="34%"
        $side="right"
        $delay="0.7s"
      >
        ✦
      </FeatherAccent>
      <FeatherAccent
        data-component-id="FeatherAccentRightTwo"
        $top="68%"
        $side="right"
        $delay="2.1s"
      >
        ❧
      </FeatherAccent>
    </DecorLayer>
  );
}
