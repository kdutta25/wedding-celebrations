import styledWithConfig from "../utils/styledWithConfig";
import { useI18n } from "../i18n/I18nContext";
import { rise } from "../theme/GlobalStyle";
import type { TranslationKey } from "../i18n/translations";

const HeroCard = styledWithConfig("header")`
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
  max-height: 520px;
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
  padding: 28px 28px 36px;
  text-align: center;
`;

const Kicker = styledWithConfig("p")`
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 12px;
  font-weight: 700;
  color: var(--accent-dark);
  margin: 0 0 12px;
`;

const ScriptTitle = styledWithConfig("h2")`
  font-family: "Great Vibes", cursive;
  font-size: clamp(36px, 8vw, 52px);
  font-weight: 400;
  color: var(--script);
  margin: 0 0 12px;
  line-height: 1.1;
`;

const Lead = styledWithConfig("p")`
  font-size: 17px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
  max-width: 52ch;
`;

const DateLine = styledWithConfig("p")`
  margin: 16px 0 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-dark);
`;

type SectionHeroProps = {
  imageSrc: string;
  heroAltKey: TranslationKey;
  kickerKey?: TranslationKey;
  title: string;
  leadKey: TranslationKey;
  showDate?: boolean;
};

export function SectionHero({
  imageSrc,
  heroAltKey,
  kickerKey,
  title,
  leadKey,
  showDate = false,
}: SectionHeroProps) {
  const { t } = useI18n();

  return (
    <HeroCard data-component-id="SectionHero">
      <HeroBanner
        data-component-id="SectionHeroBanner"
        src={imageSrc}
        alt={t(heroAltKey)}
      />
      <CardBody data-component-id="SectionHeroBody">
        {kickerKey ? (
          <Kicker data-component-id="SectionHeroKicker">{t(kickerKey)}</Kicker>
        ) : null}
        <ScriptTitle data-component-id="SectionHeroTitle">{title}</ScriptTitle>
        <Lead data-component-id="SectionHeroLead">{t(leadKey)}</Lead>
        {showDate ? (
          <DateLine data-component-id="SectionHeroDate">
            {t("landingDate")}
          </DateLine>
        ) : null}
      </CardBody>
    </HeroCard>
  );
}
