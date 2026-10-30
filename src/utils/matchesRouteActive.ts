import type { RoutesLinkActive } from "../types/RoutesLink";

export const matchesRouteActive = (
  currentPath: string,
  routePath: string,
  active?: RoutesLinkActive,
  includeDescendants = false,
): boolean => {
  if (!active) {
    return includeDescendants
      ? currentPath === routePath || currentPath.startsWith(`${routePath}/`)
      : currentPath === routePath;
  }

  if ("starts_with" in active) {
    return currentPath.startsWith(active.starts_with);
  }

  if ("ends_with" in active) {
    return currentPath.endsWith(active.ends_with);
  }

  if ("exact" in active) {
    return currentPath === active.exact;
  }

  if ("regex" in active) {
    try {
      return new RegExp(active.regex).test(currentPath);
    } catch {
      return false;
    }
  }

  return false;
};
