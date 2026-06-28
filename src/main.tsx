import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nProvider } from "./i18n/I18nContext.tsx";
import { GlobalStyle } from "./theme/GlobalStyle.ts";
import { ThemeProvider } from "./theme/ThemeContext.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <GlobalStyle />
        <App />
      </I18nProvider>
    </ThemeProvider>
  </StrictMode>,
);
