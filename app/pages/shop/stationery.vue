<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

type Img = { src: string; alt: string };

const hero = computed(() => ({
    kicker: t("stationery.hero.kicker"),
    title: t("stationery.hero.title"),
    subtitle: t("stationery.hero.subtitle"),
    primaryCta: t("stationery.hero.primaryCta"),
    secondaryCta: t("stationery.hero.secondaryCta"),
    // Replace with your assets
    leftImage: {
        src: "/images/stationery/hero-left.jpg",
        alt: t("stationery.hero.leftAlt"),
    } as Img,
    rightImage: {
        src: "/images/stationery/hero-right.jpg",
        alt: t("stationery.hero.rightAlt"),
    } as Img,
}));

const featured = computed(() => ({
    eyebrow: t("stationery.featured.eyebrow"),
    headline: t("stationery.featured.headline"),
    cta: t("stationery.featured.cta"),
    image: {
        src: "/images/stationery/featured-full.jpg",
        alt: t("stationery.featured.alt"),
    } as Img,
}));

const details = computed(() => ({
    body: t("stationery.details.body"),
    imgLeft: {
        src: "/images/stationery/details-left.jpg",
        alt: t("stationery.details.leftAlt"),
    } as Img,
    imgRight: {
        src: "/images/stationery/details-right.jpg",
        alt: t("stationery.details.rightAlt"),
    } as Img,
}));
</script>

