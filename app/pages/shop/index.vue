<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

type ShopAudienceCard = {
    id: "events" | "branding" | "artists" | "classes";
    title: string;
    description: string;
    linkLabel: string;
    to: string;
    image: { src: string; alt: string };
    imageRight?: { src: string; alt: string }; // optional second image like your sample layouts
};

const { t } = useI18n();

const audienceCards = computed<ShopAudienceCard[]>(() => [
    {
        id: "events",
        title: t("shopHub.sections.events.title"),
        description: t("shopHub.sections.events.description"),
        linkLabel: t("shopHub.sections.events.linkLabel"),
        to: "/shop/events",
        image: {
            src: "/images/shop-hub/events-left.jpg",
            alt: t("shopHub.sections.events.imageAlt"),
        },
        imageRight: {
            src: "/images/shop-hub/events-right.jpg",
            alt: t("shopHub.sections.events.imageAltRight"),
        },
    },
    {
        id: "branding",
        title: t("shopHub.sections.branding.title"),
        description: t("shopHub.sections.branding.description"),
        linkLabel: t("shopHub.sections.branding.linkLabel"),
        to: "/shop/branding",
        image: {
            src: "/images/shop-hub/branding-left.jpg",
            alt: t("shopHub.sections.branding.imageAlt"),
        },
        imageRight: {
            src: "/images/shop-hub/branding-right.jpg",
            alt: t("shopHub.sections.branding.imageAltRight"),
        },
    },
    {
        id: "artists",
        title: t("shopHub.sections.artists.title"),
        description: t("shopHub.sections.artists.description"),
        linkLabel: t("shopHub.sections.artists.linkLabel"),
        to: "/shop/artists",
        image: {
            src: "/images/shop-hub/artists-left.jpg",
            alt: t("shopHub.sections.artists.imageAlt"),
        },
        imageRight: {
            src: "/images/shop-hub/artists-right.jpg",
            alt: t("shopHub.sections.artists.imageAltRight"),
        },
    },
    {
        id: "classes",
        title: t("shopHub.sections.classes.title"),
        description: t("shopHub.sections.classes.description"),
        linkLabel: t("shopHub.sections.classes.linkLabel"),
        to: "/shop/classes",
        image: {
            src: "/images/shop-hub/classes-left.jpg",
            alt: t("shopHub.sections.classes.imageAlt"),
        },
        imageRight: {
            src: "/images/shop-hub/classes-right.jpg",
            alt: t("shopHub.sections.classes.imageAltRight"),
        },
    },
]);

function getSectionClassName(index: number) {
    // Alternates layout to keep the editorial staggered feel
    return index % 2 === 0
        ? "shop-hub__section--left"
        : "shop-hub__section--right";
}
</script>

<template>
    <main class="shop-hub">
        <!-- HERO -->
        <section class="shop-hub__hero" aria-label="Shop overview">
            <div class="shop-hub__container">
                <div class="shop-hub__hero-grid">
                    <div class="shop-hub__hero-copy"></div>

                    <div class="shop-hub__hero-aside">
                        <p class="shop-hub__aside-text">
                            {{ t("shopHub.hero.aside") }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTIONS -->
        <section class="shop-hub__sections" aria-label="Shop audiences">
            <div class="shop-hub__container">
                <div class="shop-hub__list">
                    <article
                        v-for="(card, index) in audienceCards"
                        :key="card.id"
                        class="shop-hub__section"
                        :class="getSectionClassName(index)"
                    >
                        <div class="shop-hub__section-grid">
                            <!-- media: large image -->
                            <figure
                                class="shop-hub__media shop-hub__media--primary"
                            >
                                <img
                                    class="shop-hub__img"
                                    :src="card.image.src"
                                    :alt="card.image.alt"
                                    loading="lazy"
                                />
                            </figure>

                            <!-- right rail: small image + copy -->
                            <div class="shop-hub__rail">
                                <figure
                                    v-if="card.imageRight"
                                    class="shop-hub__media shop-hub__media--secondary"
                                >
                                    <img
                                        class="shop-hub__img"
                                        :src="card.imageRight.src"
                                        :alt="card.imageRight.alt"
                                        loading="lazy"
                                    />
                                </figure>

                                <div class="shop-hub__copy">
                                    <h2 class="shop-hub__section-title">
                                        {{ card.title }}
                                    </h2>
                                    <p class="shop-hub__section-description">
                                        {{ card.description }}
                                    </p>

                                    <NuxtLink
                                        class="shop-hub__link"
                                        :to="card.to"
                                    >
                                        <span class="shop-hub__link-text">{{
                                            card.linkLabel
                                        }}</span>
                                        <span
                                            class="shop-hub__link-arrow"
                                            aria-hidden="true"
                                            >→</span
                                        >
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <!-- small footer note like your samples -->
                <div class="shop-hub__note">
                    <hr class="shop-hub__rule" />
                    <p class="shop-hub__note-text">
                        {{ t("shopHub.note") }}
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
/* =========================
   BASE
   ========================= */
.shop-hub {
    --ink: rgba(0, 0, 0, 0.92);
    --muted: rgba(0, 0, 0, 0.62);
    --hairline: rgba(0, 0, 0, 0.14);
    --max: 1180px;
    --gutter: 28px;

    background: #fff;
    color: var(--ink);
}

.shop-hub__container {
    max-width: var(--max);
    margin: 0 auto;
    padding: 0 var(--gutter);
}

/* =========================
   HERO
   ========================= */
.shop-hub__hero {
    padding: 34px 0 22px;
}

.shop-hub__hero-grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 64px;
    align-items: start;
}

