
import HomePage from '../components/Homepage'
import Faq from '../components/Faq'
import RetirementBanking from 'components/RetirementBanking'
import BecomeCustomer from 'components/BecomeCustomer'

export const PAGE_MAP = {
  tr: { Main: `/`, Faq: `/sikca-sorulan-sorular`, RetirementBanking: '/emekli-bankaciligi', BecomeCustomer: '/bankalarin-musterisi-ol' },
  en: { Main: `/`, Faq: `/faq`, RetirementBanking: '/retirement-banking', BecomeCustomer: '/become-customer' },
}

const PAGE_TO_COMPONENT_MAP = (locale: string) => {
  //@ts-ignore
  const PAGE = PAGE_MAP[locale] || PAGE_MAP.tr
  return {
    [PAGE.Main]: HomePage,
    [PAGE.Faq]: Faq,
    [PAGE.RetirementBanking]: RetirementBanking,
    [PAGE.BecomeCustomer]: BecomeCustomer
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
