<script setup lang="ts">
import { timeline } from "~/data/timeline";

const { t, locale } = useLocale();
</script>

<template>
  <section class="py-20 section-rule">
    <h2 class="font-mono text-xs tracking-[0.2em] uppercase text-ink-400 dark:text-ink-500 mb-10">
      <span class="text-accent mr-2">//</span>{{ locale === "en" ? "Experience" : "Experiência" }}
    </h2>
    <div class="relative ml-3">
      <!-- Vertical line -->
      <div class="absolute left-0 top-2 bottom-2 w-px bg-ink-200 dark:bg-ink-800" />

      <div
        v-for="(entry, i) in timeline"
        :key="entry.period"
        class="relative pl-8 pb-10 last:pb-0 group"
      >
        <!-- Dot -->
        <div class="absolute left-0 top-2 w-[7px] h-[7px] -translate-x-[3px] rounded-full border-2 border-ink-300 dark:border-ink-600 bg-ink-50 dark:bg-ink-950 group-hover:border-accent transition-colors duration-300" />

        <span class="inline-block font-mono text-[11px] tracking-wider text-ink-400 dark:text-ink-500 mb-2">
          {{ entry.period }}
        </span>
        <h3 class="font-display text-base font-600 text-ink-900 dark:text-ink-100 mb-1.5 group-hover:text-accent transition-colors duration-300">
          {{ t(entry.role) }}
        </h3>
        <p class="text-sm text-ink-500 dark:text-ink-400 leading-relaxed">
          {{ t(entry.description) }}
        </p>
      </div>
    </div>
  </section>
</template>
