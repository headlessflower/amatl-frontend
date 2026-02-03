<script setup lang="ts">
const { t } = useI18n();

const props = withDefaults(
    defineProps<{
        mainImageSrc?: string;
        secondaryImageSrc?: string;
    }>(),
    {
        mainImageSrc: "/amatl-work-2.png",
        secondaryImageSrc: "/hands-sheet.png",
    },
);
</script>

<template>
    <section class="classes">
        <!-- Decorative squares (top-left) -->
        <div class="classes__decor" aria-hidden="true">
            <span class="decor decor--light"></span>
            <span class="decor decor--dark"></span>
        </div>

        <div class="classes__inner">
            <!-- Text column -->
            <div class="classes__text">
                <p class="classes__index">{{ t("classes.index") }}</p>

                <h2 class="classes__title">
                    {{ t("classes.title") }}
                    <span>{{ t("classes.titleEmphasis") }}</span>
                </h2>

                <p class="classes__description">
                    {{ t("classes.description") }}
                </p>
            </div>

            <!-- Image collage -->
            <div class="classes__media">
                <span class="classes__block" aria-hidden="true"></span>

                <div class="classes__image classes__image--main">
                    <img
                        :src="mainImageSrc"
                        :alt="t('classes.images.mainAlt')"
                    />
                </div>

                <div class="classes__image classes__image--secondary">
                    <img
                        :src="secondaryImageSrc"
                        :alt="t('classes.images.secondaryAlt')"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.classes {
    position: relative;
    background: #ffffff;
    padding-block: clamp(4rem, 8vw, 6.5rem);
    overflow: hidden;
}

/* Decorative squares */
.classes__decor {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    gap: 1.125rem;
    padding-left: 0.5rem;
}

.decor {
    width: 2.75rem;
    height: 2.75rem;
}

.decor--light {
    background: #f3ede4;
}

.decor--dark {
    background: #000000;
    margin-top: 3.25rem;
}

/* Layout */
.classes__inner {
    max-width: 70rem;
    margin-inline: auto;
    padding-inline: clamp(1rem, 3vw, 1.5rem);

    display: grid;
    grid-template-columns: 1fr;
    gap: clamp(2.5rem, 6vw, 3.5rem);
}

/* Text column */
.classes__text {
    max-width: 32.5rem;
}

.classes__index {
    margin: 0 0 0.625rem;
    font-size: 0.75rem;
    font-style: italic;
    color: #6b7280;
}

.classes__title {
    margin: 0 0 1.25rem;
    font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: #0f172a;
}

.classes__title span {
    font-style: italic;
}

.classes__description {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.7;
    color: #4b5563;
}

/* Media collage */
.classes__media {
    position: relative;
    min-height: clamp(18rem, 35vw, 26rem);
}

.classes__block {
    position: absolute;
    top: 1.75rem;
    left: clamp(1.25rem, 3vw, 2.25rem);
    width: 4.5rem;
    height: 4.5rem;
    background: #000;
    z-index: 1;
}

.classes__image {
    position: relative;
    overflow: hidden;
    background: #e5e7eb;
}

.classes__image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.classes__image--main {
    width: 100%;
    max-width: 35rem;
    height: clamp(18rem, 34vw, 26.25rem);
    margin-left: auto;
    z-index: 2;
}

.classes__image--secondary {
    position: absolute;
    bottom: -3rem;
    left: 0;
    width: clamp(15rem, 28vw, 21.25rem);
    height: clamp(10rem, 18vw, 13.75rem);
    z-index: 3;
    box-shadow: 0 1.125rem 2.5rem rgba(0, 0, 0, 0.18);
}

/* Responsive */
@media (min-width: 48rem) {
    .classes__inner {
        grid-template-columns: 1fr 1.1fr;
        align-items: center;
    }
}
</style>
