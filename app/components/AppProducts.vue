<script setup lang="ts">
const { t } = useI18n();

type Product = {
    id: number;
    price: number;
    originalPrice?: number;
    image: string;
    nameKey: string;
    altKey: string;
};

const products: Product[] = [
    {
        id: 1,
        price: 15,
        image: "/amatl-invites-1.png",
        nameKey: "products.items.deckledWildflower",
        altKey: "products.alts.deckledWildflower",
    },
    {
        id: 2,
        price: 45,
        image: "/stationary.png",
        nameKey: "products.items.seededStationery",
        altKey: "products.alts.seededStationery",
    },
    {
        id: 3,
        price: 29,
        image: "/amatl-prints.png",
        nameKey: "products.items.giftWrap",
        altKey: "products.alts.giftWrap",
    },
    {
        id: 4,
        price: 25,
        originalPrice: 32,
        image: "/amatl-marigold-stationary.png",
        nameKey: "products.items.stoneFiber",
        altKey: "products.alts.stoneFiber",
    },
    {
        id: 5,
        price: 19,
        image: "/amatl-startionary-1.png",
        nameKey: "products.items.desertCards",
        altKey: "products.alts.desertCards",
    },
    {
        id: 6,
        price: 9,
        originalPrice: 12,
        image: "/amatl-marigold-letters.png",
        nameKey: "products.items.miniNotes",
        altKey: "products.alts.miniNotes",
    },
];

const formatPrice = (n: number) => n.toFixed(2);
</script>

<template>
    <section class="products">
        <div class="products__inner">
            <!-- Header -->
            <div class="products__header">
                <div>
                    <p class="products__index">{{ t("products.index") }}</p>

                    <h2 class="products__title">
                        {{ t("products.title") }}
                        <span>{{ t("products.titleEmphasis") }}</span>
                    </h2>
                </div>

                <p class="products__intro">
                    {{ t("products.intro") }}
                </p>
            </div>

            <!-- Grid -->
            <div class="products__grid">
                <article v-for="p in products" :key="p.id" class="card">
                    <div class="card__media">
                        <img
                            class="card__img"
                            :src="p.image"
                            :alt="t(p.altKey)"
                        />
                    </div>

                    <div class="card__row">
                        <h3 class="card__name">
                            {{ t(p.nameKey) }}
                        </h3>

                        <div class="card__price">
                            <span class="card__priceNow">
                                <span class="card__currency">$</span>
                                {{ formatPrice(p.price) }}
                                <span class="card__unit">
                                    {{ t("products.usd") }}
                                </span>
                            </span>

                            <span v-if="p.originalPrice" class="card__priceWas">
                                $ {{ formatPrice(p.originalPrice) }}
                                {{ t("products.usd") }}
                            </span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.products {
    background: #f6efe6; /* warm beige like the sample */
    padding: 84px 0 96px;
}

.products__inner {
    margin: 0 auto;
    padding: 0 16px;
}

/* Header row */
.products__header {
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
    margin-bottom: 44px;
}

.products__index {
    margin: 0 0 8px;
    font-size: 12px;
    font-style: italic;
    color: #6b7280;
}

.products__title {
    margin: 0;
    font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
    font-weight: 400;
    font-size: 34px;
    line-height: 1.15;
    color: #0f172a;
    letter-spacing: -0.02em;
}

.products__title span {
    font-style: italic;
}

.products__intro {
    margin: 0;
    max-width: 520px;
    font-size: 14px;
    line-height: 1.7;
    color: #475569;
}

/* Grid */
.products__grid {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 48px;
    row-gap: 52px;
}

.card {
    display: flex;
    flex-direction: column;
}

.card__media {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
    min-height: 230px; /* keeps rows consistent even if images differ */
}

.card__img {
    max-height: 260px;
    max-width: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
}

/* Name + Price row */
.card__row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 18px;
}

.card__name {
    margin: 0;
    font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
    font-weight: 400;
    font-size: 18px;
    color: #0f172a;
}

.card__price {
    text-align: right;
    white-space: nowrap;
}

.card__priceNow {
    font-size: 13px;
    color: #0f172a;
}

.card__currency {
    font-size: 12px;
    color: #64748b;
    margin-right: 4px;
}

.card__unit {
    font-size: 12px;
    color: #64748b;
    margin-left: 6px;
}

.card__priceWas {
    margin-left: 10px;
    font-size: 12px;
    color: #94a3b8;
    text-decoration: line-through;
}

/* Optional CTA */
.card__cta {
    margin-top: 18px;
}

.card__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 18px;
    background: #7f9f7a; /* muted green accent */
    color: #ffffff;
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

.card__button:hover {
    filter: brightness(0.95);
}

/* Responsive */
@media (min-width: 768px) {
    .products__header {
        grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
        align-items: start;
        gap: 28px;
    }

    .products__intro {
        justify-self: end;
        text-align: right;
    }

    .products__title {
        font-size: 40px;
    }

    .products__grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: 1024px) {
    .products__title {
        font-size: 44px;
    }

    .products__grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}
</style>
