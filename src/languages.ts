export interface Language {
  language_id: number;
  lang: string;
  country_code: string;
}

export const LANGUAGES: Language[] = [
  {
    language_id: 1,
    lang: "ja",
    country_code: "+81",
  },
  {
    language_id: 2,
    lang: "zh-CN",
    country_code: "+86",
  },
  {
    language_id: 3,
    lang: "en",
    country_code: "+1",
  },
  {
    language_id: 4,
    lang: "ko",
    country_code: "+82",
  },
];
