<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

type WorkshopHighlight = { title: string; description: string };
type WorkshopInfo = { title: string; description: string };

const { t } = useI18n();

const images = computed(() => ({
    heroLeft: {
        src: "/images/workshops/hero-left.jpg",
        alt: t("workshops.images.heroLeftAlt"),
    },
    heroRight: {
        src: "/images/workshops/hero-right.jpg",
        alt: t("workshops.images.heroRightAlt"),
    },
    fullBleed: {
        src: "/images/workshops/full-bleed.jpg",
        alt: t("workshops.images.fullBleedAlt"),
    },
    detailLeft: {
        src: "/images/workshops/detail-left.jpg",
        alt: t("workshops.images.detailLeftAlt"),
    },
    detailRight: {
        src: "/images/workshops/detail-right.jpg",
        alt: t("workshops.images.detailRightAlt"),
    },
}));

const highlights = computed<WorkshopHighlight[]>(() => [
    {
        title: t("workshops.highlights.paper.title"),
        description: t("workshops.highlights.paper.description"),
    },
    {
        title: t("workshops.highlights.lino.title"),
        description: t("workshops.highlights.lino.description"),
    },
    {
        title: t("workshops.highlights.optionalEtching.title"),
        description: t("workshops.highlights.optionalEtching.description"),
    },
]);

const infoCards = computed<WorkshopInfo[]>(() => [
    {
        title: t("workshops.info.duration.title"),
        description: t("workshops.info.duration.description"),
    },
    {
        title: t("workshops.info.included.title"),
        description: t("workshops.info.included.description"),
    },
    {
        title: t("workshops.info.level.title"),
        description: t("workshops.info.level.description"),
    },
    {
        title: t("workshops.info.booking.title"),
        description: t("workshops.info.booking.description"),
    },
]);
</script>

