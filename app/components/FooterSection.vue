<script setup lang="ts">
import { profile } from "~/data/profile";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="py-12 border-t border-gray-200 dark:border-gray-800">
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex gap-4">
        <a
          v-for="social in profile.socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          {{ social.name }}
        </a>
      </div>
      <p class="text-sm text-gray-400 dark:text-gray-500">
        &copy; {{ year }} {{ profile.name }}
      </p>
    </div>
  </footer>
</template>
