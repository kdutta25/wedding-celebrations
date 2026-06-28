import styledWithConfig from "../utils/styledWithConfig";
import { useI18n } from "../i18n/I18nContext";
import {
  ceremonySteps,
  getStepText,
} from "../data/ceremonyProceedings";
import { rise } from "../theme/GlobalStyle";

const Section = styledWithConfig("section")`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  padding: 0 4px 8px;
  text-align: left;
`;

const Intro = styledWithConfig("p")`
  margin: 0 0 24px;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.65;
  max-width: 68ch;
`;

const Timeline = styledWithConfig("ol")`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Step = styledWithConfig("li")`
  position: relative;
  padding: 20px 22px 20px 56px;
  border-radius: 18px;
  background: var(--card);
  border: 1px solid var(--card-border);
  box-shadow: 0 16px 40px -24px var(--card-shadow);
  animation: ${rise} 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const StepNumber = styledWithConfig("span")`
  position: absolute;
  left: 18px;
  top: 20px;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent-dark), var(--accent));
  color: #fff;
  font-size: 13px;
  font-weight: 800;
`;

const StepTitle = styledWithConfig("h3")`
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 800;
  color: var(--ink);
  letter-spacing: -0.02em;
`;

const StepBody = styledWithConfig("p")`
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.65;
`;

const Header = styledWithConfig("div")`
  margin-bottom: 8px;
`;

const Kicker = styledWithConfig("p")`
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 12px;
  font-weight: 700;
  color: var(--accent-dark);
  margin: 0 0 8px;
`;

const Heading = styledWithConfig("h2")`
  font-family: "Great Vibes", cursive;
  font-size: clamp(32px, 7vw, 44px);
  font-weight: 400;
  color: var(--script);
  margin: 0 0 8px;
`;

const Lead = styledWithConfig("p")`
  margin: 0 0 20px;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.6;
  max-width: 60ch;
`;

export function CeremonyTimeline() {
  const { t, language } = useI18n();

  return (
    <Section data-component-id="CeremonyTimeline" aria-label={t("ceremonyTitle")}>
      <Header data-component-id="CeremonyHeader">
        <Kicker data-component-id="CeremonyKicker">{t("ceremonyKicker")}</Kicker>
        <Heading data-component-id="CeremonyHeading">{t("ceremonyTitle")}</Heading>
        <Lead data-component-id="CeremonyLead">{t("ceremonyLead")}</Lead>
      </Header>
      <Intro data-component-id="CeremonyIntro">{t("ceremonyIntro")}</Intro>

      <Timeline data-component-id="CeremonySteps">
        {ceremonySteps.map((step, index) => (
          <Step
            key={step.id}
            data-component-id={`CeremonyStep-${step.id}`}
            style={{ animationDelay: `${Math.min(index * 0.04, 0.6)}s` }}
          >
            <StepNumber data-component-id={`CeremonyStepNumber-${step.id}`}>
              {index + 1}
            </StepNumber>
            <StepTitle data-component-id={`CeremonyStepTitle-${step.id}`}>
              {getStepText(step, language, "title")}
            </StepTitle>
            <StepBody data-component-id={`CeremonyStepBody-${step.id}`}>
              {getStepText(step, language, "body")}
            </StepBody>
          </Step>
        ))}
      </Timeline>
    </Section>
  );
}
