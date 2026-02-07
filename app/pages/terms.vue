<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

type TermsSection = {
    title: string;
    paragraphs: string[];
};

const termsSections: TermsSection[] = [
    {
        title: t("terms.sections.products.title"),
        paragraphs: [
            t("terms.sections.products.p1"),
            t("terms.sections.products.p2"),
            t("terms.sections.products.p3"),
        ],
    },
    {
        title: t("terms.sections.variations.title"),
        paragraphs: [
            t("terms.sections.variations.p1"),
            t("terms.sections.variations.p2"),
        ],
    },
    {
        title: t("terms.sections.pricing.title"),
        paragraphs: [
            t("terms.sections.pricing.p1"),
            t("terms.sections.pricing.p2"),
        ],
    },
    {
        title: t("terms.sections.security.title"),
        paragraphs: [t("terms.sections.security.p1")],
    },
    {
        title: t("terms.sections.copyrights.title"),
        paragraphs: [
            t("terms.sections.copyrights.p1"),
            t("terms.sections.copyrights.p2"),
            t("terms.sections.copyrights.p3"),
        ],
    },
];
</script>

<template>
    <main class="terms">
        <div class="terms__wrap">
            <div class="terms__grid">
                <header class="terms__header">
                    <h1 class="terms__title">{{ t("terms.title") }}</h1>
                </header>

                <article
                    class="terms__content"
                    aria-label="Terms and Conditions"
                >
                    <section
                        v-for="section in termsSections"
                        :key="section.title"
                        class="terms__section"
                    >
                        <h2 class="terms__section-title">
                            {{ section.title }}
                        </h2>

                        <p
                            v-for="(p, idx) in section.paragraphs"
                            :key="idx"
                            class="terms__paragraph"
                        >
                            {{ p }}
                        </p>
                        <p class="terms__paragraph">
                            {{ t("terms.sections.copyrights.p3") }}
                            <a
                                class="terms__email"
                                href="mailto:contact@amatl.example"
                                >amatlstudio@gmail.com</a
                            >
                        </p>
                    </section>
                </article>
            </div>
        </div>
    </main>
</template>

<style scoped>
.terms {
    --ink: rgba(0, 0, 0, 0.92);
    --muted: rgba(0, 0, 0, 0.62);
    --max: 1180px;
    --gutter: 28px;

    background: #fff;
    color: var(--ink);
    padding: 42px 0 110px;
}

.terms__wrap {
    max-width: var(--max);
    margin: 0 auto;
    padding: 0 var(--gutter);
}

.terms__grid {
    display: grid;
    grid-template-columns: 1fr 1.35fr;
    gap: 80px;
    align-items: start;
}

.terms__header {
    position: sticky;
    top: 96px;
    align-self: start;
}

.terms__title {
    margin: 0;
    font-size: 34px;
    font-weight: 500;
    letter-spacing: -0.01em;
}

.terms__content {
    max-width: 740px;
}

.terms__section {
    margin-top: 26px;
}

.terms__section:first-child {
    margin-top: 0;
}

.terms__section-title {
    margin: 0 0 10px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.01em;
}

.terms__paragraph {
    margin: 0 0 14px;
    font-size: 13.5px;
    line-height: 1.9;
    color: rgba(0, 0, 0, 0.68);
}

.terms__paragraph:last-child {
    margin-bottom: 0;
}

.terms__email {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 3px;
}

@media (max-width: 1000px) {
    .terms__grid {
        grid-template-columns: 1fr 1.2fr;
        gap: 54px;
    }
}

@media (max-width: 860px) {
    .terms {
        padding: 30px 0 90px;
    }

    .terms__grid {
        grid-template-columns: 1fr;
        gap: 22px;
    }

    .terms__header {
        position: relative;
        top: auto;
    }

    .terms__title {
        font-size: 28px;
    }

    .terms__content {
        max-width: none;
    }
}
</style>
