import styledWithConfig from "../../utils/styledWithConfig";
import { NameFillLoader } from "./NameFillLoader";

const Overlay = styledWithConfig("div")<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--page-bg);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition: opacity 0.45s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Panel = styledWithConfig("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

type SiteBootLoaderProps = {
  progress: number;
  visible: boolean;
};

export function SiteBootLoader({ progress, visible }: SiteBootLoaderProps) {
  return (
    <Overlay
      data-component-id="SiteBootLoader"
      role="status"
      aria-live="polite"
      aria-label="Loading"
      $visible={visible}
    >
      <Panel>
        <NameFillLoader progress={progress} showPercent={false} />
      </Panel>
    </Overlay>
  );
}
