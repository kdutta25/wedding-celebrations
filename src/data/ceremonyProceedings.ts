import type { Language } from "../i18n/translations";

export type CeremonyStep = {
  id: string;
  title: Partial<Record<Language, string>> & { en: string };
  body: Partial<Record<Language, string>> & { en: string };
};

export const ceremonySteps: CeremonyStep[] = [
  {
    id: "intro",
    title: {
      en: "Introduction",
      hi: "परिचय",
      pa: "ਜਾਣ-ਪਛਾਣ",
      bn: "ভূমিকা",
    },
    body: {
      en: "The Hindu Wedding Ceremony is based upon sacred scriptures, the Vedas, which date back over five thousand years and were composed in the ancient language of Sanskrit. The ceremony takes place in the Mandap in Sanskrit.",
    },
  },
  {
    id: "baarat",
    title: {
      en: "Baarat",
      hi: "बारात",
      pa: "ਬਾਰਾਤ",
      bn: "বরাত",
    },
    body: {
      en: "Kaustubh arrives for the wedding in a decorated car, accompanied by his family and friends who are singing and dancing in celebration of the wedding.",
    },
  },
  {
    id: "milni",
    title: {
      en: "Milni (Greeting the Party)",
      hi: "मिलनी",
      pa: "ਮਿਲਣੀ",
      bn: "মিলনী",
    },
    body: {
      en: "A Hindu wedding not only commits Vibha and Kaustubh to each other but also binds their friends and families. Upon arrival, Vibha's family welcomes and greets Kaustubh's family and they exchange garlands. As Kaustubh gets out of the car, he is blessed by Vibha's mother who applies Tilak to his forehead and performs his Aarti as a sign of honor and welcome. Kaustubh then walks towards the mandap led by his family.",
    },
  },
  {
    id: "ganesh-puja",
    title: {
      en: "Ganesh Puja",
      hi: "गणेश पूजा",
      pa: "ਗਣੇਸ਼ ਪੂਜਾ",
      bn: "গণেশ পূজা",
    },
    body: {
      en: "The wedding ceremony begins by offering a prayer to Lord Ganesh, whose blessings will remove all obstacles from the couple's new life together.",
    },
  },
  {
    id: "var-puja",
    title: {
      en: "Var Puja (Welcoming the Groom)",
      hi: "वर पूजा",
      pa: "ਵਰ ਪੂਜਾ",
      bn: "বর পূজা",
    },
    body: {
      en: "Kaustubh is welcomed by Vibha's parents who offer Madhuparka (mixture of yoghurt and honey) to the groom, who accepts it with a prayer so he may absorb its purity and sweetness.",
    },
  },
  {
    id: "bride-arrival",
    title: {
      en: "Bride's Arrival",
      hi: "वधू का आगमन",
      pa: "ਦੁਲਹਨ ਦਾ ਆਗਮਨ",
      bn: "কনের আগমন",
    },
    body: {
      en: "Vibha enters the wedding hall under a phoolo ki chaddar with her eyes covered in beetle leaves. She proceeds to the Mandap led by her family, with mantras and oolu playing in the background.",
    },
  },
  {
    id: "jai-maala",
    title: {
      en: "Jai Maala (Exchange of Garlands)",
      hi: "जय माला",
      pa: "ਜੈ ਮਾਲਾ",
      bn: "জয় মালা",
    },
    body: {
      en: "Vibha and Kaustubh exchange garlands signifying their acceptance of each other.",
    },
  },
  {
    id: "kanya-daan",
    title: {
      en: "Kanya Daan",
      hi: "कन्या दान",
      pa: "ਕੰਨਿਆ ਦਾਨ",
      bn: "কন্যা দান",
    },
    body: {
      en: "Amidst the chanting of sacred mantras, Vibha's parents demonstrate that they entrust her to Kaustubh by placing her hand in his. Vibha and Kaustubh then hold each other's right hands and take a solemn pledge to love and care for one another forever.",
    },
  },
  {
    id: "gath-bandhan",
    title: {
      en: "Gath Bandhan (Tying the Nuptial Knot)",
      hi: "गाठ बंधन",
      pa: "ਗਾਠ ਬੰਧਨ",
      bn: "গাঁথ বন্ধন",
    },
    body: {
      en: "Vibha and Kaustubh's shawls are tied in a knot signifying their union forever and enabling them to perform the religious rites jointly. This is performed by Kaustubh's sister.",
    },
  },
  {
    id: "agni-puja",
    title: {
      en: "Agni Puja / Hawan",
      hi: "अग्नि पूजा / हवन",
      pa: "ਅਗਨੀ ਪੂਜਾ / ਹਵਨ",
      bn: "অগ্নি পূজা / হোম",
    },
    body: {
      en: "The priest lights a sacred fire and invokes Lord Agni to sanctify the fire, ascertaining that all auspicious undertakings begin in an atmosphere of purity and spirituality. The fire represents the eternal and omnipresence of God, the most holy witness to the wedding ceremony. Vibha and Kaustubh perform a Hawan by offering Sandalwood, Rice, and Ghee under the guidance of the priest who chants sacred mantras.",
    },
  },
  {
    id: "mangal-phere",
    title: {
      en: "Mangal Phere (Circling the Holy Fire)",
      hi: "मंगल फेरे",
      pa: "ਮੰਗਲ ਫੇਰੇ",
      bn: "মঙ্গল ফেরা",
    },
    body: {
      en: "Vibha and Kaustubh walk around the sacred fire four times. The four circles symbolize Dharma (right conduct), Artha (wealth and prosperity), Karma (desires and passion of life), and Moksha (enlightenment). At the end of each round, Vibha's brother pours puffed rice into her hand and into the fire. They stop to touch a stone symbolizing that they will overcome any obstacles in their life together.",
    },
  },
  {
    id: "saptapadi",
    title: {
      en: "Saptapadi (Seven Steps Together)",
      hi: "सप्तपदी",
      pa: "ਸਪਤਪਦੀ",
      bn: "সপ্তপদী",
    },
    body: {
      en: "Vibha and Kaustubh take seven steps together with God as their guide, taking a vow with each step: nourishment and necessities of life; physical, mental, and spiritual balance; wealth through righteous means; knowledge, happiness and harmony; raising strong and virtuous children; longevity with wisdom and self-restraint; and remaining sincere and faithful for life.",
    },
  },
  {
    id: "pratigya",
    title: {
      en: "Pratigya – Marriage Vows",
      hi: "प्रतिज्ञा – विवाह व्रत",
      pa: "ਪ੍ਰਤਿਜ੍ਞਾ – ਵਿਆਹ ਦੇ ਵਚਨ",
      bn: "প্রতিজ্ঞা – বিবাহের শপথ",
    },
    body: {
      en: "Seven marriage vows are taken by both Vibha and Kaustubh. Vibha then takes a place on the left of Kaustubh which signifies that she will always be close to his heart.",
    },
  },
  {
    id: "sindoor-daan",
    title: {
      en: "Sindoor Daan",
      hi: "सिंदूर दान",
      pa: "ਸਿੰਦੂਰ ਦਾਨ",
      bn: "সিঁদুর দান",
    },
    body: {
      en: "Kaustubh puts sindoor in the parting of Vibha's hair and welcomes her into his family as his eternal partner. Seven married women also bless Vibha by adding to the sindoor applied by Kaustubh.",
    },
  },
  {
    id: "mangalsutra",
    title: {
      en: "Mangalsutra",
      hi: "मंगलसूत्र",
      pa: "ਮੰਗਲਸੂਤਰ",
      bn: "মঙ্গলসূত্র",
    },
    body: {
      en: "Kaustubh ties a sacred necklace made of gold and black beads around Vibha's neck as a symbol of his everlasting love. The couple exchange wedding rings at this time.",
    },
  },
  {
    id: "certificate",
    title: {
      en: "Signing of Marriage Certificate",
      hi: "विवाह प्रमाणपत्र पर हस्ताक्षर",
      pa: "ਵਿਆਹ ਦਾ ਸਰਟੀਫਿਕੇਟ ਸਾਈਨ",
      bn: "বিবাহের সনদ স্বাক্ষর",
    },
    body: {
      en: "Vibha and Kaustubh sign the papers from the city with the authorization from the priest and two witnesses as part of the legal marriage to the city of Ottawa.",
    },
  },
  {
    id: "ashirvaad",
    title: {
      en: "Ashirvaad (Blessings)",
      hi: "आशीर्वाद",
      pa: "ਅਸ਼ੀਰਵਾਦ",
      bn: "আশীর্বাদ",
    },
    body: {
      en: "The priest offers his final blessings to the newly married couple and declares them husband and wife. All gathered family and friends are invited to the mandap to bless the newly wedded couple with flower petals and wish them good luck, prosperity, and long life.",
    },
  },
  {
    id: "wedding-dance",
    title: {
      en: "Wedding Dance",
      hi: "विवाह नृत्य",
      pa: "ਵਿਆਹ ਦਾ ਨਾਚ",
      bn: "বিবাহের নৃত্য",
    },
    body: {
      en: "To celebrate the auspicious occasion, we have a dance celebration. All are cordially invited to be part of the cheer.",
    },
  },
  {
    id: "vidai",
    title: {
      en: "Vidai",
      hi: "विदाई",
      pa: "ਵਿਦਾਈ",
      bn: "বিদায়",
    },
    body: {
      en: "The vidai is one of the most emotional parts of the ceremony. Vibha's parents, relatives and friends bid her farewell. As she leaves, she throws a handful of puffed rice behind her, symbolically praying for prosperity and happiness in the household she is leaving behind. Vibha's brother and cousins give a push to the car symbolizing that they are helping her start a new life with her husband.",
    },
  },
  {
    id: "dinner",
    title: {
      en: "Dinner at East India Company",
      hi: "रात्रि भोज – East India Company",
      pa: "ਰਾਤ ਦਾ ਖਾਣਾ – East India Company",
      bn: "রাতের ভোজ – East India Company",
    },
    body: {
      en: "All guests are guided for dinner organized at East India Company, 1993 Robertson Road, Ottawa, Ontario K2H 5B7. We all leave together once the wedding formalities at the temple are complete.",
    },
  },
  {
    id: "fun-games",
    title: {
      en: "Fun & Games at the Banquet Hall",
      hi: "बैंक्वेट हॉल में मनोरंजन",
      pa: "ਬੈਂਕਵੇਟ ਹਾਲ ਵਿੱਚ ਮਨੋਰੰਜਨ",
      bn: "ব্যাঙ্কuet হলে আনন্দ",
    },
    body: {
      en: "Photo booth session and games including \"Who knows the Bride and the Groom better?\"",
    },
  },
];

export function getStepText(
  step: CeremonyStep,
  language: Language,
  field: "title" | "body",
): string {
  return step[field][language] ?? step[field].en ?? "";
}
