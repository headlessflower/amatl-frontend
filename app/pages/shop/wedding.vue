<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

type WeddingUseCase = {
    title: string;
    description: string;
};

const { t } = useI18n();

const useCases = computed<WeddingUseCase[]>(() => [
    {
        title: t("weddings.useCases.invitations.title"),
        description: t("weddings.useCases.invitations.description"),
    },
    {
        title: t("weddings.useCases.placeSettings.title"),
        description: t("weddings.useCases.placeSettings.description"),
    },
    {
        title: t("weddings.useCases.cateringMarketing.title"),
        description: t("weddings.useCases.cateringMarketing.description"),
    },
    {
        title: t("weddings.useCases.signage.title"),
        description: t("weddings.useCases.signage.description"),
    },
    {
        title: t("weddings.useCases.gifts.title"),
        description: t("weddings.useCases.gifts.description"),
    },
]);

const gallery = computed(() => ({
    heroLeft: {
        src: "/images/weddings/hero-left.jpg",
        alt: t("weddings.images.heroLeftAlt"),
    },
    heroRight: {
        src: "/images/weddings/hero-right.jpg",
        alt: t("weddings.images.heroRightAlt"),
    },
    fullBleed: {
        src: "/images/weddings/full-bleed.jpg",
        alt: t("weddings.images.fullBleedAlt"),
    },
    detailLeft: {
        src: "/images/weddings/detail-left.jpg",
        alt: t("weddings.images.detailLeftAlt"),
    },
    detailRight: {
        src: "/images/weddings/detail-right.jpg",
        alt: t("weddings.images.detailRightAlt"),
    },
}));
</script>

