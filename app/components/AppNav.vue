<template>
    <header class="header">
        <nav class="nav">
            <!-- Brand -->
            <NuxtLink to="/" class="brand" aria-label="Amatl home">
                <span class="brand__mark" aria-hidden="true">
                    <span class="brand__markInner"></span>
                </span>
                <span class="brand__name">Amatl</span>
            </NuxtLink>

            <!-- Desktop navigation -->
            <div class="nav__right">
                <ul class="menu menu--desktop" role="list">
                    <li
                        v-for="item in navItems"
                        :key="item.label"
                        class="menu__item"
                        :class="{ 'menu__item--dropdown': !!item.children }"
                    >
                        <NuxtLink
                            v-if="!item.children"
                            :to="item.href"
                            class="menu__link"
                        >
                            {{ item.label }}
                        </NuxtLink>

                        <!-- Dropdown -->
                        <div v-else class="dropdown">
                            <button class="dropdown__trigger" type="button">
                                <span>{{ item.label }}</span>
                                <span class="dropdown__caret" aria-hidden="true"
                                    >▾</span
                                >
                            </button>

                            <div class="dropdown__menu" role="menu">
                                <NuxtLink
                                    v-for="child in item.children"
                                    :key="child.label"
                                    :to="child.href"
                                    class="dropdown__item"
                                    role="menuitem"
                                >
                                    {{ child.label }}
                                </NuxtLink>
                            </div>
                        </div>
                    </li>
                </ul>

                <!-- Language toggle (desktop) -->
                <LanguageToggle class="langToggle langToggle--desktop" />

                <NuxtLink to="/contact" class="cta">
                    <span class="cta__text">CONTACT US</span>
                    <span class="cta__arrow" aria-hidden="true">›</span>
                </NuxtLink>

                <!-- Mobile hamburger -->
                <button
                    class="hamburger"
                    type="button"
                    @click="toggleMobileMenu"
                    :aria-expanded="isMobileMenuOpen"
                    aria-label="Toggle navigation"
                >
                    <span
                        v-if="!isMobileMenuOpen"
                        class="hamburger__bars"
                        aria-hidden="true"
                    >
                        <span></span><span></span><span></span>
                    </span>
                    <span v-else class="hamburger__close" aria-hidden="true"
                        >×</span
                    >
                </button>
            </div>
        </nav>

        <!-- Mobile panel -->
        <transition name="fade">
            <div v-if="isMobileMenuOpen" class="mobile">
                <!-- ✅ Language toggle (mobile) -->
                <div class="mobile__top">
                    <LanguageToggle class="langToggle langToggle--mobile" />
                </div>

                <ul class="mobile__list" role="list">
                    <li
                        v-for="item in navItems"
                        :key="item.label"
                        class="mobile__item"
                    >
                        <NuxtLink
                            v-if="!item.children"
                            :to="item.href"
                            class="mobile__link"
                            @click="closeMobileMenu"
                        >
                            {{ item.label }}
                        </NuxtLink>

                        <!-- Mobile dropdown -->
                        <div v-else class="mobileDrop">
                            <button
                                class="mobileDrop__trigger"
                                type="button"
                                @click="toggleMobileDropdown(item.label)"
                            >
                                <span>{{ item.label }}</span>
                                <span
                                    class="mobileDrop__caret"
                                    aria-hidden="true"
                                >
                                    {{
                                        openMobileDropdown === item.label
                                            ? "▴"
                                            : "▾"
                                    }}
                                </span>
                            </button>

                            <div
                                v-if="openMobileDropdown === item.label"
                                class="mobileDrop__menu"
                            >
                                <NuxtLink
                                    v-for="child in item.children"
                                    :key="child.label"
                                    :to="child.href"
                                    class="mobileDrop__item"
                                    @click="closeMobileMenu"
                                >
                                    {{ child.label }}
                                </NuxtLink>
                            </div>
                        </div>
                    </li>
                </ul>

                <NuxtLink
                    to="/contact"
                    class="mobile__cta"
                    @click="closeMobileMenu"
                >
                    <span>CONTACT US</span>
                    <span aria-hidden="true">›</span>
                </NuxtLink>
            </div>
        </transition>
    </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
// If Nuxt auto-imports components, you don't need this import.
// import LanguageToggle from '~/components/LanguageToggle.vue'

type NavChild = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };

const navItems: NavItem[] = [
    {
        label: "Shop",
        children: [
            { label: "All Paper", href: "/shop" },
            { label: "Stationery", href: "/shop/stationery" },
            { label: "Wedding Suites", href: "/shop/wedding" },
            { label: "B2B", href: "/shop/business" },
        ],
    },
    //{ label: "Studio", href: "/studio" },
    //{ label: "Gallery", href: "/gallery" },
    { label: "Workshops", href: "/workshops" },
];

const isMobileMenuOpen = ref(false);
const openMobileDropdown = ref<string | null>(null);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    if (!isMobileMenuOpen.value) openMobileDropdown.value = null;
};

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
    openMobileDropdown.value = null;
};

const toggleMobileDropdown = (label: string) => {
    openMobileDropdown.value =
        openMobileDropdown.value === label ? null : label;
};
</script>

<style scoped>
/* Layout tokens */
.header {
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
}

