import styledWithConfig from "../utils/styledWithConfig";
import { useI18n } from "../i18n/I18nContext";
import { rise } from "../theme/GlobalStyle";
import { type ViewId } from "../i18n/translations";
import landingHero from "../assets/landing-hero.png";

const LandingCard = styledWithConfig("header")`
  display: flex;
  flex-direction: column;
  background: var(--card);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid var(--card-border);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 30px 70px -25px var(--card-shadow);
  animation: ${rise} 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const HeroBanner = styledWithConfig("img")`
  width: 100%;
  aspect-ratio: 3 / 4;
  max-height: 560px;
  object-fit: contain;
  object-position: center;
  display: block;
  background: #fff;
  border-bottom: 4px solid var(--hero-border);
`;

const CardBody = styledWithConfig("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 28px 32px;
  text-align: center;
`;

const Kicker = styledWithConfig("p")`
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 12px;
  font-weight: 700;
  color: var(--muted);
  margin: 0 0 8px;
`;

const ScriptTitle = styledWithConfig("h2")`
  font-family: "Great Vibes", cursive;
  font-size: clamp(40px, 9vw, 58px);
  font-weight: 400;
  color: var(--script);
  margin: 0 0 8px;
  line-height: 1.1;
`;

const DateLine = styledWithConfig("p")`
  margin: 0 0 16px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-dark);
`;

const Lead = styledWithConfig("p")`
  font-size: 17px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
  max-width: 52ch;
`;

const NavGrid = styledWithConfig("nav")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
  margin-top: 24px;
  width: 100%;
`;

const NavCard = styledWithConfig("button")<{ $variant: ViewId }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 20px 18px;
  border: 1px solid var(--card-border);
  border-radius: 20px;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: var(--ink);
  background: ${({ $variant }) =>
    $variant === "haldi"
      ? "var(--nav-card-haldi)"
      : $variant === "wedding"
        ? "var(--nav-card-wedding)"
        : "var(--nav-card-ceremony)"};
  box-shadow: 0 12px 30px -18px var(--card-shadow);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 36px -14px var(--card-shadow);
  }

  &:focus-visible {
    outline: 3px solid var(--accent-dark);
    outline-offset: 2px;
  }
`;

const NavTitle = styledWithConfig("span")`
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

const NavDesc = styledWithConfig("span")`
  font-size: 14px;
  color: var(--muted);
  line-height: 1.45;
`;

type LandingPageProps = {
  onNavigate: (view: ViewId) => void;
};

export function LandingPage({ onNavigate }: LandingPageProps) {
  const { t } = useI18n();

  const cards: Array<{ view: ViewId; titleKey: "navHaldi" | "navWedding" | "navCeremony"; descKey: "navHaldiDesc" | "navWeddingDesc" | "navCeremonyDesc" }> = [
    { view: "haldi", titleKey: "navHaldi", descKey: "navHaldiDesc" },
    { view: "wedding", titleKey: "navWedding", descKey: "navWeddingDesc" },
    { view: "ceremony", titleKey: "navCeremony", descKey: "navCeremonyDesc" },
  ];

  return (
    <LandingCard data-component-id="LandingPage">
      <HeroBanner
        data-component-id="LandingHeroBanner"
        src={landingHero}
        alt={t("landingHeroAlt")}
      />
      <CardBody data-component-id="LandingBody">
        <Kicker data-component-id="LandingKicker">{t("landingKicker")}</Kicker>
        <ScriptTitle data-component-id="LandingTitle">
          Vibha & Kaustubh
        </ScriptTitle>
        <DateLine data-component-id="LandingDate">{t("landingDate")}</DateLine>
        <Lead data-component-id="LandingLead">{t("landingLead")}</Lead>

        <NavGrid data-component-id="LandingNav" aria-label={t("landingLead")}>
          {cards.map((card) => (
            <NavCard
              key={card.view}
              data-component-id={`LandingNavCard-${card.view}`}
              type="button"
              $variant={card.view}
              onClick={() => onNavigate(card.view)}
            >
              <NavTitle data-component-id={`LandingNavTitle-${card.view}`}>
                {t(card.titleKey)}
              </NavTitle>
              <NavDesc data-component-id={`LandingNavDesc-${card.view}`}>
                {t(card.descKey)}
              </NavDesc>
            </NavCard>
          ))}
        </NavGrid>
      </CardBody>
    </LandingCard>
  );
}
