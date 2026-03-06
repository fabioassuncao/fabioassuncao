<script setup lang="ts">
import { skills } from "~/data/skills";

const { t, locale } = useLocale();
</script>

<template>
  <section class="py-20 section-rule">
    <h2 class="font-mono text-xs tracking-[0.2em] uppercase text-ink-400 dark:text-ink-500 mb-10">
      <span class="text-accent mr-2">//</span>{{ locale === "en" ? "Skills" : "Habilidades" }}
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
      <div v-for="group in skills" :key="t(group.name)">
        <h3 class="font-display text-sm font-600 text-ink-800 dark:text-ink-200 mb-4 tracking-wide">
          {{ t(group.name) }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="item in group.items"
            :key="item"
            class="px-3 py-1.5 text-xs font-mono text-ink-600 dark:text-ink-400 border border-ink-200 dark:border-ink-800 rounded hover:border-accent/50 hover:text-accent transition-all duration-300 cursor-default"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
