<script setup lang="ts">
import { buildRouteBreadcrumbs } from "~/utils/seo/buildRouteBreadcrumbs";
import { buildBreadcrumbListJsonLd } from "~/utils/seo/breadcrumbs";
import { asJsonLdScript } from "~/utils/seo/jsonld";

const route = useRoute();
const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl as string;

const labelMap = {
    shop: "Shop",
    wedding: "Wedding Suites",
    workshops: "Workshops",
};

const crumbs = buildRouteBreadcrumbs(route.path, siteUrl, labelMap);

useHead({
    script: [asJsonLdScript(buildBreadcrumbListJsonLd(crumbs))],
});
</script>
<template>
    <div></div>
</template>
