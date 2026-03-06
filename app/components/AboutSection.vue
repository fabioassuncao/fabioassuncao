<script setup lang="ts">
import { profile } from "~/data/profile";

const { t, locale } = useLocale();
</script>

<template>
  <section class="py-16 border-t border-gray-200 dark:border-gray-800">
    <h2 class="text-sm font-mono font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
      {{ locale === "en" ? "About" : "Sobre" }}
    </h2>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      {{ t(profile.about) }}
    </p>
  </section>
</template>
