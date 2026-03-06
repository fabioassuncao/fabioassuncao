export interface Bilingual<T = string> {
  pt: T;
  en: T;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  titles: Bilingual<string[]>;
  location: Bilingual;
  intro: Bilingual;
  about: Bilingual;
  socials: SocialLink[];
}

export interface TimelineEntry {
  period: string;
  role: Bilingual;
  description: Bilingual;
}

export interface SkillGroup {
  name: Bilingual;
  items: string[];
}