.nav {
    max-width: 1120px;
    margin: 0 auto;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
}

/* Brand */
.brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #111;
}

.brand__mark {
    width: 32px;
    height: 32px;
    border: 1px solid #111;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.brand__markInner {
    width: 16px;
    height: 16px;
    border-top: 2px solid #111;
    border-bottom: 2px solid #111;
}

.brand__name {
    font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.02em;
}

/* Right side */
.nav__right {
    display: flex;
    align-items: center;
    gap: 18px;
}

/* Desktop menu */
.menu {
    list-style: none;
    margin: 0;
    padding: 0;
}

.menu--desktop {
    display: none;
    align-items: center;
    gap: 34px;
}

.menu__link,
.dropdown__trigger {
    font-size: 14px;
    color: #222;
    text-decoration: none;
    background: none;
    border: none;
    padding: 0px 0;
    cursor: pointer;
    letter-spacing: 0.01em;
}

.menu__link:hover,
.dropdown__trigger:hover {
    color: #666;
}

.dropdown {
    position: relative;
    display: inline-flex;
    align-items: center;
}

.dropdown__caret {
    font-size: 12px;
    margin-left: 6px;
}

.dropdown__menu {
    position: absolute;
    left: 0;
    top: 100%;
    width: 11.25rem; /* 180px equivalent in rem */
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 0.5rem;
    padding: 0.5rem 0;
    box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.08);
    z-index: 999;

    /* IMPORTANT: hide without removing layout */
    opacity: 0;
    visibility: hidden;
    transform: translateY(0.4rem);
    transition:
        opacity 120ms ease,
        transform 120ms ease,
        visibility 120ms ease;
}

/* Bridge area to prevent “gap” flicker */
.dropdown__menu::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -0.75rem;
    height: 0.75rem;
    /* transparent hover buffer */
}

.dropdown:hover .dropdown__menu,
.dropdown:focus-within .dropdown__menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* Make sure nothing clips the menu */
.header,
.nav,
.nav__right {
    overflow: visible;
}

/* Optional: slightly larger hover target */
.dropdown__trigger {
    padding-block: 0.25rem;
}

.dropdown__item {
    display: block;
    padding: 10px 14px;
    font-size: 14px;
    color: #111;
    text-decoration: none;
}

.dropdown__item:hover {
    background: #fafafa;
}

/* CTA button */
.cta {
    display: none;
    align-items: center;
    gap: 10px;
    border: 1px solid #111;
    padding: 10px 18px;
    text-decoration: none;
    color: #111;
}

.cta__text {
    font-size: 12px;
    letter-spacing: 0.22em;
}

.cta:hover {
    background: #111;
    color: #fff;
}

/* Hamburger */
.hamburger {
    width: 38px;
    height: 38px;
    border: 1px solid #d6d6d6;
    background: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.hamburger__bars {
    display: inline-flex;
    flex-direction: column;
    gap: 5px;
}

.hamburger__bars span {
    display: block;
    width: 18px;
    height: 1px;
    background: #111;
}

.hamburger__close {
    font-size: 20px;
    line-height: 1;
}

/* Mobile panel */
.mobile {
    border-top: 1px solid #e6e6e6;
    background: #fff;
}

.mobile__list {
    max-width: 1120px;
    margin: 0 auto;
    padding: 10px 16px 0;
    list-style: none;
}

.mobile__item {
    border-bottom: 1px solid #f1f1f1;
    padding: 10px 0;
}

.mobile__link {
    display: block;
    text-decoration: none;
    color: #111;
    font-size: 14px;
    padding: 6px 0;
}

.mobileDrop__trigger {
    width: 100%;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 0;
    font-size: 14px;
    color: #111;
    cursor: pointer;
}

.mobileDrop__menu {
    padding: 6px 0 4px 10px;
}

.mobileDrop__item {
    display: block;
    padding: 8px 0;
    text-decoration: none;
    color: #555;
    font-size: 14px;
}

.mobile__cta {
    max-width: 1120px;
    margin: 12px auto 14px;
    padding: 10px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid #111;
    color: #111;
    text-decoration: none;
}

.mobile__cta span:first-child {
    font-size: 12px;
    letter-spacing: 0.22em;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 150ms ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Breakpoints (desktop) */
@media (min-width: 1024px) {
    .menu--desktop {
        display: inline-flex;
    }
    .cta {
        display: inline-flex;
    }
    .hamburger {
        display: none;
    }
    .mobile {
        display: none;
    }
}

/* ✅ Add these styles near the mobile section */
.mobile__top {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0.75rem 1rem 0.25rem;
    display: flex;
    justify-content: flex-end;
}

/* Language toggle placement rules */
.langToggle--desktop {
    display: none;
}

.langToggle--mobile {
    display: inline-flex;
}

/* Desktop breakpoint */
@media (min-width: 1024px) {
    .langToggle--desktop {
        display: inline-flex;
    }
    .langToggle--mobile {
        display: none;
    }
}

/* ✅ Ensure dropdown remains clickable (you already added most of this) */
.dropdown:hover .dropdown__menu,
.dropdown:focus-within .dropdown__menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* Bridge area to prevent gap flicker */
.dropdown__menu::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -0.75rem;
    height: 0.75rem;
}
</style>
