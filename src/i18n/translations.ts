export type Language = "en" | "hi" | "pa" | "bn";

export type ViewId = "landing" | "haldi" | "wedding" | "ceremony";

export type TranslationKey =
  | "pageTitle"
  | "pageDescription"
  | "toolbarTitle"
  | "landingKicker"
  | "landingLead"
  | "landingDate"
  | "landingDates"
  | "landingHeroAlt"
  | "navHaldi"
  | "navHaldiDesc"
  | "navHaldiBadge"
  | "navWedding"
  | "navWeddingDesc"
  | "navWeddingBadge"
  | "navCeremony"
  | "navCeremonyDesc"
  | "navCeremonyBadge"
  | "haldiTitle"
  | "haldiKicker"
  | "haldiLead"
  | "haldiHeroAlt"
  | "weddingTitle"
  | "weddingKicker"
  | "weddingLead"
  | "weddingHeroAlt"
  | "ceremonyTitle"
  | "ceremonyKicker"
  | "ceremonyLead"
  | "ceremonyIntro"
  | "galleryHeading"
  | "gallerySub"
  | "galleryEmpty"
  | "galleryLoadingMore"
  | "galleryProgress"
  | "galleryProgressComplete"
  | "openPhoto"
  | "photoAlt"
  | "lightboxLabel"
  | "lightboxLoading"
  | "lightboxLoadingIndeterminate"
  | "lightboxLoadError"
  | "downloadPhoto"
  | "imageDownloaded"
  | "close"
  | "previousPhoto"
  | "nextPhoto"
  | "galleryPhoto"
  | "backHome"
  | "viewCeremony"
  | "theme"
  | "language"
  | "light"
  | "dark"
  | "english"
  | "hindi"
  | "punjabi"
  | "bengali"
  | "switchToLight"
  | "switchToDark"
  | "footerDesigned"
  | "footerCopyright"
  | "footerBuilt"
  | "footerYoutubeAria"
  | "footerInstagramAria"
  | "footerGithubAria";

export type Translations = Record<TranslationKey, string>;

const en: Translations = {
  pageTitle: "Vibha & Kaustubh — Wedding Celebrations",
  pageDescription:
    "Relive the Haldi, Mehndi, and Wedding celebrations of Vibha & Kaustubh — February 26, 2023.",
  toolbarTitle: "Vibha & Kaustubh",
  landingKicker: "Together with their families",
  landingLead:
    "Explore the Haldi & Mehndi, wedding photos, and ceremony proceedings.",
  landingDate: "February 26, 2023",
  landingDates: "Feb 24 · 25 · 26, 2023",
  landingHeroAlt:
    "Vibha & Kaustubh wedding ceremony invitation with peacock motifs",
  navHaldi: "Haldi",
  navHaldiDesc: "Sunflowers, turmeric, and pre-wedding joy",
  navHaldiBadge: "225 photos",
  navWedding: "Wedding",
  navWeddingDesc: "Our wedding day memories",
  navWeddingBadge: "182 photos",
  navCeremony: "Ceremony",
  navCeremonyDesc: "How the Hindu wedding unfolded",
  navCeremonyBadge: "21 steps",
  haldiTitle: "Haldi & Mehndi",
  haldiKicker: "Welcome to the celebration",
  haldiLead:
    "Relive the vibrant Haldi and Mehndi celebrations of Vibha & Kaustubh.",
  haldiHeroAlt: "Welcome to the Haldi & Mehndi of Vibha & Kaus",
  weddingTitle: "Wedding",
  weddingKicker: "Welcome to our wedding",
  weddingLead:
    "Browse photos from our wedding day — February 26, 2023 in Ottawa.",
  weddingHeroAlt: "Welcome to the wedding of Vibha & Kaustubh",
  ceremonyTitle: "Ceremony Proceedings",
  ceremonyKicker: "Sacred traditions",
  ceremonyLead:
    "A step-by-step guide to the Hindu wedding ceremony as it unfolded for Vibha & Kaustubh.",
  ceremonyIntro:
    "The ceremony follows sacred Vedic traditions performed in Sanskrit at the Mandap.",
  galleryHeading: "Photo gallery",
  gallerySub: "Tap any photo to view it full size.",
  galleryEmpty: "No photos yet. Run npm run dev to sync albums from Desktop.",
  galleryLoadingMore: "Loading more photos…",
  galleryProgress: "{{visible}} of {{total}} photos — scroll down for more",
  galleryProgressComplete: "All {{total}} photos loaded",
  openPhoto: "Open photo {{n}}",
  photoAlt: "Celebration photo {{n}}",
  lightboxLabel: "Photo viewer",
  lightboxLoading: "Loading {{percent}}%",
  lightboxLoadingIndeterminate: "Loading…",
  lightboxLoadError: "Could not load photo",
  downloadPhoto: "Download photo",
  imageDownloaded: "Image downloaded",
  close: "Close",
  previousPhoto: "Previous photo",
  nextPhoto: "Next photo",
  galleryPhoto: "Photo {{n}} of {{total}}",
  backHome: "Back to home",
  viewCeremony: "View ceremony proceedings",
  theme: "Theme",
  language: "Language",
  light: "Light",
  dark: "Dark",
  english: "English",
  hindi: "Hindi",
  punjabi: "Punjabi",
  bengali: "Bengali",
  switchToLight: "Switch to light mode",
  switchToDark: "Switch to dark mode",
  footerDesigned: "Designed and developed by Kaus",
  footerCopyright: "Copyright © {{year}} KD",
  footerBuilt: "Built with React, TypeScript and Vite",
  footerYoutubeAria: "YouTube — Kaus Diaries",
  footerInstagramAria: "Instagram",
  footerGithubAria: "GitHub — wedding-celebrations",
};

