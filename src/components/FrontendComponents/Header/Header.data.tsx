import CreditCard from "../../Icons/svg/credit-card.svg";
import Credit from "../../Icons/svg/credit.svg";
import MobileCredit from "../../Icons/svg/mobile-credit.svg";
import MobileCreditCard from "../../Icons/svg/mobile-credit-card.svg";
import MobileRetirement from "../../Icons/svg/retirement.svg";
import MobileOnlineBanking from "../../Icons/svg/online-banking.svg";

export const DefaultDesktopNavigationItems = {
  items: [
    {
      title: "Kredi",
      href: "/kredi",
      mobileIcon: <MobileCredit />,
      subMenu: [
        {
          title: "İhtiyaç Kredisi",
          description:
            "İhtiyaç kredisi faiz oranlarını karşılaştırın, şubeye gitmeden hemen başvurun, size özel faiz oranlarını kaçırmayın.",
          href: "/kredi-karti/aidatsiz-kartlar/aidatsiz-kartlar",
          icon: "personal-finance-credit.svg",
        },
        {
          title: "Konut Kredisi",
          description:
            "Hayalinizdeki evi almak için en avantajlı konut kredilerini listeleyin, ev kredisi faiz oranlarını hesaplayın ve ücretsiz başvurun.",
          href: "/kredi-karti/kredi-kartlari/mil-veren-kartlar",
          icon: "housing-credit.svg",
        },
        {
          title: "Taşıt Kredisi",
          description:
            "Almak istediğiniz araba için sıfır ve ikinci el taşıt kredilerini hesaplayın, faiz oranlarını karşılaştırın ve ücretsiz başvurun.",
          href: "/kredi-karti/puan-veren-kartlar",
          icon: "car-credit.svg",
        },
        {
          title: "Kobi Kredisi",
          description:
            "İşletmeniz için ihtiyaç duyduğunuz KOBİ ve esnaf kredilerini karşılaştırın, en avantajlısına hemen başvurun.",
          href: "/kredi-karti/ogrenci-kartlari",
          icon: "sme-credit.svg",
        },
      ],
    },
    {
      title: "Kredi Kartları",
      href: "/kredi-karti",
      mobileIcon: <MobileCreditCard />,
      subMenu: [
        {
          title: "Aidatsız Kartlar",
          description:
            "Aidatsız kredi kartlarını listeleyin, karşılaştırın ve en avantajlısına hızlıca başvurun. Aidat ücreti ödemeden rahatça kullanın.",
          href: "/kredi-karti/aidatsiz-kartlar/aidatsiz-kartlar",
          icon: "free-card.svg",
        },
        {
          title: "Mil Veren Kartlar",
          description:
            "Uçuşlarınızda kullanmak üzere mil puan biriktirmek için mil veren kredi kartlarını inceleyin, mil avantajlarını kaçırmayın.",
          href: "/kredi-karti/mil-veren-kartlar",
          icon: "mil-giving-card.svg",
        },
        {
          title: "Puan Veren Kartlar",
          description:
            "Alışverişin keyfini katlayan puanları toplamak için puan veren kartları inceleyin, en avantajlısına hemen başvurun.",
          href: "/kredi-karti/puan-veren-kartlar",
          icon: "point-giving-card.svg",
        },
        {
          title: "Öğrenci Kartları",
          description:
            "En avantajlı öğrenci kredi kartlarını listeleyin, sizin için en avantajlısına hızlıca başvurun.",
          href: "/kredi-karti/ogrenci-kartlari",
          icon: "student-card.svg",
        },
        {
          title: "Ticari Kartlar",
          description:
            "İşletmeniz için ihtiyaç duyduğunuz ticari kredi kartlarını listeleyin, hemen ücretsiz başvurun.",
          href: "/kredi-karti/ticari-kartlar",
          icon: "business-card.svg",
        },
      ],
    },
    {
      title: "Emekli Bankacılığı",
      mobileIcon: <MobileRetirement />,
      href: "/emekli-bankaciligi",
      badge: "Yeni",
    },
    {
      title: "Bankaların Müşterisi Ol",
      mobileIcon: <MobileOnlineBanking />,
      href: "/bankalarin-musterisi-ol",
      badge: "Yeni",
    },
  ],
};
