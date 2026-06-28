import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import styledWithConfig from "../utils/styledWithConfig";
import { FOOTER_LINKS } from "../constants/footerLinks";
import { useI18n } from "../i18n/I18nContext";

const FooterBar = styledWithConfig("footer")`
  margin-top: 3rem;
  padding: 2.5rem 1.25rem 2.25rem;
  border-top: 1px solid var(--pref-border);
  background: var(--pref-bg);
  border-radius: 28px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

const Inner = styledWithConfig("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

const ThreeCol = styledWithConfig("div")`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    align-items: start;
    text-align: left;
  }
`;

const Col = styledWithConfig("div")`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styledWithConfig("h3")`
  margin: 0;
  font-size: clamp(1rem, 2.5vw, 1.12rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.35;
  color: var(--ink);
`;

const SocialList = styledWithConfig("ul")`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const SocialItem = styledWithConfig("li")``;

const SocialAnchor = styledWithConfig("a")`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid var(--pref-border);
  color: var(--ink);
  font-size: 1.25rem;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: var(--accent-dark);
    color: var(--accent-dark);
  }

  &:focus-visible {
    outline: 3px solid var(--accent-dark);
    outline-offset: 2px;
  }
`;

const BottomRow = styledWithConfig("div")`
  margin-top: 1.75rem;
  padding-top: 1.15rem;
  border-top: 1px solid var(--pref-border);
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const Meta = styledWithConfig("small")`
  color: var(--muted);
  font-size: 0.82rem;
`;

export function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <FooterBar data-component-id="SiteFooter" role="contentinfo">
      <Inner data-component-id="FooterInner">
        <ThreeCol data-component-id="FooterThreeCol">
          <Col data-component-id="FooterColDesigned">
            <FooterHeading data-component-id="FooterDesigned">
              {t("footerDesigned")}
            </FooterHeading>
          </Col>
          <Col data-component-id="FooterColCopyright">
            <FooterHeading data-component-id="FooterCopyright">
              {t("footerCopyright", { year })}
            </FooterHeading>
          </Col>
          <Col data-component-id="FooterColSocial">
            <SocialList data-component-id="SocialList">
              <SocialItem data-component-id="SocialItemYoutube">
                <SocialAnchor
                  data-component-id="SocialAnchorYoutube"
                  href={FOOTER_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("footerYoutubeAria")}
                >
                  <FaYoutube aria-hidden />
                </SocialAnchor>
              </SocialItem>
              <SocialItem data-component-id="SocialItemInstagram">
                <SocialAnchor
                  data-component-id="SocialAnchorInstagram"
                  href={FOOTER_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("footerInstagramAria")}
                >
                  <AiFillInstagram aria-hidden />
                </SocialAnchor>
              </SocialItem>
              <SocialItem data-component-id="SocialItemGithub">
                <SocialAnchor
                  data-component-id="SocialAnchorGithub"
                  href={FOOTER_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("footerGithubAria")}
                >
                  <AiFillGithub aria-hidden />
                </SocialAnchor>
              </SocialItem>
            </SocialList>
          </Col>
        </ThreeCol>
        <BottomRow data-component-id="FooterBottomRow">
          <Meta data-component-id="FooterBuilt">{t("footerBuilt")}</Meta>
        </BottomRow>
      </Inner>
    </FooterBar>
  );
}
