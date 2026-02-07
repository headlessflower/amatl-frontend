<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
    <main class="shop-shell">
        <header class="shop-shell__header" aria-label="Shop header">
            <div class="shop-shell__container">
                <div class="shop-shell__top">
                    <p class="shop-shell__kicker">
                        {{ t("shopShell.kicker") }}
                    </p>

                    <!-- Optional: local shop nav (keeps it minimal like your references) -->
                </div>
            </div>
        </header>

        <section class="shop-shell__body" aria-label="Shop content">
            <div class="shop-shell__container">
                <!-- This renders pages/shop/index.vue and other nested pages -->
                <NuxtPage />
            </div>
        </section>
    </main>
</template>

<style scoped>
.shop-shell {
    --ink: rgba(0, 0, 0, 0.92);
    --muted: rgba(0, 0, 0, 0.62);
    --hairline: rgba(0, 0, 0, 0.14);

    --max: 1180px;
    --gutter: 28px;

    background: #fff;
    color: var(--ink);
}

.shop-shell__container {
    max-width: var(--max);
    margin: 0 auto;
    padding: 0 var(--gutter);
}

/* header */
.shop-shell__header {
    padding: 22px 0 18px;
}

.shop-shell__top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 20px;
    border-bottom: 1px solid var(--hairline);
    padding-bottom: 16px;
}

.shop-shell__kicker {
    margin: 0;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
}

.shop-shell__nav {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    justify-content: flex-end;
}

.shop-shell__nav-link {
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--muted);
    padding-bottom: 6px;
    border-bottom: 1px solid transparent;
    transition:
        color 160ms ease,
        border-color 160ms ease,
        transform 160ms ease;
}

.shop-shell__nav-link:hover {
    color: var(--ink);
    transform: translateY(-1px);
}

.shop-shell__nav-link.router-link-active {
    color: var(--ink);
    border-color: var(--hairline);
}

/* body */
.shop-shell__body {
    padding: 26px 0 70px;
}

/* footer */
.shop-shell__footer {
    padding: 26px 0 80px;
}

.shop-shell__footer-inner {
    border-top: 1px solid var(--hairline);
    padding-top: 18px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 18px;
}

.shop-shell__footer-text {
    margin: 0;
    font-size: 13px;
    line-height: 1.8;
    color: var(--muted);
    max-width: 760px;
}

.shop-shell__footer-link {
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--ink);
    border-bottom: 1px solid var(--hairline);
    padding-bottom: 6px;
    white-space: nowrap;
    transition:
        transform 160ms ease,
        border-color 160ms ease;
}

.shop-shell__footer-link:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 0, 0, 0.28);
}

/* responsive */
@media (max-width: 900px) {
    .shop-shell__top {
        flex-direction: column;
        align-items: flex-start;
    }

    .shop-shell__nav {
        justify-content: flex-start;
    }

    .shop-shell__footer-inner {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
