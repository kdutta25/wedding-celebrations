import { createGlobalStyle, keyframes } from "../utils/styledWithConfig";

export const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(22px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const peacockFloatLeft = keyframes`
  0%,
  100% {
    transform: translate(0, 0) rotate(-1.5deg);
  }
  35% {
    transform: translate(10px, -22px) rotate(1deg);
  }
  70% {
    transform: translate(-8px, 14px) rotate(-2.5deg);
  }
`;

export const peacockFloatRight = keyframes`
  0%,
  100% {
    transform: translate(0, 0) rotate(1.5deg);
  }
  35% {
    transform: translate(-10px, -18px) rotate(-1deg);
  }
  70% {
    transform: translate(8px, 16px) rotate(2.5deg);
  }
`;

export const peacockTailSway = keyframes`
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(4deg);
  }
`;

export const featherDrift = keyframes`
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.35;
  }
  50% {
    transform: translateY(-14px) rotate(8deg);
    opacity: 0.55;
  }
`;

export const decorFloatLeft = keyframes`
  0%,
  100% {
    transform: translate(0, 0) rotate(-2deg);
  }
  40% {
    transform: translate(12px, -20px) rotate(2deg);
  }
  75% {
    transform: translate(-6px, 12px) rotate(-3deg);
  }
`;

export const decorFloatRight = keyframes`
  0%,
  100% {
    transform: translate(0, 0) rotate(2deg);
  }
  40% {
    transform: translate(-12px, -16px) rotate(-2deg);
  }
  75% {
    transform: translate(8px, 14px) rotate(3deg);
  }
`;

export const ringSpin = keyframes`
  0%,
  100% {
    transform: rotate(-8deg);
  }
  50% {
    transform: rotate(8deg);
  }
`;

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100%;
    margin: 0;
  }

  body {
    font-family:
      "Montserrat",
      ui-rounded,
      "SF Pro Rounded",
      system-ui,
      -apple-system,
      sans-serif;
    color: var(--ink);
    background: var(--page-bg);
    -webkit-font-smoothing: antialiased;
    transition:
      background 0.25s ease,
      color 0.25s ease;
  }

  html[lang="hi"] body {
    font-family: "Noto Sans Devanagari", "Montserrat", system-ui, sans-serif;
  }

  html[lang="pa"] body {
    font-family: "Noto Sans Gurmukhi", "Montserrat", system-ui, sans-serif;
  }

  html[lang="bn"] body {
    font-family: "Noto Sans Bengali", "Montserrat", system-ui, sans-serif;
  }

  @media (prefers-reduced-motion: reduce) {
    body {
      transition: none;
    }
  }
`;