<template>
    <main class="workshops">
        <!-- HERO (like stationery/weddings) -->
        <section class="workshops-hero" aria-label="Workshops">
            <div class="workshops-hero__wrap">
                <div class="workshops-hero__grid">
                    <figure
                        class="workshops-hero__media workshops-hero__media--left"
                    >
                        <img
                            class="workshops-hero__img"
                            :src="images.heroLeft.src"
                            :alt="images.heroLeft.alt"
                            loading="lazy"
                        />
                    </figure>

                    <div class="workshops-hero__right">
                        <figure
                            class="workshops-hero__media workshops-hero__media--right"
                        >
                            <img
                                class="workshops-hero__img"
                                :src="images.heroRight.src"
                                :alt="images.heroRight.alt"
                                loading="lazy"
                            />
                        </figure>

                        <div class="workshops-hero__copy">
                            <div class="workshops-hero__actions">
                                <NuxtLink
                                    class="workshops-hero__cta workshops-hero__cta--primary"
                                    to="/contact"
                                >
                                    {{ t("workshops.hero.primaryCta") }}
                                </NuxtLink>
                                <NuxtLink
                                    class="workshops-hero__cta workshops-hero__cta--ghost"
                                    to="/shop/classes"
                                >
                                    {{ t("workshops.hero.secondaryCta") }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="workshops-hero__note">
                    <p class="workshops-hero__note-text">
                        {{ t("workshops.hero.note") }}
                    </p>
                </div>
            </div>
        </section>

        <!-- FULL BLEED FEATURE (like sample #2) -->
        <section class="workshops-feature" aria-label="Featured workshop">
            <div class="workshops-feature__media">
                <img
                    class="workshops-feature__img"
                    :src="images.fullBleed.src"
                    :alt="images.fullBleed.alt"
                    loading="lazy"
                />
                <div
                    class="workshops-feature__overlay"
                    aria-hidden="true"
                ></div>

                <div class="workshops-feature__content">
                    <p class="workshops-feature__eyebrow">
                        {{ t("workshops.feature.eyebrow") }}
                    </p>
                    <p class="workshops-feature__headline">
                        {{ t("workshops.feature.headline") }}
                    </p>
                    <NuxtLink class="workshops-feature__cta" to="/contact">
                        {{ t("workshops.feature.cta") }}
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- DETAILS (like sample #3) -->
        <section class="workshops-details" aria-label="Workshop details">
            <div class="workshops-details__wrap">
                <div class="workshops-details__text">
                    <p class="workshops-details__paragraph">
                        {{ t("workshops.details.paragraph") }}
                    </p>
                </div>

                <hr class="workshops-details__rule" />

                <div class="workshops-details__grid">
                    <figure
                        class="workshops-details__figure workshops-details__figure--left"
                    >
                        <img
                            class="workshops-details__img"
                            :src="images.detailLeft.src"
                            :alt="images.detailLeft.alt"
                            loading="lazy"
                        />
                    </figure>

                    <figure
                        class="workshops-details__figure workshops-details__figure--right"
                    >
                        <img
                            class="workshops-details__img"
                            :src="images.detailRight.src"
                            :alt="images.detailRight.alt"
                            loading="lazy"
                        />
                    </figure>
                </div>

                <!-- WHAT YOU'LL DO -->
                <div class="workshops-highlights" aria-label="What you'll do">
                    <h2 class="workshops-highlights__title">
                        {{ t("workshops.highlightsTitle") }}
                    </h2>

                    <div class="workshops-highlights__list">
                        <article
                            v-for="item in highlights"
                            :key="item.title"
                            class="workshops-highlights__item"
                        >
                            <h3 class="workshops-highlights__item-title">
                                {{ item.title }}
                            </h3>
                            <p class="workshops-highlights__item-description">
                                {{ item.description }}
                            </p>
                        </article>
                    </div>

                    <div class="workshops-highlights__actions">
                        <NuxtLink
                            class="workshops-highlights__link"
                            to="/contact"
                        >
                            <span class="workshops-highlights__link-text">{{
                                t("workshops.highlightsCta")
                            }}</span>
                            <span
                                class="workshops-highlights__link-arrow"
                                aria-hidden="true"
                                >→</span
                            >
                        </NuxtLink>
                    </div>
                </div>

                <!-- PRACTICAL INFO -->
                <div class="workshops-info" aria-label="Practical information">
                    <h2 class="workshops-info__title">
                        {{ t("workshops.infoTitle") }}
                    </h2>

                    <div class="workshops-info__list">
                        <article
                            v-for="card in infoCards"
                            :key="card.title"
                            class="workshops-info__item"
                        >
                            <h3 class="workshops-info__item-title">
                                {{ card.title }}
                            </h3>
                            <p class="workshops-info__item-description">
                                {{ card.description }}
                            </p>
                        </article>
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
.workshops {
    --ink: rgba(0, 0, 0, 0.92);
    --muted: rgba(0, 0, 0, 0.62);
    --hairline: rgba(0, 0, 0, 0.14);
    --max: 1180px;
    --gutter: 28px;

    background: #fff;
    color: var(--ink);
}

.workshops-hero__wrap,
.workshops-details__wrap {
    max-width: var(--max);
    margin: 0 auto;
    padding: 0 var(--gutter);
}

/* =========================
   HERO
   ========================= */
.workshops-hero {
    padding: 22px 0 34px;
}

.workshops-hero__grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 64px;
    align-items: start;
}

.workshops-hero__media {
    margin: 0;
    background: #f3f3f3;
    overflow: hidden;
    border-radius: 2px;
}

.workshops-hero__media--left {
    aspect-ratio: 3 / 4;
}

.workshops-hero__right {
    display: grid;
    gap: 22px;
}

.workshops-hero__media--right {
    width: 78%;
    justify-self: end;
    aspect-ratio: 1 / 1;
}

.workshops-hero__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.01);
}

.workshops-hero__copy {
    width: 78%;
    justify-self: end;
}

.workshops-hero__kicker {
    margin: 0 0 10px;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
}

.workshops-hero__title {
    margin: 0;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: -0.01em;
}

.workshops-hero__subtitle {
    margin: 14px 0 0;
    font-size: 14px;
    line-height: 1.9;
    color: var(--muted);
}

.workshops-hero__actions {
    margin-top: 18px;
    display: flex;
    gap: 12px;
    align-items: center;
}

.workshops-hero__cta {
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
        border-color 160ms ease;
}

.workshops-hero__cta:hover {
    transform: translateY(-1px);
}

.workshops-hero__cta--primary {
    background: #111;
    color: #fff;
    border: 1px solid #111;
}

.workshops-hero__cta--ghost {
    background: transparent;
    color: var(--ink);
    border: 1px solid var(--hairline);
}

.workshops-hero__note {
    margin-top: 42px;
    max-width: 680px;
    padding: 0 var(--gutter);
}

