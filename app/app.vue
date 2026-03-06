<script setup lang="ts">
useHead({
  titleTemplate: "Fábio Assunção — Software Engineer",
  htmlAttrs: { lang: "en" },
  meta: [
    {
      name: "description",
      content:
        "Software engineer with 15+ years of experience specializing in backend, distributed systems, and cloud computing.",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:title", content: "Fábio Assunção — Software Engineer" },
    {
      property: "og:description",
      content:
        "Software engineer with 15+ years of experience specializing in backend, distributed systems, and cloud computing.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<template>
  <div class="min-h-screen">
    <div class="fixed top-4 right-4 z-50 flex items-center gap-2">
      <LocaleToggle />
      <ThemeToggle />
    </div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