const hi: Translations = {
  ...en,
  pageTitle: "विभा और Kaustubh — विवाह उत्सव",
  pageDescription:
    "विभा और Kaustubh के हल्दी, मेंहदी और विवाह उत्सव की यादें — 26 फरवरी, 2023।",
  toolbarTitle: "विभा और Kaustubh",
  landingKicker: "अपने परिवारों के साथ",
  landingLead:
    "हल्दी और मेंहदी, विवाह की तस्वीरें और समारोह देखें।",
  landingDate: "26 फरवरी, 2023",
  landingDates: "24 · 25 · 26 फरवरी, 2023",
  navHaldi: "हल्दी",
  navHaldiDesc: "सूरजमुखी, हल्दी और पूर्व-विवाह उत्सव",
  navHaldiBadge: "225 फोटो",
  navWedding: "विवाह",
  navWeddingDesc: "हमारे विवाह दिवस की यादें",
  navWeddingBadge: "182 फोटो",
  navCeremony: "समारोह",
  navCeremonyDesc: "हिंदू विवाह कैसे संपन्न हुआ",
  navCeremonyBadge: "21 चरण",
  haldiTitle: "हल्दी और मेंहदी",
  haldiKicker: "उत्सव में आपका स्वागत है",
  haldiLead: "विभा और Kaustubh की जीवंत हल्दी और मेंहदी समारोह की यादें।",
  weddingTitle: "विवाह",
  weddingKicker: "हमारे विवाह में आपका स्वागत है",
  weddingLead: "26 फरवरी, 2023 को Ottawa में हुए हमारे विवाह की तस्वीरें।",
  ceremonyTitle: "समारोह विवरण",
  ceremonyKicker: "पवित्र परंपराएँ",
  ceremonyLead:
    "विभा और Kaustubh के हिंदू विवाह समारोह का चरण-दर-चरण विवरण।",
  ceremonyIntro:
    "समारोह पवित्र वैदिक परंपराओं के अनुसार मंडप में संस्कृत में संपन्न हुआ।",
  galleryHeading: "फोटो गैलरी",
  gallerySub: "पूर्ण आकार में देखने के लिए किसी भी फोटो पर टैप करें।",
  galleryEmpty: "अभी कोई फोटो नहीं है।",
  galleryLoadingMore: "और फोटो लोड हो रही हैं…",
  galleryProgress:
    "{{visible}} / {{total}} फोटो — और देखने के लिए नीचे स्क्रॉल करें",
  galleryProgressComplete: "सभी {{total}} फोटो लोड हो गईं",
  photoAlt: "उत्सव की फोटो {{n}}",
  galleryPhoto: "फोटो {{n}} / {{total}}",
  backHome: "होम पर वापस",
  viewCeremony: "समारोह विवरण देखें",
  footerDesigned: "Kaus द्वारा डिज़ाइन और विकसित",
};