<template>
    <main class="stationery">
        <!-- HERO (sample #1) -->
        <section class="stationery-hero">
            <div class="stationery-hero__wrap">
                <div class="stationery-hero__grid">
                    <figure
                        class="stationery-hero__image stationery-hero__image--left"
                    >
                        <img
                            class="stationery-hero__img"
                            :src="hero.leftImage.src"
                            :alt="hero.leftImage.alt"
                        />
                    </figure>

                    <div class="stationery-hero__right">
                        <figure
                            class="stationery-hero__image stationery-hero__image--right"
                        >
                            <img
                                class="stationery-hero__img"
                                :src="hero.rightImage.src"
                                :alt="hero.rightImage.alt"
                            />
                        </figure>

                        <div class="stationery-hero__copy">
                            <div class="stationery-hero__actions">
                                <NuxtLink
                                    class="stationery-hero__cta stationery-hero__cta--primary"
                                    to="/shop"
                                >
                                    {{ hero.primaryCta }}
                                </NuxtLink>
                                <NuxtLink
                                    class="stationery-hero__cta stationery-hero__cta--ghost"
                                    to="/contact"
                                >
                                    {{ hero.secondaryCta }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- small paragraph anchored lower-left like the sample -->
                <div class="stationery-hero__note">
                    <p class="stationery-hero__note-text">
                        {{ t("stationery.hero.note") }}
                    </p>
                </div>
            </div>
        </section>

        <!-- FEATURED FULLSCREEN (sample #2) -->
        <section class="stationery-featured" aria-label="Featured set">
            <div class="stationery-featured__media">
                <img
                    class="stationery-featured__img"
                    :src="featured.image.src"
                    :alt="featured.image.alt"
                />
                <div
                    class="stationery-featured__overlay"
                    aria-hidden="true"
                ></div>

                <div class="stationery-featured__content">
                    <p class="stationery-featured__eyebrow">
                        {{ featured.eyebrow }}
                    </p>
                    <p class="stationery-featured__headline">
                        {{ featured.headline }}
                    </p>
                    <NuxtLink class="stationery-featured__cta" to="/contact">
                        {{ featured.cta }}
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- DETAILS (sample #3) -->
        <section class="stationery-details" aria-label="Details">
            <div class="stationery-details__wrap">
                <div class="stationery-details__text">
                    <p class="stationery-details__paragraph">
                        {{ details.body }}
                    </p>
                </div>

                <hr class="stationery-details__rule" />

                <div class="stationery-details__grid">
                    <figure class="stationery-details__figure">
                        <img
                            class="stationery-details__img"
                            :src="details.imgLeft.src"
                            :alt="details.imgLeft.alt"
                        />
                    </figure>

                    <figure
                        class="stationery-details__figure stationery-details__figure--right"
                    >
                        <img
                            class="stationery-details__img"
                            :src="details.imgRight.src"
                            :alt="details.imgRight.alt"
                        />
                    </figure>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
/* =========================
   PAGE BASE
   ========================= */
.stationery {
    --ink: rgba(0, 0, 0, 0.92);
    --muted: rgba(0, 0, 0, 0.62);
    --hairline: rgba(0, 0, 0, 0.14);

    --max: 1180px;
    --gutter: 28px;

    background: #fff;
    color: var(--ink);
}

/* =========================
   HERO (sample #1)
   ========================= */
.stationery-hero {
    padding: 30px var(--gutter) 40px;
}

.stationery-hero__wrap {
    max-width: var(--max);
    margin: 0 auto;
}

.stationery-hero__grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 64px;
    align-items: start;
}

/* left large image */
.stationery-hero__image--left {
    margin: 0;
    aspect-ratio: 3 / 4;
    background: #f3f3f3;
}

/* right column: small image + copy */
.stationery-hero__right {
    display: grid;
    gap: 24px;
}

.stationery-hero__image--right {
    margin: 0;
    width: 78%;
    max-width: 520px;
    justify-self: end;
    aspect-ratio: 1 / 1;
    background: #f3f3f3;
}

.stationery-hero__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* copy block */
.stationery-hero__copy {
    width: 78%;
    max-width: 520px;
    justify-self: end;
    padding-top: 2px;
}

.stationery-hero__kicker {
    margin: 0 0 10px;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
}

.stationery-hero__title {
    margin: 0;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: -0.01em;
}

.stationery-hero__subtitle {
    margin: 14px 0 0;
    font-size: 14px;
    line-height: 1.85;
    color: var(--muted);
}

.stationery-hero__actions {
    margin-top: 18px;
    display: flex;
    gap: 12px;
    align-items: center;
}

.stationery-hero__cta {
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

.stationery-hero__cta:hover {
    transform: translateY(-1px);
}

.stationery-hero__cta--primary {
    background: #111;
    color: #fff;
    border: 1px solid #111;
}

.stationery-hero__cta--ghost {
    background: transparent;
    color: var(--ink);
    border: 1px solid var(--hairline);
}

.stationery-hero__note {
    margin-top: 44px;
    max-width: 520px;
}

.stationery-hero__note-text {
    margin: 0;
    font-size: 14px;
    line-height: 1.9;
    color: var(--muted);
}

/* =========================
   FEATURED FULLSCREEN (sample #2)
   ========================= */
.stationery-featured {
    margin-top: 10px;
}

.stationery-featured__media {
    position: relative;
    height: 100vh;
    min-height: 640px;
    overflow: hidden;
    background: #f3f3f3;
}

.stationery-featured__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1.01);
}

/* subtle readability overlay (still airy) */
.stationery-featured__overlay {
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

.stationery-featured__content {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    text-align: center;
    padding: 24px;
    color: #fff;
}

.stationery-featured__eyebrow {
    margin: 0 0 10px;
    font-size: 12px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    opacity: 0.92;
}

.stationery-featured__headline {
    margin: 0;
    max-width: 720px;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 2.1;
    opacity: 0.92;
}

.stationery-featured__cta {
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
        transform 160ms ease,
        opacity 160ms ease;
}

.stationery-featured__cta:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.9);
}

/* =========================
   DETAILS (sample #3)
   ========================= */
.stationery-details {
    padding: 90px var(--gutter) 130px;
}

.stationery-details__wrap {
    max-width: var(--max);
    margin: 0 auto;
}

.stationery-details__text {
    max-width: 820px;
    margin: 0 auto;
    text-align: center;
}

.stationery-details__paragraph {
    margin: 0;
    font-size: 16px;
    line-height: 2.05;
    color: var(--muted);
}

.stationery-details__rule {
    border: 0;
    height: 1px;
    background: var(--hairline);
    width: min(640px, 86%);
    margin: 46px auto 0;
}

.stationery-details__grid {
    margin-top: 64px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
    align-items: start;
    justify-content: center;
}

.stationery-details__figure {
    margin: 0;
    justify-self: center;
    width: 78%;
    aspect-ratio: 3 / 4;
    background: #f3f3f3;
}

.stationery-details__figure--right {
    width: 66%;
    aspect-ratio: 1 / 1;
    justify-self: center;
}

.stationery-details__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* =========================
   RESPONSIVE
   ========================= */
@media (max-width: 1100px) {
    .stationery-hero__grid {
        gap: 44px;
    }
    .stationery-details__grid {
        gap: 54px;
    }
}

@media (max-width: 900px) {
    .stationery-hero__grid {
        grid-template-columns: 1fr;
        gap: 22px;
    }

    .stationery-hero__image--right,
    .stationery-hero__copy {
        width: 100%;
        max-width: none;
        justify-self: start;
    }

    .stationery-hero__note {
        margin-top: 26px;
    }

    .stationery-details {
        padding: 64px var(--gutter) 90px;
    }

    .stationery-details__grid {
        grid-template-columns: 1fr;
        gap: 26px;
    }

    .stationery-details__figure,
    .stationery-details__figure--right {
        width: 100%;
    }
}

@media (max-width: 560px) {
    .stationery-hero__title {
        font-size: 24px;
    }
    .stationery-details__paragraph {
        font-size: 15px;
    }
}
</style>
