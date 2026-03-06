<script setup lang="ts">
const { locale } = useLocale();

useHead({
  titleTemplate: "Fábio Assunção — Software Engineer",
  htmlAttrs: computed(() => ({ lang: locale.value })),
  meta: [
    { name: "author", content: "Fábio Assunção" },
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
    { property: "og:url", content: "https://fabioassuncao.com" },
    { property: "og:locale", content: "en_US" },
    { property: "og:locale:alternate", content: "pt_BR" },
    { property: "og:site_name", content: "Fábio Assunção" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: "@fabioassuncaohq" },
    { name: "twitter:creator", content: "@fabioassuncaohq" },
    { name: "theme-color", content: "#0f0d0b" },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "canonical", href: "https://fabioassuncao.com" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Fábio Assunção",
        url: "https://fabioassuncao.com",
        jobTitle: "Software Engineer",
        description:
          "Software engineer with 15+ years of experience specializing in backend, distributed systems, and cloud computing.",
        knowsAbout: [
          "Backend Development",
          "Cloud Architecture",
          "Distributed Systems",
          "PHP",
          "Go",
          "Node.js",
          "TypeScript",
          "Python",
          "Rust",
          "AWS",
          "GCP",
          "Cloudflare",
          "Docker",
          "Kubernetes",
        ],
        sameAs: [
          "https://github.com/fabioassuncao",
          "https://linkedin.com/in/fabioassuncao",
          "https://x.com/fabioassuncaohq",
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "BR",
        },
      }),
    },
  ],
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