const pa: Translations = {
  ...en,
  pageTitle: "ਵਿਭਾ ਅਤੇ Kaustubh — ਵਿਆਹ ਦੇ ਜਸ਼ਨ",
  pageDescription:
    "ਵਿਭਾ ਅਤੇ Kaustubh ਦੇ ਹਲਦੀ, Mehndi ਅਤੇ ਵਿਆਹ ਦੇ ਜਸ਼ਨ — 26 ਫਰਵਰੀ, 2023।",
  toolbarTitle: "ਵਿਭਾ ਅਤੇ Kaustubh",
  landingKicker: "ਆਪਣੇ ਪਰਿਵਾਰਾਂ ਨਾਲ",
  landingLead:
    "ਹਲਦੀ, ਵਿਆਹ ਦੀਆਂ ਤਸਵੀਰਾਂ ਅਤੇ ਰਸਮਾਂ ਦੇਖੋ।",
  landingDate: "26 ਫਰਵਰੀ, 2023",
  landingDates: "24 · 25 · 26 ਫਰਵਰੀ, 2023",
  navHaldi: "ਹਲਦੀ",
  navHaldiDesc: "ਸੂਰਜਮੁਖੀ, ਹਲਦੀ ਅਤੇ ਪੂਰਵ-ਵਿਆਹ ਖੁਸ਼ੀ",
  navHaldiBadge: "225 ਫੋਟੋ",
  navWedding: "ਵਿਆਹ",
  navWeddingDesc: "ਸਾਡੇ ਵਿਆਹ ਦਿਨ ਦੀਆਂ ਯਾਦਾਂ",
  navWeddingBadge: "182 ਫੋਟੋ",
  navCeremony: "ਰਸਮ",
  navCeremonyDesc: "ਹਿੰਦੂ ਵਿਆਹ ਕਿਵੇਂ ਹੋਇਆ",
  navCeremonyBadge: "21 kadam",
  haldiTitle: "ਹਲਦੀ ਅਤੇ Mehndi",
  haldiKicker: "ਜਸ਼ਨ ਵਿੱਚ ਸਵਾਗਤ",
  haldiLead: "ਵਿਭਾ ਅਤੇ Kaustubh ਦੀ ਜੀਵੰਤ ਹਲਦੀ ਅਤੇ Mehndi ਰਸਮ।",
  weddingTitle: "ਵਿਆਹ",
  weddingKicker: "ਸਾਡੇ ਵਿਆਹ ਵਿੱਚ ਸਵਾਗਤ",
  weddingLead: "26 ਫਰਵਰੀ, 2023 ਨੂੰ Ottawa ਵਿੱਚ ਸਾਡੇ ਵਿਆਹ ਦੀਆਂ ਤਸਵੀਰਾਂ।",
  ceremonyTitle: "ਰਸਮ ਦਾ ਵੇਰਵਾ",
  ceremonyKicker: "ਪਵਿੱਤਰ ਰਿਵਾਜ",
  ceremonyLead: "ਵਿਭਾ ਅਤੇ Kaustubh ਦੇ ਹਿੰਦੂ ਵਿਆਹ ਦੀ ਚरणਬੱਧ ਜਾਣਕਾਰੀ।",
  ceremonyIntro: "ਰਸਮ ਪਵਿੱਤਰ ਵੈਦਿਕ parampara ਅਨੁਸਾਰ ਮੰਡਪ ਵਿੱਚ ਹੋਈ।",
  galleryHeading: "ਫੋਟੋ ਗੈਲਰੀ",
  gallerySub: "ਪੂਰਾ ਆਕਾਰ ਦੇਖਣ ਲਈ ਕਿਸੇ ਵੀ ਫੋਟੋ 'ਤੇ ਟੈਪ ਕਰੋ।",
  galleryEmpty: "ਹਾਲੇ ਕੋਈ ਫੋਟੋ ਨਹੀਂ।",
  backHome: "ਘਰ 'ਤੇ ਵਾਪਸ",
  viewCeremony: "ਰਸਮ ਦਾ ਵੇਰਵਾ ਦੇਖੋ",
  footerDesigned: "Kaus ਵੱਲੋਂ ਡਿਜ਼ਾਈਨ ਅਤੇ ਵਿਕਾਸ",
};

