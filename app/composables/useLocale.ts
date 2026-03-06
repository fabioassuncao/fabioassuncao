import type { Bilingual } from "~/types";

type Locale = "pt" | "en";

const locale = ref<Locale>("en");

export function useLocale() {
  function t<T>(bilingual: Bilingual<T>): T {
    return bilingual[locale.value];
  }

  function toggleLocale() {
    locale.value = locale.value === "en" ? "pt" : "en";
  }

  return {
    locale: readonly(locale),
    t,
    toggleLocale,
  };
}