<template>
    <main class="weddings">
        <!-- HERO (editorial like your sample #1) -->
        <section class="weddings-hero" aria-label="Wedding paper">
            <div class="weddings-hero__wrap">
                <div class="weddings-hero__grid">
                    <figure
                        class="weddings-hero__media weddings-hero__media--left"
                    >
                        <img
                            class="weddings-hero__img"
                            :src="gallery.heroLeft.src"
                            :alt="gallery.heroLeft.alt"
                            loading="lazy"
                        />
                    </figure>

                    <div class="weddings-hero__right">
                        <figure
                            class="weddings-hero__media weddings-hero__media--right"
                        >
                            <img
                                class="weddings-hero__img"
                                :src="gallery.heroRight.src"
                                :alt="gallery.heroRight.alt"
                                loading="lazy"
                            />
                        </figure>

                        <div class="weddings-hero__copy">
                            <div class="weddings-hero__actions">
                                <NuxtLink
                                    class="weddings-hero__cta weddings-hero__cta--primary"
                                    to="/contact"
                                >
                                    {{ t("weddings.hero.primaryCta") }}
                                </NuxtLink>
                                <NuxtLink
                                    class="weddings-hero__cta weddings-hero__cta--ghost"
                                    to="/shop/events"
                                >
                                    {{ t("weddings.hero.secondaryCta") }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="weddings-hero__note">
                    <p class="weddings-hero__note-text">
                        {{ t("weddings.hero.note") }}
                    </p>
                </div>
            </div>
        </section>

        <!-- FULL BLEED FEATURE (like sample #2) -->
        <section class="weddings-feature" aria-label="Featured wedding set">
            <div class="weddings-feature__media">
                <img
                    class="weddings-feature__img"
                    :src="gallery.fullBleed.src"
                    :alt="gallery.fullBleed.alt"
                    loading="lazy"
                />
                <div class="weddings-feature__overlay" aria-hidden="true"></div>

                <div class="weddings-feature__content">
                    <p class="weddings-feature__eyebrow">
                        {{ t("weddings.feature.eyebrow") }}
                    </p>
                    <p class="weddings-feature__headline">
                        {{ t("weddings.feature.headline") }}
                    </p>
                    <NuxtLink class="weddings-feature__cta" to="/contact">
                        {{ t("weddings.feature.cta") }}
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- DETAILS (like sample #3) -->
        <section class="weddings-details" aria-label="Wedding paper details">
            <div class="weddings-details__wrap">
                <div class="weddings-details__text">
                    <p class="weddings-details__paragraph">
                        {{ t("weddings.details.paragraph") }}
                    </p>
                </div>

                <hr class="weddings-details__rule" />

                <div class="weddings-details__grid">
                    <figure
                        class="weddings-details__figure weddings-details__figure--left"
                    >
                        <img
                            class="weddings-details__img"
                            :src="gallery.detailLeft.src"
                            :alt="gallery.detailLeft.alt"
                            loading="lazy"
                        />
                    </figure>

                    <figure
                        class="weddings-details__figure weddings-details__figure--right"
                    >
                        <img
                            class="weddings-details__img"
                            :src="gallery.detailRight.src"
                            :alt="gallery.detailRight.alt"
                            loading="lazy"
                        />
                    </figure>
                </div>

                <div class="weddings-usecases" aria-label="What we can make">
                    <h2 class="weddings-usecases__title">
                        {{ t("weddings.useCasesTitle") }}
                    </h2>

                    <div class="weddings-usecases__list">
                        <article
                            v-for="item in useCases"
                            :key="item.title"
                            class="weddings-usecases__item"
                        >
                            <h3 class="weddings-usecases__item-title">
                                {{ item.title }}
                            </h3>
                            <p class="weddings-usecases__item-description">
                                {{ item.description }}
                            </p>
                        </article>
                    </div>

                    <div class="weddings-usecases__actions">
                        <NuxtLink class="weddings-usecases__link" to="/contact">
                            <span class="weddings-usecases__link-text">{{
                                t("weddings.useCasesCta")
                            }}</span>
                            <span
                                class="weddings-usecases__link-arrow"
                                aria-hidden="true"
                                >→</span
                            >
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
/* =========================
   BASE
   ========================= */
.weddings {
    --ink: rgba(0, 0, 0, 0.92);
    --muted: rgba(0, 0, 0, 0.62);
    --hairline: rgba(0, 0, 0, 0.14);
    --max: 1180px;
    --gutter: 28px;

    background: #fff;
    color: var(--ink);
}

.weddings-hero__wrap,
.weddings-details__wrap {
    max-width: var(--max);
    margin: 0 auto;
    padding: 0 var(--gutter);
}

/* =========================
   HERO
   ========================= */
.weddings-hero {
    padding: 22px 0 34px;
}

.weddings-hero__grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 64px;
    align-items: start;
}

.weddings-hero__media {
    margin: 0;
    background: #f3f3f3;
    overflow: hidden;
    border-radius: 2px;
}

.weddings-hero__media--left {
    aspect-ratio: 3 / 4;
}

.weddings-hero__right {
    display: grid;
    gap: 22px;
}

.weddings-hero__media--right {
    width: 78%;
    justify-self: end;
    aspect-ratio: 1 / 1;
}

.weddings-hero__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.01);
}

.weddings-hero__copy {
    width: 78%;
    justify-self: end;
}

.weddings-hero__kicker {
    margin: 0 0 10px;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
}

.weddings-hero__title {
    margin: 0;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: -0.01em;
}

.weddings-hero__subtitle {
    margin: 14px 0 0;
    font-size: 14px;
    line-height: 1.9;
    color: var(--muted);
}

.weddings-hero__actions {
    margin-top: 18px;
    display: flex;
    gap: 12px;
    align-items: center;
}

.weddings-hero__cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 16px;
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 2px;
    transition:
        transform 160ms ease,
        opacity 160ms ease,
        border-color 160ms ease;
}

.weddings-hero__cta:hover {
    transform: translateY(-1px);
}

.weddings-hero__cta--primary {
    background: #111;
    color: #fff;
    border: 1px solid #111;
}

.weddings-hero__cta--ghost {
    background: transparent;
    color: var(--ink);
    border: 1px solid var(--hairline);
}

.weddings-hero__note {
    margin-top: 42px;
    max-width: 620px;
    padding: 0 var(--gutter);
}

.weddings-hero__note-text {
    margin: 0;
    font-size: 14px;
    line-height: 1.9;
    color: var(--muted);
}

