type ArtProps = {
  idPrefix: string;
};

export function HaldiHeapArt({ idPrefix }: ArtProps) {
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

      <ellipse cx="70" cy="98" rx="46" ry="10" fill="#5d4037" opacity="0.35" />
      <path
        d="M28 88 Q28 72 70 72 Q112 72 112 88 L108 98 Q70 104 32 98 Z"
        fill={`url(#${idPrefix}-bowl)`}
      />
      <ellipse cx="70" cy="74" rx="38" ry="8" fill="#8d6e63" opacity="0.55" />

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

      {[
        [58, 52],
        [70, 44],
        [82, 56],
        [64, 62],
        [76, 58],
      ].map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="1.8"
          fill="#fff8e1"
          opacity="0.7"
        />
      ))}

      <circle cx="38" cy="92" r="5" fill="#ff9800" opacity="0.85" />
      <circle cx="38" cy="92" r="2" fill="#ffeb3b" />
      <circle cx="102" cy="90" r="4.5" fill="#ff9800" opacity="0.8" />
      <circle cx="102" cy="90" r="1.8" fill="#ffeb3b" />
    </svg>
  );
}

export function FeminineRingArt({ idPrefix }: ArtProps) {
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

      <path d="M50 18 L62 34 L50 42 L38 34 Z" fill={`url(#${idPrefix}-gem)`} />
      <path d="M50 18 L62 34 L50 42 L38 34 Z" stroke="#c9a227" strokeWidth="1" />
      <path
        d="M44 28 L50 18 L56 28"
        stroke="#fff"
        strokeWidth="1.2"
        opacity="0.65"
        fill="none"
      />

      <path
        d="M42 34 L44 28 M50 36 L50 18 M58 34 L56 28"
        stroke="#b76e79"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MasculineRingArt({ idPrefix }: ArtProps) {
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

      <path
        d="M24 50 Q50 42 76 50"
        stroke="#fff8e1"
        strokeWidth="2"
        opacity="0.45"
        strokeLinecap="round"
        fill="none"
      />

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
