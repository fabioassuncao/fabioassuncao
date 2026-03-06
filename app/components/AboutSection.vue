<script setup lang="ts">
import { profile } from "~/data/profile";

const { t, locale } = useLocale();
</script>

<template>
  <section class="py-20 section-rule">
    <h2 class="font-mono text-xs tracking-[0.2em] uppercase text-ink-400 dark:text-ink-500 mb-8">
      <span class="text-accent mr-2">//</span>{{ locale === "en" ? "About" : "Sobre" }}
    </h2>
    <p class="text-ink-600 dark:text-ink-300 leading-[1.8] text-[15px] max-w-2xl">
      {{ t(profile.about) }}
    </p>
  </section>
</template>
