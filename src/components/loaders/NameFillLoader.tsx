import styledWithConfig from "../../utils/styledWithConfig";

const Wrap = styledWithConfig("div")`
  position: relative;
  display: inline-block;
  text-align: center;
  padding: 0 12px;
`;

const NameText = styledWithConfig("p")`
  margin: 0;
  font-family: "Great Vibes", cursive;
  font-size: clamp(2.6rem, 9vw, 4.8rem);
  line-height: 1.1;
  white-space: nowrap;
`;

const NameOutline = styledWithConfig(NameText)`
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(13, 115, 119, 0.28);
`;

const NameFill = styledWithConfig(NameText)<{ $percent: number }>`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    var(--script) 0%,
    var(--accent-dark) 55%,
    var(--accent) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  clip-path: inset(0 ${({ $percent }) => 100 - $percent}% 0 0);
  transition: clip-path 0.35s ease;
`;

const Percent = styledWithConfig("p")`
  margin: 14px 0 0;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: var(--muted);
`;

type NameFillLoaderProps = {
  progress: number;
  showPercent?: boolean;
};

export function NameFillLoader({
  progress,
  showPercent = true,
}: NameFillLoaderProps) {
  const percent = Math.max(0, Math.min(100, Math.round(progress)));

  return (
    <div data-component-id="NameFillLoader">
      <Wrap aria-hidden="true">
        <NameOutline>Vibha &amp; Kaus</NameOutline>
        <NameFill $percent={percent}>Vibha &amp; Kaus</NameFill>
      </Wrap>
      {showPercent ? (
        <Percent data-component-id="NameFillLoaderPercent">{percent}%</Percent>
      ) : null}
    </div>
  );
}
