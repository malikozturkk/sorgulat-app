import { IBankCard } from 'components/FrontendComponents/BankCard/BankCard.types'

export const bankPromotionData: IBankCard[] = [
    {
      bankName: "İş Bankası",
      description: "Emekli maaşını İş Bankası’na Taşı",
      applicationUrl: "https://www.isbank.com.tr/sgk-emeklilerine-ayricaliklar",
      imageUrl: "is-bankasi.png",
      color: "#053260",
      buttonText: "Maaşını Taşı!",
      priority: 100,
      amount: 7.500,
      infos: [
        "Emeklilere 7.500 TL’ye varan promosyon!",
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Kredi Kartı",
          value: "Aidatsız Var"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Akbank",
      description: "Maaşını Akbank 'a Taşı!",
      applicationUrl: "https://www.akbank.com/tr-tr/hizmetler/Sayfalar/SGK-Emekli-Maas-Odemeleri.aspx",
      imageUrl: "akbank.png",
      color: "#dd0001",
      buttonText: "Maaşını Taşı!",
      priority: 99,
      amount: 12.000,
      infos: [
        "10.000 TL Nakit Promosyon, 2.000 TL chip-para!",
        "Toplamda 12.000 TL'ye Varan Ödül!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%47,00"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "ING",
      description: "Maaşını ING'ye Taşı!",
      applicationUrl: "https://www.ing.com.tr/tr/sizin-icin/odemeler/emekli-maas-odemeleri",
      imageUrl: "ing.png",
      color: "#ff6200",
      buttonText: "Maaşını Taşı!",
      priority: 98,
      amount: 12.500,
      infos: [
        "Toplamda 12.500 TL’ye varan promosyon!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%42,00"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Garanti BBVA",
      description: "Maaşını Garanti BBVA 'ya Taşı!",
      applicationUrl: "https://www.garantibbva.com.tr/odemeler-ve-hizmetler/emekli-maas-odemeleri",
      imageUrl: "garanti.png",
      color: "#009341",
      buttonText: "Maaşını Taşı!",
      priority: 97,
      amount: 8.500,
      infos: [
        "7.500 TL’ye varan promosyon ve 1.000 TL bonus!",
        "Maaşınızı Mobil’den taşıyın fırsatı yakalayın."
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%47,00"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "VakıfBank",
      description: "Maaşını VakıfBank 'a Taşı!",
      applicationUrl: "https://www.vakifbank.com.tr/sgk-promosyon-odemeleri.aspx?pageID=2398",
      imageUrl: "vakif-bank.png",
      color: "#ffb300",
      buttonText: "Maaşını Taşı!",
      priority: 96,
      amount: 5.000,
      infos: [
        "Toplamda 5.000 TL’ye varan promosyon!",
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretli"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%41,00"
        },
        {
          benefit: "Kredi Kartı",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Fibabanka",
      description: "Maaşını Fibabanka 'a Taşı!",
      applicationUrl: "https://www.fibabanka.com.tr/bireysel/diger-urun-ve-hizmetlerimiz/emekli-maas-odemeleri",
      imageUrl: "fibabank.png",
      color: "#83bd01",
      buttonText: "Maaşını Taşı!",
      priority: 95,
      amount: 7.500,
      infos: [
        "Toplamda 7.500 TL’ye varan promosyon!",
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%45,00"
        },
        {
          benefit: "Kredi Kartı",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Halkbank",
      description: "Maaşını Halkbank 'a Taşı!",
      applicationUrl: "https://www.halkbank.com.tr/tr/bireysel/emekli-bankaciligi/paraf-emekli-dunyasi/yeni-emekli-maas-musterilerimize-ozel-toplam-ucbin-tl-parafpara.html",
      imageUrl: "halkbank.png",
      color: "#1b70b5",
      buttonText: "Maaşını Taşı!",
      priority: 94,
      amount: 3.000,
      infos: [
        "Toplamda 3.000 TL’ye varan promosyon!",
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretli"
        },
        {
          benefit: "Kredi Kartı",
          value: "Aidatsız Var"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Albaraka Türk",
      description: "Maaşını Albaraka Türk 'e Taşı!",
      applicationUrl: "https://www.albaraka.com.tr/tr/kampanyalar/detay/10000-tlye-varan-emekli-promosyon-ve-odulu-albarakada",
      imageUrl: "albaraka.png",
      color: "#f68e1e",
      buttonText: "Maaşını Taşı!",
      priority: 93,
      amount: 10.000,
      infos: [
        "Toplamda 10.000 TL’ye varan promosyon!",
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Konut Finansmanı",
          value: "%2,95"
        },
        {
          benefit: "Kredi Kartı",
          value: "Aidatsız Var"
        }
      ]
    },
    {
      bankName: "Denizbank",
      description: "Maaşını Denizbank'a Taşı!",
      applicationUrl: "https://www.denizbank.com/kendim-icin/emekli-bankaciligi/ayricalik/emeklilere-tl-nakit-hediye",
      imageUrl: "deniz-bank.png",
      color: "#d11241",
      buttonText: "Maaşını Taşı!",
      priority: 92,
      amount: 5.000,
      infos: [
        "Emeklilere özel  5.000 TL’ye varan promosyon!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%47,00"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "QNB Finansbank",
      description: "Emekli Maaşını QNB'ye Taşı!",
      applicationUrl: "https://www.qnbfinansbank.com/emekli-bankaciligi",
      imageUrl: "qnb.png",
      color: "#870052",
      buttonText: "Maaşını Taşı!",
      priority: 91,
      amount: 9.200,
      infos: [
        "EYT’lilere 9.200 TL’ye varan emeklilik ödülü!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%39,00"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Yapı Kredi",
      description: "Şimdiki Emekliler Bir Başka!",
      applicationUrl: "https://www.yapikredi.com.tr/bireysel-bankacilik/odemeler-ve-hizmetler/sgk-emekli-maas-promosyonu",
      imageUrl: "yapi-kredi.png",
      color: "#004990",
      buttonText: "Maaşını Taşı!",
      priority: 90,
      amount: 9.000,
      infos: [
        "Yapı Kredi'de Şimdiki Emekliler Bir Başka!",
        "9.000 TL'ye Varan Promosyon Yapı Kredi'de!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%45,00"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Şekerbank",
      description: "Maaşını Şekerbank 'a Taşı!",
      applicationUrl: "https://www.sekerbank.com.tr/bireysel/emekli-bankaciligi",
      imageUrl: "sekerbank.png",
      color: "#007a3d",
      buttonText: "Maaşını Taşı!",
      priority: 89,
      amount: 5.000,
      infos: [
        "Toplamda 5.000 TL’ye varan promosyon!",
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretli"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%27,00"
        },
        {
          benefit: "Kredi Kartı",
          value: "Aidatsız Var"
        }
      ]
    },
    {
      bankName: "Kuveyt Türk",
      description: "Maaşını Kuveyt Türk'e Taşı!",
      applicationUrl: "https://www.kuveytturk.com.tr/bireysel/odemeler-ve-hizmetler/odemeler/emekli-maas-odemeleri",
      imageUrl: "kuveyt-turk.png",
      color: "#006754",
      buttonText: "Maaşını Taşı!",
      priority: 88,
      amount: 8.000,
      infos: [
        "Toplamda 8.000 TL’ye varan promosyon!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "ATM'den Para Çekme",
          value: "Var"
        },
        {
          benefit: "Dijital Para Transferi",
          value: "Ücretsiz"
        }
      ]
    },
    {
      bankName: "Ziraat Bankası",
      description: "Maaşını Ziraat Bankası 'na Taşı!",
      applicationUrl: "https://www.ziraatbank.com.tr/tr/bireysel/hizmetler/emekli-maas-odemeleri/emekli-maas-promosyon-odemesi",
      imageUrl: "ziraat-bankasi.png",
      color: "#e10514",
      buttonText: "Maaşını Taşı!",
      priority: 87,
      amount: 5.000,
      infos: [
        "Toplamda 5.000 TL’ye varan promosyon!",
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretli"
        },
        {
          benefit: "Kredi Kartı",
          value: "Var"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Türkiye Finans",
      description: "Maaşını Türkiye Finans'a Taşı!",
      imageUrl: "turkiye-finans.png",
      applicationUrl: "https://www.turkiyefinans.com.tr/tr-tr/kampanyalar/sayfalar/emeklilere-nakit-promosyon.aspx",
      color: "#00c4b3",
      buttonText: "Maaşını Taşı!",
      priority: 86,
      amount: 5.000,
      infos: [
        "Toplamda 5.000 TL’ye varan promosyon!",
        "8300 Anlaşmalı ATM'den 5.000 TL'ye Kadar Para Çekme",
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Kredi Kartı",
          value: "Var"
        },
        {
          benefit: "Şubede İşlem Önceliği",
          value: "Var"
        }
      ]
    }
  ]


  export const becomeCustomerData: IBankCard[] = [
    {
      bankName: "Akbank",
      description: "Akbank Müşterisi Ol!",
      applicationUrl: "https://www.akbank.com/basvuru/mobileappservice/",
      imageUrl: "akbank.png",
      color: "#dd0001",
      buttonText: "Müşteri Ol!",
      priority: 100,
      infos: [
        "%0 faizli 20.000 TL'ye Varan Taksitli Avans!",
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%47,00"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "QNB Finansbank",
      description: "QNB Finansbank Müşterisi Ol!",
      applicationUrl: "https://www.qnbfinansbank.com/724-bankacilik/nasil-qnbfinansbankli-olurum",
      imageUrl: "qnb.png",
      color: "#870052",
      buttonText: "Müşteri Ol!",
      priority: 99,
      infos: [
        "%0 faiz ile 10.000 TL'ye Varan Kredi Fırsatı!",
        "%0 faiz ile 10.000 TL'ye Varan Nakit Avans!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%39,00"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "VakıfBank",
      description: "VakıfBank Müşterisi Ol!",
      imageUrl: "vakif-bank.png",
      applicationUrl: "https://www.vakifbank.com.tr/Default.aspx?pageID=3998",
      color: "#ffb300",
      buttonText: "Müşteri Ol!",
      priority: 98,
      infos: [
        "İlk defa ARI Hesabı açtıranlara %41,00 Tanışma faizi fırsatı VakıfBank’ta."
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretli"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%41,00"
        },
        {
          benefit: "Kredi Kartı",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Denizbank",
      description: "DenizBank Müşterisi Ol!",
      applicationUrl: "https://www.denizbank.com/denizbank-musterisi-olmak-istiyorum",
      imageUrl: "deniz-bank.png",
      color: "#d11241",
      buttonText: "Müşteri Ol!",
      priority: 97,
      infos: [
        "%0,99 Faiz ile 10.000 TL'ye Varan Kredi!",
        "%0 Faiz ile 10.000 TL'ye Varan Nakit Avans!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%47,00"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Garanti BBVA",
      description: "Garanti BBVA Müşterisi Ol!",
      applicationUrl: "https://www.garantibbva.com.tr/dijital-bankacilik/musterimiz-olun",
      imageUrl: "garanti.png",
      color: "#009341",
      buttonText: "Müşteri Ol!",
      priority: 96,
      infos: [
        "15.000 TL Faizsiz Taksitli Nakit Avans!",
        "10.000 TL'ye Varan Faizsiz Kredi!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretli"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%47,00"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Yapı Kredi",
      description: "Yapı Kredili Ol!",
      applicationUrl: "https://www.yapikredi.com.tr/banka-hesabi-ac",
      imageUrl: "yapi-kredi.png",
      color: "#004990",
      buttonText: "Müşteri Ol!",
      priority: 95,
      infos: [
        "%0 Faizli 20.000 TL’ye Varan Nakit Avans!",
        "Yapı Kredi Mobil’den Chippin’e de Üye Ol!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretli"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%45,00"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Enpara",
      description: "Enparalı Ol!",
      applicationUrl: "https://www.qnbfinansbank.enpara.com/basvuru-amaciniz",
      imageUrl: "enpara.png",
      color: "#b44ea7",
      buttonText: "Müşteri Ol!",
      priority: 94,
      infos: [
        "Masrafsız Bankacılık için Enparalı Olun!",
        "%0 Faiz ile 10.000 TL'ye Varan Kredi!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%46,50"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "İş Bankası",
      description: "İşCep’ten İş Bankalı Ol!",
      applicationUrl: "https://www.isbank.com.tr/musteri-olmak-istiyorum",
      imageUrl: "is-bankasi.png",
      color: "#053260",
      buttonText: "Müşteri Ol!",
      priority: 93,
      infos: [
        "%0 Faizli 20.000 TL Taksitli Nakit Avans!",
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "Var"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Albaraka Türk",
      description: "Albaraka Türk Müşterisi Ol!",
      applicationUrl: "https://www.albaraka.com.tr/tr/dijital-bankacilik/nasil-albaraka-musterisi-olurum",
      imageUrl: "albaraka.png",
      color: "#f68e1e",
      buttonText: "Müşteri Ol!",
      priority: 92,
      infos: [
        "%35’e Varan Kâr Oranlı TL Katılma Hesapları!",
        "Vade Farksız 15.000 TL Finansman!",
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Konut Finansmanı",
          value: "%2,95"
        },
        {
          benefit: "Kredi Kartı",
          value: "Aidatsız Var"
        }
      ]
    },
    {
      bankName: "Kuveyt Türk",
      description: "Kuveyt Türk Müşterisi Ol!",
      applicationUrl: "https://www.kuveytturk.com.tr/musteri-ol-kendin-icin",
      imageUrl: "kuveyt-turk.png",
      color: "#004638",
      buttonText: "Müşteri Ol!",
      priority: 91,
      infos: [
        "Vade Farksız 10.000 TL İhtiyaç Finansmanı",
        "Mobilden Kuveyt Türklü Olanlara 1000 TL Hediye"
      ],
      benefits: [
        {
          benefit: "İhtiyaç Finansmanı",
          value: "%3,68"
        },
        {
          benefit: "Konut Finansmanı",
          value: "%3,20"
        },
        {
          benefit: "Taşıt Finansmanı",
          value: "%3,39"
        }
      ]
    },
    {
      bankName: "Cepteteb",
      description: "CEPTETEB’li Ol!",
      applicationUrl: "https://www.cepteteb.com.tr/cepteteb-musteri-basvurusu",
      imageUrl: "cepteteb.png",
      color: "#16bc5d",
      buttonText: "Müşteri Ol!",
      priority: 90,
      infos: [
        "%40 Hoş Geldin Faizi İle Rahat Rahat Biriktir!",
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%45,00"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "ING",
      description: "ING'li Ol!",
      applicationUrl: "https://www.ing.com.tr/tr/ing/7-24-bankacilik/ingli-ol",
      imageUrl: "ing.png",
      color: "#ff6200",
      buttonText: "Müşteri Ol!",
      priority: 89,
      infos: [
        "%0,99 Yansıyan Faizle 20.000 TL’ye Kadar Kredi"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%42,00"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Vakıf Katılım",
      description: "Vakıf Katılım Müşterisi Ol!",
      applicationUrl: "https://www.vakifkatilim.com.tr/tr/kendim-icin/dijital-bankacilik/goruntulu-gorusmeyle-vakif-katilim-musterisi-ol",
      imageUrl: "vakif-katilim.png",
      color: "#25477B",
      buttonText: "Müşteri Ol!",
      priority: 88,
      infos: [
        "Şubeye Gitmeden Vakıf Katılım Müşterisi Olun!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "İhtiyaç Finansmanı",
          value: "%4,49"
        },
        {
          benefit: "Konut Finansmanı",
          value: "%3,19"
        }
      ]
    },
    {
      bankName: "Alternatifbank",
      description: "Alternatifbank Müşterisi Ol!",
      applicationUrl: "https://www.alternatifbank.com.tr/kampanyalar-info/goruntulu-gorusme-ile-musteri-ol",
      imageUrl: "alternatif-bank.png",
      color: "#8d003e",
      buttonText: "Müşteri Ol!",
      priority: 87,
      infos: [
        "Sen de VOV'lu Ol, Kazan Bol Bol!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%45,00"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Anadolubank",
      description: "Anadolubank Müşterisi Ol!",
      applicationUrl: "https://www.anadolubank.com.tr/dijital/anadolubankli-ol",
      imageUrl: "anadolu-bank.png",
      color: "#008aff",
      buttonText: "Müşteri Ol!",
      priority: 86,
      infos: [
        "Renkli Hesap ile Her Gün Kazanın!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretli"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%44,00"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Hayat Finans",
      description: "Hayat Finans Müşterisi Ol!",
      applicationUrl: "https://www.hayatfinans.com.tr/hayatli-ol",
      imageUrl: "hayat-finans.png",
      color: "#01a05f",
      buttonText: "Müşteri Ol!",
      priority: 85,
      infos: [
        "Yıllık Brüt Kar Payı Oranı %42,45!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Katılma Hesabı",
          value: "%42,45"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Türkiye Finans",
      description: "Türkiye Finans Müşterisi Ol!",
      imageUrl: "turkiye-finans.png",
      applicationUrl: "https://www.turkiyefinans.com.tr/tr-tr/dijital-bankacilik/sayfalar/musteri-ol.aspx",
      color: "#00c4b3",
      buttonText: "Müşteri Ol!",
      priority: 84,
      infos: [
        "Şubeye Gitmeden Vakıf Katılım Müşterisi Olun!",
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Şubede İşlem Önceliği",
          value: "Var"
        },
        {
          benefit: "Kredi Kartı",
          value: "Var"
        },
      ]
    },
    {
      bankName: "Fibabanka",
      description: "Fibabanka Müşterisi Ol!",
      imageUrl: "fibabank.png",
      applicationUrl: "https://www.fibabanka.com/musteri-olmak-istiyorum",
      color: "#83bd01",
      buttonText: "Müşteri Ol!",
      priority: 83,
      infos: [
        "Görüntülü Bankacılık İle Yeni Üye Olanlara %45 Kiraz Hesap Faizi!",
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%45,00"
        },
        {
          benefit: "Kredi Kartı",
          value: "Var"
        }
      ]
    },
    {
      bankName: "HSBC",
      description: "HSBC Müşterisi Ol!",
      imageUrl: "hsbc.png",
      applicationUrl: "https://www.hsbc.com.tr/hsbc/hsbcli-olun",
      color: "#db0011",
      buttonText: "Müşteri Ol!",
      priority: 82,
      infos: [
        "%28 Hoş Geldin Faizi İle Rahat Rahat Biriktir!",
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%28,00"
        },
        {
          benefit: "Kredi Kartı",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Odeabank",
      description: "Odeabank Müşterisi Ol!",
      imageUrl: "odeabank.png",
      applicationUrl: "https://www.odeabank.com.tr/bireysel/goruntulu-gorusme-ile-hesap-acma",
      color: "#2d353c",
      buttonText: "Müşteri Ol!",
      priority: 81,
      infos: [
        "Dijital kanallardan yeni müşteri olanlar ek +%3 faiz oranından yararlanıyor!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%44,00"
        },
        {
          benefit: "Kredi Kartı",
          value: "Aidatsız Var"
        }
      ]
    },
    {
      bankName: "Şekerbank",
      description: "Şekerbank Müşterisi Ol!",
      imageUrl: "sekerbank.png",
      applicationUrl: "https://www.sekerbank.com.tr/dijital-bankacilik/musterimiz-olun",
      color: "#007a3d",
      buttonText: "Müşteri Ol!",
      priority: 80,
      infos: [
        "%27 Hoş Geldin Faizi İle Rahat Rahat Biriktir!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretli"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%27,00"
        },
        {
          benefit: "Kredi Kartı",
          value: "Aidatsız Var"
        }
      ]
    },
    {
      bankName: "N Kolay",
      description: "N Kolay Müşterisi Ol!",
      imageUrl: "nkolay.png",
      applicationUrl: "https://www.nkolay.com/musteri-ol",
      color: "#0075eb",
      buttonText: "Müşteri Ol!",
      priority: 79,
      infos: [
        "%0 faiz ile 10.000 TL Nakit Avans!",
        "Türkiyedeki tüm ATM'lerden ücretsiz para çekme ve yatırma!",
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%42,00"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "ON",
      description: "ON Müşterisi Ol!",
      imageUrl: "on.png",
      applicationUrl: "https://on.com.tr/subeye-gitmeden-hesap-acma",
      color: "lime",
      buttonText: "Müşteri Ol!",
      priority: 78,
      infos: [
        "%0,99'dan başlayan ihtiyaç kredisi faizi!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretsiz"
        },
        {
          benefit: "Tanışma Faizi",
          value: "%47,00"
        },
        {
          benefit: "Kredi Kartı",
          value: "Aidatsız Var"
        }
      ]
    },
    {
      bankName: "Ziraat Bankası",
      description: "Ziraat Bankası Müşterisi Ol!",
      imageUrl: "ziraat-bankasi.png",
      applicationUrl: "https://www.ziraatbank.com.tr/tr/bankamiz/basin-odasi/ziraatten-yenilikler/ziraat-li-olmak-istiyorum",
      color: "#e10514",
      buttonText: "Müşteri Ol!",
      priority: 77,
      infos: [
        "%33 Hoş Geldin Faizi İle Rahat Rahat Biriktir!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretli"
        },
        {
          benefit: "Kredi Kartı",
          value: "Var"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
    {
      bankName: "Halkbank",
      description: "Halkbank Müşterisi Ol!",
      imageUrl: "halkbank.png",
      applicationUrl: "https://www.halkbank.com.tr/tr/dijital-bankacilik/mobil-bankacilik/musteri-olmak-istiyorum.html",
      color: "#1b70b5",
      buttonText: "Müşteri Ol!",
      priority: 76,
      infos: [
        "%28 Hoş Geldin Faizi İle Rahat Rahat Biriktir!"
      ],
      benefits: [
        {
          benefit: "EFT Havale",
          value: "Ücretli"
        },
        {
          benefit: "Kredi Kartı",
          value: "Aidatsız Var"
        },
        {
          benefit: "Günlük Faiz",
          value: "Var"
        }
      ]
    },
  ]