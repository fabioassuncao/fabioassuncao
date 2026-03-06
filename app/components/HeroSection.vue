<script setup lang="ts">
import { profile } from "~/data/profile";

const { t, locale } = useLocale();

const titleIndex = ref(0);

const titles = computed(() => t(profile.titles));
const currentTitle = computed(() => titles.value[titleIndex.value]);

let interval: ReturnType<typeof setInterval>;

onMounted(() => {
  interval = setInterval(() => {
    titleIndex.value = (titleIndex.value + 1) % titles.value.length;
  }, 3000);
});

onUnmounted(() => clearInterval(interval));
</script>

<template>
  <section class="pt-24 pb-16">
    <p class="text-sm font-mono text-gray-500 dark:text-gray-400 mb-3">
      {{ locale === "en" ? "Hi, I'm" : "Olá, eu sou" }}
    </p>
    <h1 class="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
      {{ profile.name }}
    </h1>
    <p
      class="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-mono mb-6 h-8"
    >
      <Transition name="fade" mode="out-in">
        <span :key="currentTitle">{{ currentTitle }}</span>
      </Transition>
    </p>
    <p
      class="text-sm text-gray-500 dark:text-gray-400 mb-8 flex items-center gap-1.5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      {{ t(profile.location) }}
    </p>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mb-10">
      {{ t(profile.intro) }}
    </p>
    <div class="flex gap-3">
      <a
        v-for="social in profile.socials.slice(0, 2)"
        :key="social.name"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <!-- GitHub icon -->
        <svg
          v-if="social.icon === 'github'"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
          />
        </svg>
        <!-- LinkedIn icon -->
        <svg
          v-if="social.icon === 'linkedin'"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
        {{ social.name }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
