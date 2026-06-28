import styledWithConfig from "../utils/styledWithConfig";
import { languageOptions, viewTitleKey, type ViewId } from "../i18n/translations";
import { useI18n } from "../i18n/I18nContext";
import { useTheme } from "../theme/ThemeContext";

const Bar = styledWithConfig("div")`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
  padding: 12px 16px;
  border-radius: 999px;
  background: var(--pref-bg);
  border: 1px solid var(--pref-border);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    justify-items: center;
    border-radius: 20px;
  }
`;

const Left = styledWithConfig("div")`
  grid-column: 1;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 620px) {
    grid-column: 1;
    width: 100%;
    justify-content: center;
  }
`;

const Title = styledWithConfig("h1")`
  grid-column: 2;
  margin: 0;
  font-size: clamp(18px, 4vw, 24px);
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--ink);
  text-align: center;
  white-space: nowrap;

  @media (max-width: 620px) {
    grid-column: 1;
    white-space: normal;
  }
`;

const Controls = styledWithConfig("div")`
  grid-column: 3;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  @media (max-width: 620px) {
    grid-column: 1;
    width: 100%;
    justify-content: center;
  }
`;

const BackButton = styledWithConfig("button")`
  border: 1px solid var(--pref-border);
  background: var(--pref-control-bg);
  color: var(--ink);
  border-radius: 999px;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 14px;

  &:focus-visible {
    outline: 3px solid var(--accent-dark);
    outline-offset: 2px;
  }
`;

const Control = styledWithConfig("label")`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 620px) {
    flex: 1;
    min-width: 0;
  }
`;

const Select = styledWithConfig("select")`
  border: 1px solid var(--pref-border);
  background: var(--pref-control-bg);
  color: var(--ink);
  border-radius: 999px;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 12px;

  &:focus-visible {
    outline: 3px solid var(--accent-dark);
    outline-offset: 2px;
  }

  @media (max-width: 620px) {
    flex: 1;
    min-width: 0;
  }
`;

const ThemeButton = styledWithConfig("button")`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--pref-border);
  background: var(--pref-control-bg);
  color: var(--ink);
  border-radius: 999px;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 14px;

  &:focus-visible {
    outline: 3px solid var(--accent-dark);
    outline-offset: 2px;
  }
`;

type PreferencesBarProps = {
  view: ViewId;
  onNavigate: (view: ViewId) => void;
};

export function PreferencesBar({ view, onNavigate }: PreferencesBarProps) {
  const { language, setLanguage, t } = useI18n();
  const { theme, toggleTheme } = useTheme();

  return (
    <Bar
      data-component-id="PreferencesBar"
      role="toolbar"
      aria-label={t(viewTitleKey(view))}
    >
      <Left data-component-id="ToolbarLeft">
        {view !== "landing" ? (
          <BackButton
            data-component-id="BackHomeButton"
            type="button"
            onClick={() => onNavigate("landing")}
          >
            ← {t("backHome")}
          </BackButton>
        ) : null}
      </Left>

      <Title data-component-id="ToolbarTitle">
        {t(viewTitleKey(view))}
      </Title>

      <Controls data-component-id="ToolbarControls">
        <Control data-component-id="LanguageControl">
          <Select
            data-component-id="LanguageSelect"
            value={language}
            onChange={(event) =>
              setLanguage(event.target.value as typeof language)
            }
            aria-label={t("language")}
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {t(option.labelKey)}
              </option>
            ))}
          </Select>
        </Control>

        <ThemeButton
          data-component-id="ThemeToggle"
          type="button"
          onClick={toggleTheme}
          aria-label={
            theme === "light" ? t("switchToDark") : t("switchToLight")
          }
        >
          <span data-component-id="ThemeIcon" aria-hidden="true">
            {theme === "light" ? "☾" : "☀︎"}
          </span>
          <span data-component-id="ThemeLabel">
            {theme === "light" ? t("dark") : t("light")}
          </span>
        </ThemeButton>
      </Controls>
    </Bar>
  );
}
