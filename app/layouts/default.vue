<script setup lang="ts">
import {
    asJsonLdScript,
    buildOrganizationJsonLd,
    buildWebSiteJsonLd,
} from "~/utils/seo/jsonld";

const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl as string;
const siteName = config.public.siteName as string;

useHead({
    script: [
        asJsonLdScript(
            buildOrganizationJsonLd({
                siteUrl,
                name: siteName,
                // logoUrl: `${siteUrl}/logo.png`,
                email: "solarsustain@gmail.com", // swap if needed for Amatl
                phone: "(323) 709-5357",
                locations: [
                    {
                        name: "East Los Angeles Studio",
                        addressLocality: "Los Angeles",
                        addressRegion: "CA",
                        addressCountry: "US",
                    },
                    {
                        name: "San Miguel de Allende Studio",
                        addressLocality: "San Miguel de Allende",
                        addressCountry: "MX",
                    },
                ],
            }),
        ),
        asJsonLdScript(
            buildWebSiteJsonLd({
                siteUrl,
                siteName,
                searchUrl: `${siteUrl}/search?q={search_term_string}`,
            }),
        ),
    ],
});
</script>

<template>
    <div class="shell">
        <AppNav />
        <main class="main">
            <slot />
        </main>
        <AppContact />
        <AppFooter />
    </div>
</template>

<style scoped>
.shell {
    --bg: #0b0b0c;
    --border: rgba(255, 255, 255, 0.12);
    --text: #f4f4f5;
    --muted: rgba(244, 244, 245, 0.65);

    min-height: 100vh;
    color: var(--text);
    background:
        radial-gradient(
            68.75rem 32.5rem at 28% 0%,
            rgba(245, 158, 11, 0.12),
            transparent 55%
        ),
        radial-gradient(
            56.25rem 31.25rem at 85% 20%,
            rgba(255, 255, 255, 0.06),
            transparent 55%
        ),
        var(--bg);
}

/* reusable inner wrapper (use inside footer or sections that need it) */
.wrap {
    max-width: 70rem; /* ~1120px */
    margin-inline: auto;
    padding-inline: clamp(1rem, 3vw, 1.5rem);
}

.main {
    width: 100%;
    padding: 0; /* let sections control their own spacing */
}

.footer {
    border-top: 1px solid var(--border);
    padding-block: clamp(0.875rem, 2vw, 1.125rem);
    color: var(--muted);
    font-size: 0.8125rem; /* 13px equivalent, but in rem */
    line-height: 1.5;
}

.footer__inner {
    display: flex;
    justify-content: space-between;
    gap: 0.875rem; /* 14px equiv */
    flex-wrap: wrap;
}

@media (max-width: 45rem) {
    /* 720px */
    .footer__inner {
        justify-content: flex-start;
    }
}
</style>
