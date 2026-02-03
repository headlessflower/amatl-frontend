<template>
    <section class="hero">
        <!-- Top band -->
        <div class="hero__top">
            <div class="hero__topInner">
                <h1 class="hero__title">{{ t("hero.title") }}</h1>

                <p class="hero__copy">
                    {{ t("hero.copy") }}
                </p>
            </div>
        </div>

        <!-- Image -->
        <div class="hero__media">
            <img class="hero__img" :src="imageSrc" :alt="computedAlt" />

            <!-- Bottom-left square accent -->
            <span class="hero__accent" aria-hidden="true"></span>

            <!-- Right-side scroll button -->
            <button class="hero__scroll" type="button" @click="scrollDown">
                <span class="hero__scrollText">{{ t("hero.scroll") }}</span>
                <span class="hero__scrollIcon" aria-hidden="true">⌄</span>
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

const { t } = useI18n();

const props = withDefaults(
    defineProps<{
        imageSrc?: string;
        imageAlt?: string;
        scrollTargetId?: string;
    }>(),
    {
        imageSrc: "/hero-img.png",
        imageAlt: "",
        scrollTargetId: "studio-content",
    },
);

const computedAlt = computed(() => {
    // If you pass imageAlt explicitly, that wins.
    // Otherwise pull from i18n.
    return props.imageAlt?.trim() ? props.imageAlt : t("hero.imageAlt");
});

const scrollDown = () => {
    const el = document.getElementById(props.scrollTargetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.hero {
    background: #ffffff;
}

/* Top band */
.hero__top {
    padding: 44px 0 28px;
}

.hero__topInner {
    margin: 0 auto;
    padding: 0 16px;

    display: flex;
    flex-direction: column;
    gap: 22px;
}

.hero__title {
    margin: 0;
    font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
    font-style: italic;
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 0.95;
    color: black;
    font-size: 64px;
}

.hero__copy {
    margin: 0;
    max-width: 560px;
    color: #6b7280;
    font-size: 16px;
    line-height: 1.6;
}

/* Media block */
.hero__media {
    position: relative;
}

.hero__img {
    display: block;
    width: 100%;
    height: 340px;
    object-fit: cover;
}

/* Accent square */
.hero__accent {
    position: absolute;
    left: 16px;
    bottom: 16px;
    width: 36px;
    height: 36px;
    background: #ffffff;
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);
}

/* Scroll button */
.hero__scroll {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);

    display: inline-flex;
    align-items: center;
    gap: 10px;

    background: #ffffff;
    border: 1px solid #d4d4d4;
    padding: 10px 14px;
    cursor: pointer;

    font-size: 12px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #111;
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.08);
}

.hero__scroll:hover {
    background: #111;
    color: #fff;
    border-color: #111;
}

.hero__scrollText {
    display: none;
}

.hero__scrollIcon {
    font-size: 16px;
    line-height: 1;
}

/* Responsive */
@media (min-width: 768px) {
    .hero__topInner {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        gap: 28px;
    }

    .hero__title {
        font-size: 92px;
    }

    .hero__copy {
        text-align: left;
        max-width: 520px;
    }

    .hero__img {
        height: 520px;
    }

    .hero__scrollText {
        display: inline;
    }
}

@media (min-width: 1024px) {
    .hero__top {
        padding: 56px 0 34px;
    }

    .hero__title {
        font-size: 120px;
    }

    .hero__img {
        height: 580px;
    }

    .hero__accent {
        width: 40px;
        height: 40px;
    }
}
</style>
