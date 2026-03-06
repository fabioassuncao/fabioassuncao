<script setup lang="ts">
const { locale, toggleLocale } = useLocale();
</script>

<template>
  <button
    @click="toggleLocale()"
    class="px-2.5 py-1 text-xs font-mono font-medium rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
    :aria-label="`Switch to ${locale === 'en' ? 'Portuguese' : 'English'}`"
  >
    {{ locale === "en" ? "PT" : "EN" }}
  </button>
</template>
