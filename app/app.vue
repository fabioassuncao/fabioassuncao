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
    { name: "theme-color", content: "#0f0d0b" },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<template>
  <div class="noise min-h-screen">
    <nav
      class="fixed top-0 right-0 z-50 p-5 flex items-center gap-3"
    >
      <LocaleToggle />
      <ThemeToggle />
    </nav>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
