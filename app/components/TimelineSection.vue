<script setup lang="ts">
import { timeline } from "~/data/timeline";

const { t, locale } = useLocale();
</script>

<template>
  <section class="py-16 border-t border-gray-200 dark:border-gray-800">
    <h2 class="text-sm font-mono font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
      {{ locale === "en" ? "Experience" : "Experiência" }}
    </h2>
    <div class="relative pl-6 border-l-2 border-gray-200 dark:border-gray-800 space-y-10">
      <div v-for="entry in timeline" :key="entry.period" class="relative">
        <div class="absolute -left-[calc(0.375rem+1.5rem)] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-gray-500 border-2 border-white dark:border-gray-950" />
        <span class="inline-block text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded mb-2">
          {{ entry.period }}
        </span>
        <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
          {{ t(entry.role) }}
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ t(entry.description) }}
        </p>
      </div>
    </div>
  </section>
</template>
