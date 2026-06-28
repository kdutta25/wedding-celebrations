import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { GiDiamondRing, GiLotus, GiSunflower } from "react-icons/gi";
import styledWithConfig from "../utils/styledWithConfig";
import { useI18n } from "../i18n/I18nContext";
import { rise } from "../theme/GlobalStyle";
import { type ViewId } from "../i18n/translations";
import { pathFromView } from "../routes";
import landingHero from "../assets/landing-hero.png";
import type { IconType } from "react-icons";

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
  height: auto;
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
  margin: 0 0 16px;
  line-height: 1.1;
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

const NavCard = styledWithConfig(Link)<{ $variant: ViewId }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px 18px 18px;
  border: 1px solid var(--card-border);
  border-radius: 20px;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: var(--ink);
  text-decoration: none;
  overflow: hidden;
  background: ${({ $variant }) =>
    $variant === "haldi"
      ? "var(--nav-card-haldi)"
      : $variant === "wedding"
        ? "var(--nav-card-wedding)"
        : "var(--nav-card-ceremony)"};
  box-shadow: 0 12px 30px -18px var(--card-shadow);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    top: -28px;
    right: -28px;
    width: 96px;
    height: 96px;
    border-radius: 999px;
    opacity: 0.45;
    pointer-events: none;
    background: ${({ $variant }) =>
      $variant === "haldi"
        ? "radial-gradient(circle, #ffb300 0%, transparent 70%)"
        : $variant === "wedding"
          ? "radial-gradient(circle, #f48fb1 0%, transparent 70%)"
          : "radial-gradient(circle, #4db6ac 0%, transparent 70%)"};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -36px;
    left: -20px;
    width: 88px;
    height: 88px;
    border-radius: 999px;
    opacity: 0.28;
    pointer-events: none;
    background: ${({ $variant }) =>
      $variant === "haldi"
        ? "radial-gradient(circle, #ff8f00 0%, transparent 70%)"
        : $variant === "wedding"
          ? "radial-gradient(circle, #ce93d8 0%, transparent 70%)"
          : "radial-gradient(circle, #00897b 0%, transparent 70%)"};
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px -14px var(--card-shadow);
    border-color: ${({ $variant }) =>
      $variant === "haldi"
        ? "rgba(230, 81, 0, 0.35)"
        : $variant === "wedding"
          ? "rgba(173, 20, 87, 0.35)"
          : "rgba(0, 105, 92, 0.35)"};
  }

  &:focus-visible {
    outline: 3px solid var(--accent-dark);
    outline-offset: 2px;
  }
`;

const NavCardTop = styledWithConfig("div")`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`;

const NavIconBadge = styledWithConfig("span")<{ $variant: ViewId }>`
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 16px;
  font-size: 26px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.85);
  box-shadow: 0 8px 20px -10px rgba(0, 0, 0, 0.22);
  color: ${({ $variant }) =>
    $variant === "haldi"
      ? "#e65100"
      : $variant === "wedding"
        ? "#ad1457"
        : "#00695c"};

  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.28);
    border-color: rgba(255, 255, 255, 0.12);
  }
`;

const NavChevron = styledWithConfig("span")`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
  color: var(--ink);
  font-size: 16px;
  flex-shrink: 0;
  transition: transform 0.2s ease, background 0.2s ease;

  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.25);
  }

  ${NavCard}:hover & {
    transform: translateX(3px);
    background: rgba(255, 255, 255, 0.85);
  }
`;

const NavText = styledWithConfig("div")`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const NavTitle = styledWithConfig("span")`
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const NavDesc = styledWithConfig("span")`
  font-size: 14px;
  color: var(--muted);
  line-height: 1.45;
`;

const NavAccent = styledWithConfig("span")<{ $variant: ViewId }>`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.5);
  color: ${({ $variant }) =>
    $variant === "haldi"
      ? "#bf360c"
      : $variant === "wedding"
        ? "#880e4f"
        : "#004d40"};

  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.22);
  }
`;

type NavCardConfig = {
  view: ViewId;
  titleKey: "navHaldi" | "navWedding" | "navCeremony";
  descKey: "navHaldiDesc" | "navWeddingDesc" | "navCeremonyDesc";
  badgeKey: "navHaldiBadge" | "navWeddingBadge" | "navCeremonyBadge";
  icon: IconType;
};

const cards: NavCardConfig[] = [
  {
    view: "haldi",
    titleKey: "navHaldi",
    descKey: "navHaldiDesc",
    badgeKey: "navHaldiBadge",
    icon: GiSunflower,
  },
  {
    view: "wedding",
    titleKey: "navWedding",
    descKey: "navWeddingDesc",
    badgeKey: "navWeddingBadge",
    icon: GiDiamondRing,
  },
  {
    view: "ceremony",
    titleKey: "navCeremony",
    descKey: "navCeremonyDesc",
    badgeKey: "navCeremonyBadge",
    icon: GiLotus,
  },
];

export function LandingPage() {
  const { t } = useI18n();

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
        <Lead data-component-id="LandingLead">{t("landingLead")}</Lead>

        <NavGrid data-component-id="LandingNav" aria-label={t("landingLead")}>
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <NavCard
                key={card.view}
                data-component-id={`LandingNavCard-${card.view}`}
                to={pathFromView(card.view)}
                $variant={card.view}
              >
                <NavCardTop data-component-id={`LandingNavTop-${card.view}`}>
                  <NavIconBadge
                    data-component-id={`LandingNavIcon-${card.view}`}
                    $variant={card.view}
                    aria-hidden="true"
                  >
                    <Icon />
                  </NavIconBadge>
                  <NavChevron
                    data-component-id={`LandingNavChevron-${card.view}`}
                    aria-hidden="true"
                  >
                    <FiArrowRight />
                  </NavChevron>
                </NavCardTop>
                <NavText data-component-id={`LandingNavText-${card.view}`}>
                  <NavTitle data-component-id={`LandingNavTitle-${card.view}`}>
                    {t(card.titleKey)}
                  </NavTitle>
                  <NavDesc data-component-id={`LandingNavDesc-${card.view}`}>
                    {t(card.descKey)}
                  </NavDesc>
                </NavText>
                <NavAccent
                  data-component-id={`LandingNavAccent-${card.view}`}
                  $variant={card.view}
                >
                  {t(card.badgeKey)}
                </NavAccent>
              </NavCard>
            );
          })}
        </NavGrid>
      </CardBody>
    </LandingCard>
  );
}
