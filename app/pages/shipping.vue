<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

type ShippingSection = {
    title: string;
    paragraphs: string[];
};

const shippingSections: ShippingSection[] = [
    {
        title: t("shipping.sections.handmadePaper.title"),
        paragraphs: [
            t("shipping.sections.handmadePaper.p1"),
            t("shipping.sections.handmadePaper.p2"),
        ],
    },
    {
        title: t("shipping.sections.international.title"),
        paragraphs: [
            t("shipping.sections.international.p1"),
            t("shipping.sections.international.p2"),
        ],
    },
];
</script>

<template>
    <main class="shipping">
        <div class="shipping__wrap">
            <div class="shipping__grid">
                <!-- Left column title -->
                <header class="shipping__header">
                    <h1 class="shipping__title">{{ t("shipping.title") }}</h1>
                </header>

                <!-- Right column content -->
                <article
                    class="shipping__content"
                    aria-label="Shipping information"
                >
                    <p class="shipping__eyebrow">{{ t("shipping.eyebrow") }}</p>

                    <section
                        v-for="section in shippingSections"
                        :key="section.title"
                        class="shipping__section"
                    >
                        <h2 class="shipping__section-title">
                            {{ section.title }}
                        </h2>

                        <p
                            v-for="(p, idx) in section.paragraphs"
                            :key="idx"
                            class="shipping__paragraph"
                        >
                            {{ p }}
                        </p>
                    </section>

                    <!-- Optional note + email link (kept OUT of i18n string to avoid @ parsing issues) -->
                    <div class="shipping__contact">
                        <p
                            class="shipping__paragraph shipping__paragraph--tight"
                        >
                            {{ t("shipping.contact.line") }}
                            <a
                                class="shipping__email"
                                href="mailto:solarsustain@gmail.com"
                                >amatlstudio@gmail.com</a
                            >.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    </main>
</template>

<style scoped>
.shipping {
    --ink: rgba(0, 0, 0, 0.92);
    --muted: rgba(0, 0, 0, 0.62);
    --hairline: rgba(0, 0, 0, 0.14);
    --max: 1180px;
    --gutter: 28px;

    background: #fff;
    color: var(--ink);
    padding: 42px 0 110px;
}

.shipping__wrap {
    max-width: var(--max);
    margin: 0 auto;
    padding: 0 var(--gutter);
}

.shipping__grid {
    display: grid;
    grid-template-columns: 1fr 1.35fr;
    gap: 80px;
    align-items: start;
}

/* Sticky title like the screenshot */
.shipping__header {
    position: sticky;
    top: 96px;
    align-self: start;
}

.shipping__title {
    margin: 0;
    font-size: 34px;
    font-weight: 500;
    letter-spacing: -0.01em;
}

.shipping__content {
    max-width: 740px;
}

.shipping__eyebrow {
    margin: 0 0 16px;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
}

.shipping__section {
    margin-top: 26px;
}

.shipping__section:first-of-type {
    margin-top: 0;
}

.shipping__section-title {
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.01em;
}

.shipping__paragraph {
    margin: 0 0 14px;
    font-size: 13.5px;
    line-height: 1.9;
    color: rgba(0, 0, 0, 0.68);
}

.shipping__paragraph:last-child {
    margin-bottom: 0;
}

.shipping__contact {
    margin-top: 30px;
    padding-top: 18px;
    border-top: 1px solid var(--hairline);
}

.shipping__paragraph--tight {
    margin-bottom: 0;
}

.shipping__email {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 3px;
}

@media (max-width: 1000px) {
    .shipping__grid {
        grid-template-columns: 1fr 1.2fr;
        gap: 54px;
    }
}

@media (max-width: 860px) {
    .shipping {
        padding: 30px 0 90px;
    }

    .shipping__grid {
        grid-template-columns: 1fr;
        gap: 22px;
    }

    .shipping__header {
        position: relative;
        top: auto;
    }

    .shipping__title {
        font-size: 28px;
    }

    .shipping__content {
        max-width: none;
    }
}
</style>
