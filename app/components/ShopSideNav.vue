<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

export type SideNavItem = {
    key: string; // i18n suffix key (ex: "all", "blush")
    value: string; // filter value (ex: "all", "blush")
};

const props = defineProps<{
    modelValue: string;
    items?: SideNavItem[];
}>();

const emit = defineEmits<{
    (e: "update:modelValue", v: string): void;
}>();

const { t } = useI18n();

const navItems = computed<SideNavItem[]>(
    () =>
        props.items ?? [
            { key: "all", value: "all" },
            { key: "blush", value: "blush" },
            { key: "clay", value: "clay" },
            { key: "dusk", value: "dusk" },
            { key: "haze", value: "haze" },
            { key: "lake", value: "lake" },
            { key: "midnight", value: "midnight" },
            { key: "offWhite", value: "off-white" },
            { key: "permanentEdition", value: "permanent-edition" },
            { key: "samplesBundles", value: "samples-bundles" },
            { key: "seaFog", value: "sea-fog" },
            { key: "wheat", value: "wheat" },
            { key: "more", value: "more" },
        ],
);

function select(value: string) {
    emit("update:modelValue", value);
}
</script>

<template>
    <aside class="shop-sidenav" aria-label="Shop filters">
        <nav class="shop-sidenav__nav">
            <button
                v-for="item in navItems"
                :key="item.value"
                class="shop-sidenav__link"
                :class="{
                    'shop-sidenav__link--active': modelValue === item.value,
                }"
                type="button"
                @click="select(item.value)"
            >
                {{ t(`shop.filters.${item.key}`) }}
            </button>
        </nav>
    </aside>
</template>

<style scoped>
.shop-sidenav {
    position: sticky;
    top: 96px;
    align-self: start;
}

.shop-sidenav__nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 6px 0;
}

.shop-sidenav__link {
    appearance: none;
    border: 0;
    background: transparent;
    text-align: left;
    padding: 4px 0;
    font-size: 13px;
    line-height: 1.2;
    letter-spacing: 0.01em;
    color: rgba(0, 0, 0, 0.62);
    cursor: pointer;
    transition: color 160ms ease;
}

.shop-sidenav__link:hover {
    color: rgba(0, 0, 0, 0.86);
}

.shop-sidenav__link--active {
    color: rgba(0, 0, 0, 0.92);
    text-decoration: underline;
    text-underline-offset: 4px;
}

/* mobile */
@media (max-width: 900px) {
    .shop-sidenav {
        position: relative;
        top: auto;
        order: 2;
    }

    .shop-sidenav__nav {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px 14px;
    }

    .shop-sidenav__link {
        padding: 6px 0;
    }
}
</style>
