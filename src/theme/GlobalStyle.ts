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
