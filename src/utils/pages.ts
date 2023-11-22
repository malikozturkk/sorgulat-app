
import HomePage from '../components/Homepage'
import Faq from '../components/Faq'

export const PAGE_MAP = {
  tr: { Main: `/`, Faq: `/sikca-sorulan-sorular` },
  en: { Main: `/`, Faq: `/faq` },
}

const PAGE_TO_COMPONENT_MAP = (locale: string) => {
  //@ts-ignore
  const PAGE = PAGE_MAP[locale] || PAGE_MAP.tr
  return {
    [PAGE.Main]: HomePage,
    [PAGE.Faq]: Faq
  }
}

export const RenderPage = (page: keyof typeof PAGE_MAP, locale: string) => {
  const Component = PAGE_TO_COMPONENT_MAP(locale)[page]
  return Component ? Component : null
}
export interface LanguageSelector {
  selectedLanguage: typeof SupportedLanguages[number]
}
export const SupportedLanguages = ['tr', 'en ']
