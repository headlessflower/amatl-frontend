export function buildCanonical(siteUrl: string, path: string) {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
