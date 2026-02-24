export type Crumb = {
  name: string;
  item: string;
};

type LabelMap = Record<string, string>;

export function buildRouteBreadcrumbs(
  routePath: string,
  siteUrl: string,
  labelMap: LabelMap = {},
): Crumb[] {
  const segments = routePath.split("/").filter(Boolean);

  const crumbs: Crumb[] = [{ name: "Home", item: `${siteUrl}/` }];

  let cumulativePath = "";

  segments.forEach((segment) => {
    cumulativePath += `/${segment}`;

    crumbs.push({
      name:
        labelMap[segment] ||
        segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      item: `${siteUrl}${cumulativePath}`,
    });
  });

  return crumbs;
}
