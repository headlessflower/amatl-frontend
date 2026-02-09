<script setup lang="ts">
const { t } = useI18n();

type Application = {
    id: number;
    image: string;
    titleKey: string;
    subtitleKey: string;
    descriptionKey: string;
    altKey: string;
};

const applications: Application[] = [
    {
        id: 1,
        titleKey: "applications.items.wedding.title",
        subtitleKey: "applications.items.wedding.subtitle",
        descriptionKey: "applications.items.wedding.description",
        image: "/stationery/amatl-invites-1.png",
        altKey: "applications.items.wedding.alt",
    },
    {
        id: 2,
        titleKey: "applications.items.events.title",
        subtitleKey: "applications.items.events.subtitle",
        descriptionKey: "applications.items.events.description",
        image: "/hands-sheet.png",
        altKey: "applications.items.events.alt",
    },
    {
        id: 3,
        titleKey: "applications.items.printmaking.title",
        subtitleKey: "applications.items.printmaking.subtitle",
        descriptionKey: "applications.items.printmaking.description",
        image: "/gallery-print/amatl-prints.png",
        altKey: "applications.items.printmaking.alt",
    },
    {
        id: 4,
        titleKey: "applications.items.stationery.title",
        subtitleKey: "applications.items.stationery.subtitle",
        descriptionKey: "applications.items.stationery.description",
        image: "/stationery/amatl-startionary-1.png",
        altKey: "applications.items.stationery.alt",
    },
];
</script>

<template>
    <section class="applications">
        <div class="applications__inner">
            <!-- Header row -->
            <div class="applications__header">
                <div>
                    <p class="applications__index">
                        {{ t("applications.index") }}
                    </p>

                    <h2 class="applications__title">
                        {{ t("applications.title") }} <br />
                        <span>{{ t("applications.titleEmphasis") }}</span>
                    </h2>

                    <p class="applications__intro">
                        {{ t("applications.intro") }}
                    </p>

                    <p class="applications__languages">
                        <strong>{{ t("applications.languagesStrong") }}</strong>
                        {{ t("applications.languages") }}
                    </p>
                </div>

                <div class="applications__label">
                    <span>{{ t("applications.label") }}</span>
                </div>
            </div>

            <!-- Grid -->
            <div class="applications__grid">
                <article
                    v-for="item in applications"
                    :key="item.id"
                    class="application"
                >
                    <div class="application__media">
                        <img :src="item.image" :alt="t(item.altKey)" />
                    </div>

                    <h3 class="application__title">
                        {{ t(item.titleKey) }}
                    </h3>

                    <p class="application__subtitle">
                        {{ t(item.subtitleKey) }}
                    </p>

                    <p class="application__description">
                        {{ t(item.descriptionKey) }}
                    </p>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.applications {
    background: #ffffff;
    padding-block: clamp(4rem, 8vw, 6.5rem);
}

.applications__inner {
    max-width: 70rem;
    margin-inline: auto;
    padding-inline: clamp(1rem, 3vw, 1.5rem);
}

/* Header */
.applications__header {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamp(1.5rem, 4vw, 3rem);
    margin-bottom: clamp(2.5rem, 6vw, 4rem);
}

.applications__index {
    margin: 0 0 0.5rem;
    font-size: 0.75rem;
    font-style: italic;
    color: #6b7280;
}

.applications__title {
    margin: 0;
    font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
    font-weight: 400;
    font-size: clamp(2.25rem, 5vw, 3.25rem);
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: #0f172a;
}

.applications__title span {
    font-style: italic;
}

.applications__intro {
    margin-top: 1.25rem;
    max-width: 34rem;
    font-size: 0.95rem;
    line-height: 1.7;
    color: #4b5563;
}

.applications__languages {
    margin: 1rem 0 0;
    font-size: 0.875rem;
    line-height: 1.6;
    color: #374151;
}

.applications__label {
    display: none;
    font-family: ui-serif, Georgia, serif;
    font-style: italic;
    font-size: clamp(2.5rem, 6vw, 4rem);
    color: #0f172a;
}

/* Grid */
.applications__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamp(2.5rem, 6vw, 4rem);
}

.application {
    display: flex;
    flex-direction: column;
}

.application__media {
    margin-bottom: 1rem;
    background: #f1f5f9;
    overflow: hidden;
}

.application__media img {
    display: block;
    width: 100%;
    height: clamp(14rem, 40vw, 18rem);
    object-fit: cover;
}

.application__title {
    margin: 0.75rem 0 0;
    font-family: ui-serif, Georgia, serif;
    font-size: 1.25rem;
    font-weight: 400;
    color: #0f172a;
}

.application__subtitle {
    margin: 0.15rem 0 0.75rem;
    font-size: 0.75rem;
    font-style: italic;
    color: #6b7280;
}

.application__description {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.6;
    color: #374151;
}

/* Responsive */
@media (min-width: 48rem) {
    .applications__header {
        grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
        align-items: start;
    }

    .applications__label {
        display: block;
        text-align: right;
    }

    .applications__grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: 64rem) {
    .applications__grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}
</style>