.workshops-hero__note-text {
    margin: 0;
    font-size: 14px;
    line-height: 1.9;
    color: var(--muted);
}

/* =========================
   FULL BLEED FEATURE
   ========================= */
.workshops-feature__media {
    position: relative;
    height: 100vh;
    min-height: 640px;
    overflow: hidden;
    background: #f3f3f3;
}

.workshops-feature__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1.01);
}

.workshops-feature__overlay {
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

.workshops-feature__content {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    text-align: center;
    padding: 24px;
    color: #fff;
}

.workshops-feature__eyebrow {
    margin: 0 0 10px;
    font-size: 12px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    opacity: 0.92;
}

.workshops-feature__headline {
    margin: 0;
    max-width: 760px;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 2.1;
    opacity: 0.92;
}

.workshops-feature__cta {
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
        transform 160ms ease,
        border-color 160ms ease;
}

.workshops-feature__cta:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.9);
}

/* =========================
   DETAILS
   ========================= */
.workshops-details {
    padding: 90px 0 120px;
}

.workshops-details__text {
    max-width: 860px;
    margin: 0 auto;
    text-align: center;
    padding: 0 var(--gutter);
}

.workshops-details__paragraph {
    margin: 0;
    font-size: 16px;
    line-height: 2.05;
    color: var(--muted);
}

.workshops-details__rule {
    border: 0;
    height: 1px;
    background: var(--hairline);
    width: min(640px, 86%);
    margin: 46px auto 0;
}

.workshops-details__grid {
    margin-top: 64px;
    padding: 0 var(--gutter);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
    align-items: start;
    justify-content: center;
}

.workshops-details__figure {
    margin: 0;
    justify-self: center;
    background: #f3f3f3;
    overflow: hidden;
    border-radius: 2px;
}

.workshops-details__figure--left {
    width: 78%;
    aspect-ratio: 3 / 4;
}

.workshops-details__figure--right {
    width: 66%;
    aspect-ratio: 1 / 1;
}

.workshops-details__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1.01);
}

/* =========================
   HIGHLIGHTS
   ========================= */
.workshops-highlights {
    margin-top: 74px;
    padding: 0 var(--gutter);
}

.workshops-highlights__title,
.workshops-info__title {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.01em;
}

.workshops-highlights__list {
    margin-top: 22px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px 54px;
}

.workshops-highlights__item {
    border-top: 1px solid var(--hairline);
    padding-top: 14px;
}

.workshops-highlights__item-title {
    margin: 0;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 500;
}

.workshops-highlights__item-description {
    margin: 10px 0 0;
    font-size: 14px;
    line-height: 1.9;
    color: var(--muted);
}

.workshops-highlights__actions {
    margin-top: 26px;
}

.workshops-highlights__link {
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

.workshops-highlights__link:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 0, 0, 0.28);
}

/* =========================
   INFO CARDS
   ========================= */
.workshops-info {
    margin-top: 64px;
    padding: 0 var(--gutter);
}

.workshops-info__list {
    margin-top: 22px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 54px;
}

.workshops-info__item {
    border-top: 1px solid var(--hairline);
    padding-top: 14px;
}

.workshops-info__item-title {
    margin: 0;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 500;
}

.workshops-info__item-description {
    margin: 10px 0 0;
    font-size: 14px;
    line-height: 1.9;
    color: var(--muted);
}

/* =========================
   RESPONSIVE
   ========================= */
@media (max-width: 1100px) {
    .workshops-hero__grid {
        gap: 44px;
    }
    .workshops-details__grid {
        gap: 54px;
    }
}

@media (max-width: 900px) {
    .workshops-hero__grid {
        grid-template-columns: 1fr;
        gap: 18px;
    }

    .workshops-hero__media--right,
    .workshops-hero__copy {
        width: 100%;
        justify-self: start;
    }

    .workshops-details__grid {
        grid-template-columns: 1fr;
        gap: 26px;
    }

    .workshops-details__figure--left,
    .workshops-details__figure--right {
        width: 100%;
    }

    .workshops-highlights__list,
    .workshops-info__list {
        grid-template-columns: 1fr;
        gap: 18px;
    }
}

@media (max-width: 560px) {
    .workshops-hero__title {
        font-size: 26px;
    }
    .workshops-details__paragraph {
        font-size: 15px;
    }
}
</style>
