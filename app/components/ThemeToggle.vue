<script setup lang="ts">
const isDark = ref(false);

onMounted(() => {
  isDark.value =
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  applyTheme();
});

function applyTheme() {
  document.documentElement.classList.toggle("dark", isDark.value);
}

function toggle() {
  isDark.value = !isDark.value;
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
  applyTheme();
}
</script>

<template>
  <button
    @click="toggle"
    class="group relative p-2 text-ink-500 dark:text-ink-400 hover:text-accent transition-colors duration-300"
    aria-label="Toggle dark mode"
  >
    <span class="absolute inset-0 border border-ink-300/50 dark:border-ink-700/50 rounded group-hover:border-accent/40 transition-colors duration-300" />
    <svg
      v-if="isDark"
      xmlns="http://www.w3.org/2000/svg"
      class="w-3.5 h-3.5 relative z-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 7.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="w-3.5 h-3.5 relative z-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.005 9.005 0 0012 21a9.005 9.005 0 008.354-5.646z"
      />
    </svg>
  </button>
</template>
