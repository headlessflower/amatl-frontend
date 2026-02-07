<script setup lang="ts">
import { computed } from "vue";

export type Product = {
    id: string;
    href: string;
    title: string;
    priceFromLabel: string; // already localized upstream (keeps ProductCard dumb)
    image: { src: string; alt: string };
    hoverImage?: { src: string; alt: string };
};

const props = defineProps<{
    product: Product;
    size?: "lg" | "md";
}>();

const cardSize = computed(() => props.size ?? "md");
</script>

<template>
    <article class="product-card" :class="`product-card--${cardSize}`">
        <NuxtLink class="product-card__link" :to="product.href">
            <div class="product-card__media" aria-hidden="true">
                <img
                    class="product-card__img product-card__img--default"
                    :src="product.image.src"
                    :alt="product.image.alt"
                    loading="lazy"
                />
                <img
                    v-if="product.hoverImage"
                    class="product-card__img product-card__img--hover"
                    :src="product.hoverImage.src"
                    :alt="product.hoverImage.alt"
                    loading="lazy"
                />
            </div>

            <div class="product-card__meta">
                <h3 class="product-card__title">{{ product.title }}</h3>
                <p class="product-card__price">{{ product.priceFromLabel }}</p>
            </div>
        </NuxtLink>
    </article>
</template>

<style scoped>
.product-card {
    width: 100%;
}

.product-card__link {
    display: block;
    color: inherit;
    text-decoration: none;
}

.product-card__media {
    position: relative;
    overflow: hidden;
    background: #f3f3f3;
}

/* sizes */
.product-card--lg .product-card__media {
    aspect-ratio: 3 / 4;
    border-radius: 2px;
}
.product-card--md .product-card__media {
    aspect-ratio: 2 / 3;
    border-radius: 2px;
}

.product-card__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.0001);
    transition:
        opacity 220ms ease,
        transform 420ms ease;
}

.product-card__img--hover {
    position: absolute;
    inset: 0;
    opacity: 0;
}

.product-card__link:hover .product-card__img--hover {
    opacity: 1;
}

.product-card__link:hover .product-card__img--default {
    opacity: 0;
}

.product-card__link:hover .product-card__img {
    transform: scale(1.02);
}

.product-card__meta {
    padding-top: 10px;
}

.product-card__title {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: rgba(0, 0, 0, 0.82);
}

.product-card__price {
    margin: 4px 0 0;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.55);
}
</style>
