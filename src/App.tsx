import { useEffect, useState } from "react";
import styledWithConfig from "./utils/styledWithConfig";
import { Gallery } from "./components/Gallery";
import { LandingPage } from "./components/LandingPage";
import { PreferencesBar } from "./components/PreferencesBar";
import { SectionHero } from "./components/SectionHero";
import { CeremonyTimeline } from "./components/CeremonyTimeline";
import { SiteFooter } from "./components/SiteFooter";
import { loadPhotos } from "./utils/photos";
import { type ViewId } from "./i18n/translations";
import { useI18n } from "./i18n/I18nContext";
import haldiHero from "./assets/haldi-hero.png";
import weddingHero from "./assets/wedding-hero.png";

const Page = styledWithConfig("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding: 24px 20px 48px;
  min-height: 100%;
`;

const Shell = styledWithConfig("div")`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

const CeremonyLinkWrap = styledWithConfig("div")`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

const CeremonyLink = styledWithConfig("button")`
  border: 1px solid var(--pref-border);
  background: var(--pref-control-bg);
  color: var(--ink);
  border-radius: 999px;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  padding: 10px 18px;

  &:focus-visible {
    outline: 3px solid var(--accent-dark);
    outline-offset: 2px;
  }
`;

export default function App() {
  const { t } = useI18n();
  const [view, setView] = useState<ViewId>("landing");
  const [haldiPhotos, setHaldiPhotos] = useState<string[]>([]);
  const [weddingPhotos, setWeddingPhotos] = useState<string[]>([]);

  useEffect(() => {
    void loadPhotos("haldi").then(setHaldiPhotos);
    void loadPhotos("wedding").then(setWeddingPhotos);
  }, []);

  useEffect(() => {
    const section =
      view === "haldi" || view === "wedding" ? view : undefined;
    if (section) {
      document.documentElement.dataset.section = section;
    } else {
      delete document.documentElement.dataset.section;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  return (
    <Page data-component-id="Page">
      <Shell data-component-id="Shell">
        <PreferencesBar view={view} onNavigate={setView} />

        {view === "landing" ? (
          <LandingPage onNavigate={setView} />
        ) : null}

        {view === "haldi" ? (
          <>
            <SectionHero
              imageSrc={haldiHero}
              heroAltKey="haldiHeroAlt"
              kickerKey="haldiKicker"
              title="Haldi & Mehndi"
              leadKey="haldiLead"
            />
            <Gallery albumId="haldi" photos={haldiPhotos} />
          </>
        ) : null}

        {view === "wedding" ? (
          <>
            <SectionHero
              imageSrc={weddingHero}
              heroAltKey="weddingHeroAlt"
              kickerKey="weddingKicker"
              title="Vibha & Kaustubh"
              leadKey="weddingLead"
              showDate
            />
            <CeremonyLinkWrap data-component-id="CeremonyLinkWrap">
              <CeremonyLink
                data-component-id="CeremonyLinkButton"
                type="button"
                onClick={() => setView("ceremony")}
              >
                {t("viewCeremony")}
              </CeremonyLink>
            </CeremonyLinkWrap>
            <Gallery albumId="wedding" photos={weddingPhotos} />
          </>
        ) : null}

        {view === "ceremony" ? <CeremonyTimeline /> : null}

        <SiteFooter />
      </Shell>
    </Page>
  );
}
