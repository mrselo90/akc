import { SiteData } from '../types';

export const siteData: SiteData = {
  companyInfo: {
    name: "AKC Mekanik İnşaat",
    description: "Sigorta şirketlerinin hızla gelişmekte olan satış sonrası hizmet anlayışına kurumsal bir bakış açısı ve müşteri memnuniyetini en üst seviyede tutmak amacı ile konut ve işyeri poliçelerinde satış sonrası oluşabilecek hasarları gidermek için hizmet vermeye devam etmektedir.",
    mission: "AKC Mekanik İnşaat olarak, yurtiçi ve yurtdışı rekabet edebilirlik anlayışından yola çıkıp faaliyet gösterdiğimiz her sektörde en mükemmelini yakalamak, şirket olarak teknolojik gelişmeleri yakından izleyip, sektör ihtiyaçlarına yönelik projeler üretmek ve uygulamak.",
    vision: "Satış Sonrası Hizmetler alanında, ürün ve hizmet sağlayıcılarla, ürün ve hizmet almak isteyen herkesi bir araya getirip, her iki tarafında ihtiyaçlarına en inovatif çalışmalar ve son teknolojik sistemlerle ihtiyaçları karşılamak için var gücüyle çalışarak değer katmaya ve fark yaratmaya devam etmektir."
  },
  hero: {
    title: "Sigorta Hasarlarında Hızlı ve Güvenilir Çözüm Ortağınız",
    subtitle: "Konut ve işyeri hasarlarında uzman ekibimiz ile 7/24 hizmetinizdeyiz. En kısa sürede müdahalede bulunup, hasarı asgari seviyeye indiriyoruz.",
    backgroundImage: "/images/hero-bg.jpg"
  },
  about: {
    title: "30 Yıllık Deneyimimizle Yanınızdayız",
    description: "AKC Mekanik İnşaat olarak, sigorta şirketlerinin hızla gelişmekte olan satış sonrası hizmet anlayışına kurumsal bir bakış açısı getiriyoruz. Konut ve işyeri poliçelerinde satış sonrası oluşabilecek hasarları gidermek için profesyonel hizmet vermeye devam etmektedir.",
    mission: "Yurtiçi ve yurtdışı rekabet edebilirlik anlayışından yola çıkıp faaliyet gösterdiğimiz her sektörde en mükemmelini yakalamak, şirket olarak teknolojik gelişmeleri yakından izleyip, sektör ihtiyaçlarına yönelik projeler üretmek ve uygulamak.",
    vision: "Satış Sonrası Hizmetler alanında, ürün ve hizmet sağlayıcılarla, ürün ve hizmet almak isteyen herkesi bir araya getirip, her iki tarafında ihtiyaçlarına en inovatif çalışmalar ve son teknolojik sistemlerle değer katmaya ve fark yaratmaya devam etmektir.",
    features: [
      "30+ Yıllık Sektör Deneyimi",
      "7/24 Acil Müdahale Hizmeti",
      "Uzman ve Sertifikalı Ekip",
      "Teknolojik Altyapı",
      "Müşteri Odaklı Hizmet",
      "Garantili İş Kalitesi"
    ]
  },
  services: [
    {
      id: "konut-hasar",
      title: "Konut Hasar Onarımı",
      description: "Konut poliçelerinde oluşan hasarları hızlı ve ekonomik çözümlerle gideriyoruz.",
      icon: "🏠",
      features: [
        "7/24 Acil Müdahale",
        "Hızlı Hasar Tespiti",
        "Ekonomik Çözümler",
        "Garantili Onarım"
      ]
    },
    {
      id: "isyeri-hasar",
      title: "İşyeri Hasar Onarımı",
      description: "İş yerlerinde meydana gelen hasarlara profesyonel müdahale ve onarım hizmetleri.",
      icon: "🏢",
      features: [
        "İş Sürekliliği Odaklı",
        "Minimal Kesinti",
        "Uzman Ekip",
        "Teknolojik Çözümler"
      ]
    },
    {
      id: "elektrik-tesisat",
      title: "Elektrik Tesisat Hizmetleri",
      description: "Kuvvetli ve zayıf akım tesisatlarında tasarım ve uygulama hizmetleri.",
      icon: "⚡",
      features: [
        "Kuvvetli Akım Tasarım",
        "Zayıf Akım Uygulaması",
        "Güvenlik Sistemleri",
        "Bakım ve Onarım"
      ]
    },
    {
      id: "mimari-hizmetler",
      title: "Mimari Hizmetler",
      description: "Mimari tasarım ve uygulama projelerinde kapsamlı hizmet sunuyoruz.",
      icon: "🏗️",
      features: [
        "Mimari Tasarım",
        "Proje Yönetimi",
        "İnşaat Denetimi",
        "Restorasyon"
      ]
    }
  ],
  references: [
    { id: "hdi", name: "HDI Sigorta", logo: "🏢", sector: "Sigorta" },
    { id: "hdi-katilim", name: "HDI Katılım Sigorta", logo: "🏛️", sector: "Katılım Sigortası" },
    { id: "eurocross", name: "Eurocross Turkey", logo: "🌍", sector: "Acil Yardım" },
    { id: "allianz-partners", name: "Allianz Partners", logo: "🤝", sector: "Sigorta Hizmetleri" },
    { id: "vestel", name: "Vestel", logo: "📱", sector: "Elektronik" },
    { id: "vakifbank", name: "Vakıfbank", logo: "🏦", sector: "Bankacılık" },
    { id: "ford", name: "Ford Otosan", logo: "🚗", sector: "Otomotiv" }
  ],
  contactInfo: {
    phone: "+90 212 XXX XX XX",
    email: "info@akcmekanikinşaat.com",
    address: "İstanbul, Türkiye",
    workingHours: "Pazartesi - Cuma: 08:00 - 18:00"
  }
};
