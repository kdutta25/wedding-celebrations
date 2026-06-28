import { useEffect } from "react";
import styledWithConfig, { keyframes } from "../utils/styledWithConfig";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, 12px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

const SnackbarRoot = styledWithConfig("div")`
  position: fixed;
  left: 50%;
  bottom: 72px;
  z-index: 110;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  max-width: min(calc(100% - 32px), 420px);
  padding: 12px 18px;
  border-radius: 999px;
  background: var(--card);
  border: 1px solid var(--card-border);
  color: var(--ink);
  font-size: 14px;
  font-weight: 700;
  box-shadow: 0 16px 40px -16px var(--card-shadow);
  animation: ${slideUp} 0.28s cubic-bezier(0.16, 1, 0.3, 1) both;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

type SnackbarProps = {
  message: string;
  onDismiss: () => void;
  durationMs?: number;
};

export function Snackbar({
  message,
  onDismiss,
  durationMs = 2800,
}: SnackbarProps) {
  useEffect(() => {
    const timer = window.setTimeout(onDismiss, durationMs);
    return () => window.clearTimeout(timer);
  }, [durationMs, message, onDismiss]);

  return (
    <SnackbarRoot
      data-component-id="Snackbar"
      role="status"
      aria-live="polite"
    >
      {message}
    </SnackbarRoot>
  );
}
