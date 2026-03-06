import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/components/**/*.{vue,ts}",
    "./app/pages/**/*.vue",
    "./app/app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
} satisfies Config;
