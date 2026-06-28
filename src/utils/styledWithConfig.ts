import isPropValid from "@emotion/is-prop-valid";
import { styled, type WebTarget } from "styled-components";

function shouldForwardProp(propName: string, target: WebTarget) {
  if (typeof target === "string") {
    return isPropValid(propName);
  }
  return true;
}

/** Wraps styled() with .withConfig to filter only valid props to the DOM. */
const styledWithConfig = <T extends WebTarget>(component: T) =>
  styled(component).withConfig({
    shouldForwardProp: (prop) => shouldForwardProp(prop, component),
  });

export default styledWithConfig;
export { css, keyframes, createGlobalStyle } from "styled-components";
