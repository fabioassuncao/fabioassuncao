<script setup lang="ts">
import { skills } from "~/data/skills";

const { t, locale } = useLocale();
</script>

<template>
  <section class="py-16 border-t border-gray-200 dark:border-gray-800">
    <h2 class="text-sm font-mono font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
      {{ locale === "en" ? "Skills" : "Habilidades" }}
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div v-for="group in skills" :key="t(group.name)">
        <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {{ t(group.name) }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="item in group.items"
            :key="item"
            class="px-2.5 py-1 text-xs font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-md"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