.shop-hub__kicker {
    margin: 0 0 10px;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
}

.shop-hub__title {
    margin: 0;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: -0.01em;
}

.shop-hub__subtitle {
    margin: 14px 0 0;
    max-width: 720px;
    font-size: 14px;
    line-height: 1.9;
    color: var(--muted);
}

.shop-hub__hero-aside {
    padding-top: 42px;
}

.shop-hub__aside-text {
    margin: 0;
    font-size: 14px;
    line-height: 1.9;
    color: var(--muted);
}

/* =========================
   LIST / SECTIONS
   ========================= */
.shop-hub__sections {
    padding: 26px 0 110px;
}

.shop-hub__list {
    display: grid;
    gap: 96px;
}

/* section layout */
.shop-hub__section-grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 64px;
    align-items: start;
}

/* alternating: swap visual emphasis subtly */
.shop-hub__section--right .shop-hub__section-grid {
    grid-template-columns: 1fr 1.6fr;
}

.shop-hub__section--right .shop-hub__media--primary {
    order: 2;
}

.shop-hub__section--right .shop-hub__rail {
    order: 1;
}

/* media */
.shop-hub__media {
    margin: 0;
    background: #f3f3f3;
    overflow: hidden;
    border-radius: 2px;
}

.shop-hub__media--primary {
    aspect-ratio: 3 / 4;
}

.shop-hub__media--secondary {
    aspect-ratio: 1 / 1;
    width: 78%;
    justify-self: end;
}

.shop-hub__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.01);
}

/* right rail */
.shop-hub__rail {
    display: grid;
    gap: 22px;
}

.shop-hub__copy {
    width: 78%;
    justify-self: end;
}

.shop-hub__section-title {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.01em;
}

.shop-hub__section-description {
    margin: 12px 0 0;
    font-size: 14px;
    line-height: 1.9;
    color: var(--muted);
}

.shop-hub__link {
    margin-top: 16px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--ink);
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    border-bottom: 1px solid var(--hairline);
    padding-bottom: 6px;
    width: fit-content;
    transition:
        border-color 160ms ease,
        transform 160ms ease,
        opacity 160ms ease;
}

.shop-hub__link:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 0, 0, 0.28);
}

.shop-hub__link-text {
    white-space: nowrap;
}

.shop-hub__link-arrow {
    font-size: 14px;
    line-height: 1;
}

/* note */
.shop-hub__note {
    margin-top: 70px;
    max-width: 820px;
}

.shop-hub__rule {
    border: 0;
    height: 1px;
    background: var(--hairline);
    width: min(520px, 86%);
    margin: 0 0 18px;
}

.shop-hub__note-text {
    margin: 0;
    font-size: 14px;
    line-height: 1.9;
    color: var(--muted);
}

/* =========================
   RESPONSIVE
   ========================= */
@media (max-width: 1100px) {
    .shop-hub__hero-grid,
    .shop-hub__section-grid {
        gap: 44px;
    }
    .shop-hub__list {
        gap: 76px;
    }
}

@media (max-width: 900px) {
    .shop-hub__hero-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .shop-hub__hero-aside {
        padding-top: 0;
    }

    .shop-hub__section-grid,
    .shop-hub__section--right .shop-hub__section-grid {
        grid-template-columns: 1fr;
        gap: 18px;
    }

    .shop-hub__section--right .shop-hub__media--primary,
    .shop-hub__section--right .shop-hub__rail {
        order: initial;
    }

    .shop-hub__media--secondary,
    .shop-hub__copy {
        width: 100%;
        justify-self: start;
    }

    .shop-hub__list {
        gap: 54px;
    }
}

@media (max-width: 560px) {
    .shop-hub__title {
        font-size: 26px;
    }
}
</style>
