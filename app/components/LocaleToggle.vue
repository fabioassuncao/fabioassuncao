<script setup lang="ts">
const { locale, toggleLocale } = useLocale();
</script>

<template>
  <button
    @click="toggleLocale()"
    class="group relative px-3 py-1.5 text-xs font-mono font-medium tracking-wider text-ink-500 dark:text-ink-400 hover:text-accent transition-colors duration-300"
    :aria-label="`Switch to ${locale === 'en' ? 'Portuguese' : 'English'}`"
  >
    <span class="relative z-10">{{ locale === "en" ? "PT" : "EN" }}</span>
    <span class="absolute inset-0 border border-ink-300/50 dark:border-ink-700/50 rounded group-hover:border-accent/40 transition-colors duration-300" />
  </button>
</template>