/* =========================
   FULL BLEED FEATURE
   ========================= */
.weddings-feature__media {
    position: relative;
    height: 100vh;
    min-height: 640px;
    overflow: hidden;
    background: #f3f3f3;
}

.weddings-feature__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1.01);
}

.weddings-feature__overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(
        70% 60% at 50% 45%,
        rgba(0, 0, 0, 0.14),
        rgba(0, 0, 0, 0.02) 55%,
        rgba(0, 0, 0, 0) 70%
    );
    pointer-events: none;
}

.weddings-feature__content {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    text-align: center;
    padding: 24px;
    color: #fff;
}

.weddings-feature__eyebrow {
    margin: 0 0 10px;
    font-size: 12px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    opacity: 0.92;
}

.weddings-feature__headline {
    margin: 0;
    max-width: 760px;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 2.1;
    opacity: 0.92;
}

.weddings-feature__cta {
    margin-top: 22px;
    display: inline-flex;
    justify-self: center;
    height: 40px;
    padding: 0 18px;
    border: 1px solid rgba(255, 255, 255, 0.65);
    color: #fff;
    text-decoration: none;
    border-radius: 2px;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    transition:
        border-color 160ms ease,
        transform 160ms ease;
}

.weddings-feature__cta:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.9);
}

/* =========================
   DETAILS + USE CASES
   ========================= */
.weddings-details {
    padding: 90px 0 120px;
}

.weddings-details__text {
    max-width: 840px;
    margin: 0 auto;
    text-align: center;
    padding: 0 var(--gutter);
}

.weddings-details__paragraph {
    margin: 0;
    font-size: 16px;
    line-height: 2.05;
    color: var(--muted);
}

.weddings-details__rule {
    border: 0;
    height: 1px;
    background: var(--hairline);
    width: min(640px, 86%);
    margin: 46px auto 0;
}

.weddings-details__grid {
    margin-top: 64px;
    padding: 0 var(--gutter);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
    align-items: start;
    justify-content: center;
}

.weddings-details__figure {
    margin: 0;
    justify-self: center;
    background: #f3f3f3;
    overflow: hidden;
    border-radius: 2px;
}

.weddings-details__figure--left {
    width: 78%;
    aspect-ratio: 3 / 4;
}

.weddings-details__figure--right {
    width: 66%;
    aspect-ratio: 1 / 1;
}

.weddings-details__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1.01);
}

/* use cases */
.weddings-usecases {
    margin-top: 74px;
    padding: 0 var(--gutter);
}

.weddings-usecases__title {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.01em;
}

.weddings-usecases__list {
    margin-top: 22px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px 54px;
}

.weddings-usecases__item {
    border-top: 1px solid var(--hairline);
    padding-top: 14px;
}

.weddings-usecases__item-title {
    margin: 0;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 500;
}

.weddings-usecases__item-description {
    margin: 10px 0 0;
    font-size: 14px;
    line-height: 1.9;
    color: var(--muted);
}

.weddings-usecases__actions {
    margin-top: 26px;
}

.weddings-usecases__link {
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
        transform 160ms ease,
        border-color 160ms ease;
}

.weddings-usecases__link:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 0, 0, 0.28);
}

/* =========================
   RESPONSIVE
   ========================= */
@media (max-width: 1100px) {
    .weddings-hero__grid {
        gap: 44px;
    }
    .weddings-details__grid {
        gap: 54px;
    }
}

@media (max-width: 900px) {
    .weddings-hero__grid {
        grid-template-columns: 1fr;
        gap: 18px;
    }

    .weddings-hero__media--right,
    .weddings-hero__copy {
        width: 100%;
        justify-self: start;
    }

    .weddings-details__grid {
        grid-template-columns: 1fr;
        gap: 26px;
    }

    .weddings-details__figure--left,
    .weddings-details__figure--right {
        width: 100%;
    }

    .weddings-usecases__list {
        grid-template-columns: 1fr;
        gap: 18px;
    }
}

@media (max-width: 560px) {
    .weddings-hero__title {
        font-size: 26px;
    }
    .weddings-details__paragraph {
        font-size: 15px;
    }
}
</style>
