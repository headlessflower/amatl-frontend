<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

type BrandingOffer = {
    title: string;
    description: string;
};

const { t } = useI18n();

const offers = computed<BrandingOffer[]>(() => [
    {
        title: t("branding.useCases.menus.title"),
        description: t("branding.useCases.menus.description"),
    },
    {
        title: t("branding.useCases.flyers.title"),
        description: t("branding.useCases.flyers.description"),
    },
    {
        title: t("branding.useCases.tabletop.title"),
        description: t("branding.useCases.tabletop.description"),
    },
    {
        title: t("branding.useCases.packaging.title"),
        description: t("branding.useCases.packaging.description"),
    },
    {
        title: t("branding.useCases.brandSystem.title"),
        description: t("branding.useCases.brandSystem.description"),
    },
]);

const images = computed(() => ({
    heroLeft: {
        src: "/marigold-dark/marigold-dark-stationery.png",
        alt: t("branding.images.heroLeftAlt"),
    },
    heroRight: {
        src: "/paper-marigold/amatl-marigold-letters.png",
        alt: t("branding.images.heroRightAlt"),
    },
    fullBleed: {
        src: "/stationery/amatl-invites-1.png",
        alt: t("branding.images.fullBleedAlt"),
    },
    detailLeft: {
        src: "/marigold-dark/marigold-dark-tasting-notes.png",
        alt: t("branding.images.detailLeftAlt"),
    },
    detailRight: {
        src: "/stationery/amatl-startionary-1.png",
        alt: t("branding.images.detailRightAlt"),
    },
}));

function formatContactSubject(topic: string) {
    // example helper if you later pass query params to /contact
    return encodeURIComponent(topic.trim());
}

const contactLink = computed(() => {
    const subject = formatContactSubject(t("branding.contact.subject"));
    return `/contact?topic=${subject}`;
});
</script>

<template>
    <main class="branding">
        <!-- HERO (editorial like sample #1) -->
        <section
            class="branding-hero"
            aria-label="Business marketing materials"
        >
            <div class="branding-hero__wrap">
                <div class="branding-hero__grid">
                    <figure
                        class="branding-hero__media branding-hero__media--left"
                    >
                        <img
                            class="branding-hero__img"
                            :src="images.heroLeft.src"
                            :alt="images.heroLeft.alt"
                            loading="lazy"
                        />
                    </figure>

                    <div class="branding-hero__right">
                        <figure
                            class="branding-hero__media branding-hero__media--right"
                        >
                            <img
                                class="branding-hero__img"
                                :src="images.heroRight.src"
                                :alt="images.heroRight.alt"
                                loading="lazy"
                            />
                        </figure>

                        <div class="branding-hero__copy">
                            <div class="branding-hero__actions">
                                <NuxtLink
                                    class="branding-hero__cta branding-hero__cta--primary"
                                    :to="contactLink"
                                >
                                    {{ t("branding.hero.primaryCta") }}
                                </NuxtLink>
                                <NuxtLink
                                    class="branding-hero__cta branding-hero__cta--ghost"
                                    to="/shop"
                                >
                                    {{ t("branding.hero.secondaryCta") }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="branding-hero__note">
                    <p class="branding-hero__note-text">
                        {{ t("branding.hero.note") }}
                    </p>
                </div>
            </div>
        </section>

        <!-- FULL BLEED FEATURE (like sample #2) -->
        <section class="branding-feature" aria-label="Featured brand moment">
            <div class="branding-feature__media">
                <img
                    class="branding-feature__img"
                    :src="images.fullBleed.src"
                    :alt="images.fullBleed.alt"
                    loading="lazy"
                />
                <div class="branding-feature__overlay" aria-hidden="true"></div>

                <div class="branding-feature__content">
                    <p class="branding-feature__eyebrow">
                        {{ t("branding.feature.eyebrow") }}
                    </p>
                    <p class="branding-feature__headline">
                        {{ t("branding.feature.headline") }}
                    </p>
                    <NuxtLink class="branding-feature__cta" :to="contactLink">
                        {{ t("branding.feature.cta") }}
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- DETAILS (like sample #3) -->
        <section class="branding-details" aria-label="Details">
            <div class="branding-details__wrap">
                <div class="branding-details__text">
                    <p class="branding-details__paragraph">
                        {{ t("branding.details.paragraph") }}
                    </p>
                </div>

                <hr class="branding-details__rule" />

                <div class="branding-details__grid">
                    <figure
                        class="branding-details__figure branding-details__figure--left"
                    >
                        <img
                            class="branding-details__img"
                            :src="images.detailLeft.src"
                            :alt="images.detailLeft.alt"
                            loading="lazy"
                        />
                    </figure>

                    <figure
                        class="branding-details__figure branding-details__figure--right"
                    >
                        <img
                            class="branding-details__img"
                            :src="images.detailRight.src"
                            :alt="images.detailRight.alt"
                            loading="lazy"
                        />
                    </figure>
                </div>

                <!-- USE CASES -->
                <div class="branding-usecases" aria-label="Offerings">
                    <h2 class="branding-usecases__title">
                        {{ t("branding.useCasesTitle") }}
                    </h2>

                    <div class="branding-usecases__list">
                        <article
                            v-for="item in offers"
                            :key="item.title"
                            class="branding-usecases__item"
                        >
                            <h3 class="branding-usecases__item-title">
                                {{ item.title }}
                            </h3>
                            <p class="branding-usecases__item-description">
                                {{ item.description }}
                            </p>
                        </article>
                    </div>

                    <div class="branding-usecases__actions">
                        <NuxtLink
                            class="branding-usecases__link"
                            :to="contactLink"
                        >
                            <span class="branding-usecases__link-text">{{
                                t("branding.useCasesCta")
                            }}</span>
                            <span
                                class="branding-usecases__link-arrow"
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
.branding {
    --ink: rgba(0, 0, 0, 0.92);
    --muted: rgba(0, 0, 0, 0.62);
    --hairline: rgba(0, 0, 0, 0.14);
    --max: 1180px;
    --gutter: 28px;

    background: #fff;
    color: var(--ink);
}

.branding-hero__wrap,
.branding-details__wrap {
    max-width: var(--max);
    margin: 0 auto;
    padding: 0 var(--gutter);
}

/* =========================
   HERO
   ========================= */
.branding-hero {
    padding: 22px 0 34px;
}

.branding-hero__grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 64px;
    align-items: start;
}

.branding-hero__media {
    margin: 0;
    background: #f3f3f3;
    overflow: hidden;
    border-radius: 2px;
}

.branding-hero__media--left {
    aspect-ratio: 3 / 4;
}

.branding-hero__right {
    display: grid;
    gap: 22px;
}

.branding-hero__media--right {
    width: 78%;
    justify-self: end;
    aspect-ratio: 1 / 1;
}

.branding-hero__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.01);
}

.branding-hero__copy {
    width: 78%;
    justify-self: end;
}

.branding-hero__kicker {
    margin: 0 0 10px;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
}

.branding-hero__title {
    margin: 0;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: -0.01em;
}

.branding-hero__subtitle {
    margin: 14px 0 0;
    font-size: 14px;
    line-height: 1.9;
    color: var(--muted);
}

.branding-hero__actions {
    margin-top: 18px;
    display: flex;
    gap: 12px;
    align-items: center;
}

.branding-hero__cta {
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

.branding-hero__cta:hover {
    transform: translateY(-1px);
}

.branding-hero__cta--primary {
    background: #111;
    color: #fff;
    border: 1px solid #111;
}

.branding-hero__cta--ghost {
    background: transparent;
    color: var(--ink);
    border: 1px solid var(--hairline);
}

.branding-hero__note {
    margin-top: 42px;
    max-width: 680px;
    padding: 0 var(--gutter);
}

.branding-hero__note-text {
    margin: 0;
    font-size: 14px;
    line-height: 1.9;
    color: var(--muted);
}

/* =========================
   FULL BLEED FEATURE
   ========================= */
.branding-feature__media {
    position: relative;
    height: 100vh;
    min-height: 640px;
    overflow: hidden;
    background: #f3f3f3;
}

.branding-feature__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1.01);
}

