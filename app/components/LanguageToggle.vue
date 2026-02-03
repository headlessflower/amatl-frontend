<script setup lang="ts">
const { locale, setLocale } = useI18n();

const isEs = computed(() => locale.value === "es");

function toggle() {
    setLocale(isEs.value ? "en" : "es");
}
</script>

<template>
    <button
        class="toggle"
        type="button"
        @click="toggle"
        :aria-label="isEs ? 'Switch to English' : 'Cambiar a Español'"
    >
        <span class="toggle__pill" :class="{ 'toggle__pill--active': isEs }"
            >ES</span
        >
        <span class="toggle__pill" :class="{ 'toggle__pill--active': !isEs }"
            >EN</span
        >
    </button>
</template>

<style scoped>
.toggle {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    padding: 6px;

    border: 2px solid rgba(255, 255, 255, 0.05);
    background: rgba(255, 255, 255, 0.05);
    color: black;

    cursor: pointer;
    user-select: none;
}

.toggle:hover {
    border-color: rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.07);
}

.toggle:active {
    transform: translateY(1px);
}

.toggle__pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-width: 34px;
    height: 28px;
    padding: 0 10px;

    font-weight: 900;
    font-size: 12px;
    letter-spacing: 0.02em;

    color: black;
    border: 1px solid transparent;
}

.toggle__pill--active {
    color: #111;
    background: white;
    border: 2px solid;
    border-color: rgba(0, 0, 0, 0.12);
}
</style>
