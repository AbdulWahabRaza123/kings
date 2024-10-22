import { LanguageDetails } from "@/interface/language-interface";

const dictionary = {
  english: () => import("../dictionary/english.json").then((r) => r.default),
  simplifiedChinese: () =>
    import("../dictionary/simplified-chinese.json").then((r) => r.default),
  traditionalChinese: () =>
    import("../dictionary/traditional-chinese.json").then((r) => r.default),
};
export const getDictionary = async (lang: LanguageDetails) => {
  return await dictionary[lang]();
};