.branding-feature__overlay {
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

.branding-feature__content {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    text-align: center;
    padding: 24px;
    color: #fff;
}

.branding-feature__eyebrow {
    margin: 0 0 10px;
    font-size: 12px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    opacity: 0.92;
}

.branding-feature__headline {
    margin: 0;
    max-width: 760px;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 2.1;
    opacity: 0.92;
}

.branding-feature__cta {
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

.branding-feature__cta:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.9);
}

/* =========================
   DETAILS + USE CASES
   ========================= */
.branding-details {
    padding: 90px 0 120px;
}

.branding-details__text {
    max-width: 860px;
    margin: 0 auto;
    text-align: center;
    padding: 0 var(--gutter);
}

.branding-details__paragraph {
    margin: 0;
    font-size: 16px;
    line-height: 2.05;
    color: var(--muted);
}

.branding-details__rule {
    border: 0;
    height: 1px;
    background: var(--hairline);
    width: min(640px, 86%);
    margin: 46px auto 0;
}

.branding-details__grid {
    margin-top: 64px;
    padding: 0 var(--gutter);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
    align-items: start;
    justify-content: center;
}

.branding-details__figure {
    margin: 0;
    justify-self: center;
    background: #f3f3f3;
    overflow: hidden;
    border-radius: 2px;
}

.branding-details__figure--left {
    width: 78%;
    aspect-ratio: 3 / 4;
}

.branding-details__figure--right {
    width: 66%;
    aspect-ratio: 1 / 1;
}

.branding-details__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1.01);
}

/* use cases */
.branding-usecases {
    margin-top: 74px;
    padding: 0 var(--gutter);
}

.branding-usecases__title {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.01em;
}

.branding-usecases__list {
    margin-top: 22px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px 54px;
}

.branding-usecases__item {
    border-top: 1px solid var(--hairline);
    padding-top: 14px;
}

.branding-usecases__item-title {
    margin: 0;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 500;
}

.branding-usecases__item-description {
    margin: 10px 0 0;
    font-size: 14px;
    line-height: 1.9;
    color: var(--muted);
}

.branding-usecases__actions {
    margin-top: 26px;
}

.branding-usecases__link {
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

.branding-usecases__link:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 0, 0, 0.28);
}

/* =========================
   RESPONSIVE
   ========================= */
@media (max-width: 1100px) {
    .branding-hero__grid {
        gap: 44px;
    }
    .branding-details__grid {
        gap: 54px;
    }
}

@media (max-width: 900px) {
    .branding-hero__grid {
        grid-template-columns: 1fr;
        gap: 18px;
    }

    .branding-hero__media--right,
    .branding-hero__copy {
        width: 100%;
        justify-self: start;
    }

    .branding-details__grid {
        grid-template-columns: 1fr;
        gap: 26px;
    }

    .branding-details__figure--left,
    .branding-details__figure--right {
        width: 100%;
    }

    .branding-usecases__list {
        grid-template-columns: 1fr;
        gap: 18px;
    }
}

@media (max-width: 560px) {
    .branding-hero__title {
        font-size: 26px;
    }
    .branding-details__paragraph {
        font-size: 15px;
    }
}
</style>
