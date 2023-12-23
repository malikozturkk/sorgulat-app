
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

export const PAGE_TO_METHODS = (locale: string) => {
  const PAGE = PAGE_MAP[locale] || PAGE_MAP.en
  return {
    [PAGE.RetirementBanking]: GetRetirementBankingData,
    [PAGE.BecomeCustomer]: GetBecomeCustomerData,
    [PAGE.Main]: GetHomePageData,
  }
}

const GetHomePageData = async () => {
  return {
    props: {
      data: {
        title: "SORGULAT: Tüm Bankacılık İşlemlerini Tek Bir Platformda Sorgulat En uygununu Bul",
        description: "Sorgulat İle Tüm Bankacılık İşlemleriniz Tek Bir Platformda! İhtiyaçlarınıza en uygun bankacılık seçeneklerini keşfedin ve kolayca başvurun. Kredi hesaplama, banka karşılaştırma ve kart başvuru işlemlerini hızlıca yap, sorgulat.com ile hemen gör!",
        applicationName: "Sorgulat | Ana Sayfa",
        creator: "https://www.sorgulat.com/",
        publisher: "Sorgulat",
        category: "finance",
      },
    }
  }
}

const GetRetirementBankingData = async () => {
  return {
    props: {
      data: {
        title: "SORGULAT: Emeklilik Promosyonu İçin En Avantajlı Teklifi Karşılaştır Sorgulat Enuygununu Bul",
        description: "Emeklilik için en uygun bankacılık ürünlerini Sorgulat'da inceleyin! İhtiyaçlarınıza en uygun emekli bankacılık seçeneklerini keşfedin ve kolayca başvurun.",
        applicationName: "Sorgulat | Emekliler İçin Bankacılık Hizmetleri",
        creator: "https://www.sorgulat.com/emekli-bankaciligi/",
        publisher: "Sorgulat Emekli Bankacılığı",
        category: "finance",
      },
    }
  }
}

const GetBecomeCustomerData = async () => {
  return {
    props: {
      data: {
        title: "SORGULAT: Uzaktan Müşteri Edinimi İle En Avantajlı Teklifi Karşılaştır Sorgulat Enuygununu Bul",
        description: "Sorgulat Uzaktan Müşteri Edinimi sayfasını kullanarak, şubeye gitmeye gerek kalmadan istediğiniz bankanın müşterisi olabilirsiniz.",
        applicationName: "Sorgulat | Online Müşteri Kaydı",
        creator: "https://www.sorgulat.com/bankalarin-musterisi-ol/",
        publisher: "Sorgulat Online Müşteri Kaydı",
        category: "finance",
      },
    }
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
