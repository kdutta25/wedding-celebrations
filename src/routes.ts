import type { ViewId } from "./i18n/translations";

export const ROUTES = {
  home: "/",
  haldi: "/haldi",
  wedding: "/wedding",
  weddingProceedings: "/wedding-proceedings",
} as const;

export function viewFromPathname(pathname: string): ViewId {
  switch (pathname) {
    case ROUTES.haldi:
      return "haldi";
    case ROUTES.wedding:
      return "wedding";
    case ROUTES.weddingProceedings:
      return "ceremony";
    default:
      return "landing";
  }
}

export function pathFromView(view: ViewId): string {
  switch (view) {
    case "haldi":
      return ROUTES.haldi;
    case "wedding":
      return ROUTES.wedding;
    case "ceremony":
      return ROUTES.weddingProceedings;
    default:
      return ROUTES.home;
  }
}