const bn: Translations = {
  ...en,
  pageTitle: "বিবা ও Kaustubh — বিবাহ উৎসব",
  pageDescription:
    "বিবা ও Kaustubh-এর হলুদ, mehndi ও বিবাহ উৎসবের স্মৃতি — ২৬ ফেব্রুয়ারি, ২০২৩।",
  toolbarTitle: "বিবা ও Kaustubh",
  landingKicker: "তাদের পরিবারের সাথে",
  landingLead:
    "হলুদ, বিবাহের ছবি ও অনুষ্ঠানের বিবরণ দেখুন।",
  landingDate: "২৬ ফেব্রুয়ারি, ২০২৩",
  landingDates: "২৪ · ২৫ · ২৬ ফেব্রুয়ারি, ২০২৩",
  navHaldi: "হলুদ",
  navHaldiDesc: "সূর্যমুখী, হলুদ ও প্রাক-বিবাহ আনন্দ",
  navHaldiBadge: "২২৫ ছবি",
  navWedding: "বিবাহ",
  navWeddingDesc: "আমাদের বিবাহ দিবসের স্মৃতি",
  navWeddingBadge: "১৮২ ছবি",
  navCeremony: "অনুষ্ঠান",
  navCeremonyDesc: "হিন্দু বিবাহ কীভাবে সম্পন্ন হয়েছিল",
  navCeremonyBadge: "২১ ধাপ",
  haldiTitle: "হলুদ ও Mehndi",
  haldiKicker: "উৎসবে স্বাগতম",
  haldiLead: "বিবা ও Kaustubh-এর প্রাণবন্ত হলুদ ও mehndi অনুষ্ঠান।",
  weddingTitle: "বিবাহ",
  weddingKicker: "আমাদের বিবাহে স্বাগতম",
  weddingLead: "২৬ ফেব্রুয়ারি, ২০২৩, Ottawa-তে আমাদের বিবাহের ছবি।",
  ceremonyTitle: "অনুষ্ঠানের বিবরণ",
  ceremonyKicker: "পবিত্র রীতি",
  ceremonyLead: "বিবা ও Kaustubh-এর হিন্দু বিবাহের ধাপে ধাপে বিবরণ।",
  ceremonyIntro:
    "অনুষ্ঠান পবিত্র বৈদিক রীতি অনুযায়ী মণ্ডপে সম্পন্ন হয়।",
  galleryHeading: "ছবির গ্যালারি",
  gallerySub: "পূর্ণ আকারে দেখতে যেকোনো ছবিতে ট্যাপ করুন।",
  galleryEmpty: "এখনও কোনো ছবি নেই।",
  backHome: "হোমে ফিরুন",
  viewCeremony: "অনুষ্ঠানের বিবরণ দেখুন",
  footerDesigned: "Kaus-এর ডিজাইন ও বিকাশ",
};

export const translations: Record<Language, Translations> = { en, hi, pa, bn };

export const languageOptions = [
  { value: "en" as const, labelKey: "english" as const },
  { value: "hi" as const, labelKey: "hindi" as const },
  { value: "pa" as const, labelKey: "punjabi" as const },
  { value: "bn" as const, labelKey: "bengali" as const },
];

export function format(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) =>
    String(vars[key] ?? ""),
  );
}

export function viewTitleKey(view: ViewId): TranslationKey {
  switch (view) {
    case "landing":
      return "toolbarTitle";
    case "haldi":
      return "haldiTitle";
    case "wedding":
      return "weddingTitle";
    case "ceremony":
      return "ceremonyTitle";
  }
}
