export type JsonLd = Record<string, any>;

export function asJsonLdScript(obj: JsonLd) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(obj),
  };
}

export function buildOrganizationJsonLd(opts: {
  siteUrl: string;
  name: string;
  logoUrl?: string;
  sameAs?: string[];
  email?: string;
  phone?: string;
  locations?: Array<{
    name: string;
    addressLocality: string;
    addressRegion?: string;
    addressCountry: string;
  }>;
}) {
  const { siteUrl, name, logoUrl, sameAs, email, phone, locations } = opts;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url: siteUrl,
    ...(logoUrl ? { logo: logoUrl } : {}),
    ...(sameAs?.length ? { sameAs } : {}),
    ...(email ? { email } : {}),
    ...(phone ? { telephone: phone } : {}),
    ...(locations?.length
      ? {
          location: locations.map((l) => ({
            "@type": "Place",
            name: l.name,
            address: {
              "@type": "PostalAddress",
              addressLocality: l.addressLocality,
              ...(l.addressRegion ? { addressRegion: l.addressRegion } : {}),
              addressCountry: l.addressCountry,
            },
          })),
        }
      : {}),
  };
}

export function buildWebSiteJsonLd(opts: {
  siteUrl: string;
  siteName: string;
  searchUrl: string; // e.g. `${siteUrl}/search?q={search_term_string}`
}) {
  const { siteUrl, siteName, searchUrl } = opts;

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: searchUrl,
      "query-input": "required name=search_term_string",
    },
  };
}
