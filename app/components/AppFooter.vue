<script setup lang="ts">
const year = new Date().getFullYear();

type FooterLink = {
    label: string;
    href: string;
};

const primaryLinks: FooterLink[] = [
    { label: "FAQ", href: "/faq" },
    { label: "Samples", href: "/samples" },
    { label: "Shipping Information", href: "/shipping" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Contact", href: "/contact" },
];

const secondaryLinks: FooterLink[] = [
    { label: "Wholesale Inquiry", href: "/wholesale" },
];
</script>

<template>
    <footer class="footer">
        <div class="footer__inner">
            <div class="footer__top">
                <!-- Left: wordmark -->
                <NuxtLink to="/" class="footer__brand" aria-label="Home">
                    Amatl
                </NuxtLink>

                <!-- Right: links -->
                <nav class="footer__nav" aria-label="Footer navigation">
                    <ul class="footer__links" role="list">
                        <li
                            v-for="l in primaryLinks"
                            :key="l.href"
                            class="footer__item"
                        >
                            <NuxtLink :to="l.href" class="footer__link">
                                {{ l.label }}
                            </NuxtLink>
                        </li>
                    </ul>

                    <ul
                        class="footer__links footer__links--secondary"
                        role="list"
                    >
                        <li
                            v-for="l in secondaryLinks"
                            :key="l.href"
                            class="footer__item"
                        >
                            <NuxtLink :to="l.href" class="footer__link">
                                {{ l.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <!-- Bottom-left copyright -->
            <div class="footer__bottom">
                <p class="footer__copyright">© {{ year }} Amatl</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background: #ffffff;
    padding-block: clamp(3rem, 10vw, 6.5rem);
}

.footer__inner {
    max-width: 100%;
    padding-inline: clamp(1rem, 3vw, 2.5rem);
}

/* Top row: brand left, nav right */
.footer__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: clamp(2rem, 6vw, 4rem);
}

/* Brand (left) */
.footer__brand {
    font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
    font-weight: 400;
    font-size: clamp(1.9rem, 2.6vw, 2.6rem);
    letter-spacing: -0.02em;
    color: #111827;
    text-decoration: none;
    line-height: 1.1;
}

.footer__brand:hover {
    opacity: 0.85;
}

/* Links (right) */
.footer__nav {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: flex-end;
    text-align: right;
}

.footer__links {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 1.25rem;
    margin: 0;
    padding: 0;
    list-style: none;
}

.footer__links--secondary {
    justify-content: flex-start; /* appears like a single line beneath */
    width: 100%;
}

.footer__item {
    margin: 0;
    padding: 0;
}

.footer__link {
    font-size: 0.95rem;
    color: rgba(17, 24, 39, 0.8);
    text-decoration: none;
    white-space: nowrap;
}

.footer__link:hover {
    color: rgba(17, 24, 39, 1);
    text-decoration: underline;
    text-underline-offset: 0.25em;
}

/* Bottom */
.footer__bottom {
    margin-top: clamp(5rem, 18vw, 10rem);
}

.footer__copyright {
    margin: 0;
    font-size: 1rem;
    color: rgba(17, 24, 39, 0.7);
}

/* Responsive: stack on small screens */
@media (max-width: 48rem) {
    .footer__top {
        flex-direction: column;
        align-items: flex-start;
    }

    .footer__nav {
        align-items: flex-start;
        text-align: left;
    }

    .footer__links {
        justify-content: flex-start;
    }

    .footer__links--secondary {
        justify-content: flex-start;
    }
}
</style>
