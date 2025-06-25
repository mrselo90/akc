import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, LanguageContextType, Translations } from '../types';

const translations: Translations = {
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.services': 'Hizmetlerimiz',
    'nav.references': 'Referanslar',
    'nav.contact': 'İletişim',
    'nav.emergency': '7/24 ACİL MÜDAHALE',
    'nav.call': 'Hemen Ara',
    'nav.whatsapp': 'WhatsApp',
    
    // Hero Section
    'hero.badge': 'Türkiye\'nin Güvenilir Hasar Onarım Uzmanı',
    'hero.explore': 'Hizmetlerimizi Keşfet',
    'hero.emergency': 'Acil Arama',
    'hero.call': 'Ara',
    'hero.message': 'Mesaj',
    
    // Stats
    'stats.experience': 'Yıllık Deneyim',
    'stats.projects': 'Başarılı Proje',
    'stats.emergency': 'Acil Müdahale',
    'stats.satisfaction': 'Müşteri Memnuniyeti',
    
    // About Section
    'about.years': '30 Yıllık Deneyimimizle Yanınızdayız',
    'about.values.transparency': 'Şeffaflık',
    'about.values.emergency': '7/24 Acil Müdahale Hizmeti',
    'about.values.expert': 'Uzman ve Sertifikalı Ekip',
    'about.values.technology': 'Teknolojik Altyapı',
    'about.values.customer': 'Müşteri Odaklılık',
    'about.values.quality': 'Kalite',
    'about.values.title': 'Kurumsal Değerlerimiz',
    'about.values.subtitle': 'İşimizin temelinde yatan değerlerimiz ile müşterilerimize en iyi hizmeti sunuyoruz',
    'about.values.transparency.desc': 'Tüm iş süreçlerimizde ortaklarımızın ve müşterilerimizin bilgi edinme hakkına riayet eder, tam bir şeffaflık ile paydaşlarımızı bilgilendiririz.',
    'about.values.honesty': 'Dürüstlük',
    'about.values.honesty.desc': 'Müşterilerimize, çalışma arkadaşlarımıza ve tüm paydaşlarımıza karşı her zaman dürüstlük ile yaklaşırız.',
    'about.values.reliability': 'Güvenilirlik',
    'about.values.reliability.desc': 'Güven, işimizin temelindeki en önemli unsurdur.',
    'about.values.customer.desc': 'Tüm projelerimizdeki asıl amacımızın müşterilerimize katma değer yaratmak olduğunu iyi bilir ve müşterilerimizi her zaman çalışmalarımızın odağında tutarız.',
    'about.values.quality.desc': 'İşimizde yüksek ürün ve hizmet kalitesi standartlarını koruyarak müşteri memnuniyetini en üst seviyede tutarız.',
    
    // Services Section
    'services.title': 'Hizmetlerimiz',
    'services.subtitle': 'Sigorta hasarlarında kapsamlı ve profesyonel çözümler sunuyoruz',
    'services.detail': 'Detaylı Bilgi Al',
    'services.emergency.title': 'Acil Müdahale',
    'services.emergency.subtitle': '7/24 acil durum müdahale hizmeti ile yanınızdayız',
    'services.quote': 'Teklif Al',
    'services.more': 'Daha Fazla Bilgi',
    
    // Service Detail
    'serviceDetail.back': 'Hizmetlere Dön',
    'serviceDetail.details': 'Hizmet Detayları',
    'serviceDetail.equipment': 'Kullanılan Ekipmanlar',
    'serviceDetail.projects': 'Örnek Projeler',
    'serviceDetail.process': 'Çalışma Süreci',
    'serviceDetail.contact': 'Hemen İletişime Geçin',
    'serviceDetail.expert': 'Uzman ekibimiz size yardımcı olmaya hazır',
    'serviceDetail.whatsapp': 'WhatsApp ile Mesaj',
    'serviceDetail.call': 'Hemen Ara',
    'serviceDetail.home': 'Ana Sayfaya Dön',
    'serviceDetail.notFound': 'Hizmet Bulunamadı',
    'serviceDetail.notFoundDesc': 'Aradığınız hizmet mevcut değil veya kaldırılmış olabilir.',
    'serviceDetail.goBack': 'Geri Dön',
    'serviceDetail.goHome': 'Ana Sayfa',
    
    // Contact Section
    'contact.title': 'İletişim',
    'contact.subtitle': 'Size nasıl yardımcı olabileceğimizi öğrenmek için bizimle iletişime geçin',
    'contact.getInTouch': 'Bizimle İletişime Geçin',
    'contact.phone': 'Telefon',
    'contact.emergency.service': '7/24 Acil Müdahale',
    'contact.whatsapp.instant': 'Anında mesajlaşma',
    'contact.email': 'E-posta',
    'contact.email.response': '24 saat içinde yanıt',
    'contact.address': 'Adres',
    'contact.emergency.title': '🚨 Acil Durum Hattı',
    'contact.emergency.subtitle': '7/24 acil müdahale için hemen arayın',
    'contact.form.title': 'Mesaj Gönderin',
    'contact.form.name': 'Ad Soyad',
    'contact.form.phone': 'Telefon',
    'contact.form.email': 'E-posta',
    'contact.form.service': 'İlgilendiğiniz Hizmet',
    'contact.form.service.select': 'Hizmet seçin...',
    'contact.form.message': 'Mesaj',
    'contact.form.send': 'Mesaj Gönder',
    'contact.form.sending': 'Gönderiliyor...',
    'contact.form.success': 'Mesajınız başarıyla gönderildi!',
    'contact.form.success.desc': 'En kısa sürede size dönüş yapacağız.',
    'contact.form.error': 'Mesaj gönderilirken bir hata oluştu!',
    'contact.form.error.desc': 'Lütfen tekrar deneyin veya telefon ile iletişime geçin.',
    'contact.form.privacy': '* Gerekli alanlar. Kişisel verileriniz güvenle saklanır ve üçüncü taraflarla paylaşılmaz.',
    'contact.form.placeholder.name': 'Adınız ve soyadınız',
    'contact.form.placeholder.phone': '0555 123 45 67',
    'contact.form.placeholder.email': 'ornek@email.com',
    'contact.form.placeholder.message': 'Nasıl yardımcı olabiliriz?',
    
    // Form Validation
    'validation.name.required': 'Ad soyad gerekli',
    'validation.name.min': 'Ad soyad en az 2 karakter olmalı',
    'validation.email.required': 'E-posta gerekli',
    'validation.email.invalid': 'Geçerli bir e-posta adresi girin',
    'validation.phone.required': 'Telefon numarası gerekli',
    'validation.phone.invalid': 'Geçerli bir telefon numarası girin',
    'validation.message.required': 'Mesaj gerekli',
    'validation.message.min': 'Mesaj en az 10 karakter olmalı',
    
    // WhatsApp
    'whatsapp.tooltip': 'WhatsApp ile iletişime geçin',
    'whatsapp.mobile.title': 'WhatsApp ile İletişim',
    'whatsapp.mobile.subtitle': 'Hemen mesaj gönderin',
    'whatsapp.mobile.button': 'Mesaj',
    'whatsapp.default': 'Merhaba! Web sitenizden ulaşıyorum. Hizmetleriniz hakkında bilgi almak istiyorum.',
    'whatsapp.service': 'Merhaba! {service} hizmeti hakkında bilgi almak istiyorum.',
    'whatsapp.emergency': '🚨 ACİL DURUM! Hemen yardıma ihtiyacım var.',
    'whatsapp.connect': 'WhatsApp ile iletişime geçin',
    'whatsapp.contact': 'WhatsApp ile İletişim',
    'whatsapp.send': 'Hemen mesaj gönderin',
    'whatsapp.message': 'Mesaj',
    
    // References
    'references.title': 'Referanslarımız',
    'references.subtitle': 'Türkiye\'nin önde gelen firmalarına hizmet vermenin gururunu yaşıyoruz',
    'references.stats.customers': 'Kurumsal Müşteri',
    'references.stats.projects': 'Tamamlanan Proje',
    'references.stats.satisfaction': 'Müşteri Memnuniyeti',
    'references.stats.experience': 'Yıllık Deneyim',
    'references.testimonial.quote': '"AKC Mekanik İnşaat ile çalışmak bizim için her zaman güvenilir ve kaliteli hizmet almak anlamına geliyor. Profesyonel ekipleri ve zamanında teslimat konusundaki başarıları takdire şayan."',
    'references.testimonial.author': '- Kurumsal Müşteri',
    
    // Footer
    'footer.company': 'AKC Mekanik İnşaat',
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.quick': 'Hızlı Linkler',
    'footer.services': 'Hizmetler',
    'footer.contact': 'İletişim',
    'footer.emergency': 'Acil Durum',
    'footer.social': 'Sosyal Medya',
    'footer.emergency.title': 'ACİL DURUM HATTI - 7/24 HİZMET',
    'footer.contact.phone': 'Telefon',
    'footer.contact.email': 'E-posta',
    'footer.contact.address': 'Adres',
    'footer.quickLinks.title': 'Hızlı Erişim',
    'footer.certifications.title': 'Sertifikalarımız & Üyeliklerimiz',
    'footer.copyright': '© {year} AKC Mekanik İnşaat. Tüm hakları saklıdır.',
    
    // Contact extended
    'contact.form.disclaimer': '* Gerekli alanlar. Kişisel verileriniz güvenle saklanır ve üçüncü taraflarla paylaşılmaz.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.references': 'References',
    'nav.contact': 'Contact',
    'nav.emergency': '24/7 EMERGENCY RESPONSE',
    'nav.call': 'Call Now',
    'nav.whatsapp': 'WhatsApp',
    
    // Hero Section
    'hero.badge': 'Turkey\'s Trusted Damage Repair Expert',
    'hero.explore': 'Explore Our Services',
    'hero.emergency': 'Emergency Call',
    'hero.call': 'Call',
    'hero.message': 'Message',
    
    // Stats
    'stats.experience': 'Years of Experience',
    'stats.projects': 'Successful Projects',
    'stats.emergency': 'Emergency Response',
    'stats.satisfaction': 'Customer Satisfaction',
    
    // About Section
    'about.years': 'With 30 Years of Experience, We Are Here for You',
    'about.values.transparency': 'Transparency',
    'about.values.emergency': '24/7 Emergency Response Service',
    'about.values.expert': 'Expert and Certified Team',
    'about.values.technology': 'Technological Infrastructure',
    'about.values.customer': 'Customer Focus',
    'about.values.quality': 'Quality',
    'about.values.title': 'Our Corporate Values',
    'about.values.subtitle': 'We provide the best service to our customers with the values that are the foundation of our business',
    'about.values.transparency.desc': 'We respect the right of our partners and customers to information in all our business processes and inform our stakeholders with complete transparency.',
    'about.values.honesty': 'Honesty',
    'about.values.honesty.desc': 'We always approach our customers, colleagues and all stakeholders with honesty.',
    'about.values.reliability': 'Reliability',
    'about.values.reliability.desc': 'Trust is the most important element at the foundation of our business.',
    'about.values.customer.desc': 'We know well that the main purpose of all our projects is to create added value for our customers and we always keep our customers at the center of our work.',
    'about.values.quality.desc': 'We maintain the highest level of customer satisfaction by maintaining high product and service quality standards in our work.',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'We provide comprehensive and professional solutions for insurance damages',
    'services.detail': 'Get Detailed Information',
    'services.emergency.title': 'Emergency Response',
    'services.emergency.subtitle': 'We are here for you with 24/7 emergency response service',
    'services.quote': 'Get Quote',
    'services.more': 'More Information',
    
    // Service Detail
    'serviceDetail.back': 'Back to Services',
    'serviceDetail.details': 'Service Details',
    'serviceDetail.equipment': 'Equipment Used',
    'serviceDetail.projects': 'Sample Projects',
    'serviceDetail.process': 'Work Process',
    'serviceDetail.contact': 'Contact Us Now',
    'serviceDetail.expert': 'Our expert team is ready to help you',
    'serviceDetail.whatsapp': 'Message via WhatsApp',
    'serviceDetail.call': 'Call Now',
    'serviceDetail.home': 'Back to Homepage',
    'serviceDetail.notFound': 'Service Not Found',
    'serviceDetail.notFoundDesc': 'The service you are looking for does not exist or may have been removed.',
    'serviceDetail.goBack': 'Go Back',
    'serviceDetail.goHome': 'Homepage',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with us to learn how we can help you',
    'contact.getInTouch': 'Get in Touch',
    'contact.phone': 'Phone',
    'contact.emergency.service': '24/7 Emergency Response',
    'contact.whatsapp.instant': 'Instant messaging',
    'contact.email': 'Email',
    'contact.email.response': 'Response within 24 hours',
    'contact.address': 'Address',
    'contact.emergency.title': '🚨 Emergency Hotline',
    'contact.emergency.subtitle': 'Call immediately for 24/7 emergency response',
    'contact.form.title': 'Send Message',
    'contact.form.name': 'Full Name',
    'contact.form.phone': 'Phone',
    'contact.form.email': 'Email',
    'contact.form.service': 'Service of Interest',
    'contact.form.service.select': 'Select service...',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Your message has been sent successfully!',
    'contact.form.success.desc': 'We will get back to you as soon as possible.',
    'contact.form.error': 'An error occurred while sending the message!',
    'contact.form.error.desc': 'Please try again or contact us by phone.',
    'contact.form.privacy': '* Required fields. Your personal data is stored securely and not shared with third parties.',
    'contact.form.placeholder.name': 'Your full name',
    'contact.form.placeholder.phone': '+90 555 123 45 67',
    'contact.form.placeholder.email': 'example@email.com',
    'contact.form.placeholder.message': 'How can we help you?',
    
    // Form Validation
    'validation.name.required': 'Full name is required',
    'validation.name.min': 'Full name must be at least 2 characters',
    'validation.email.required': 'Email is required',
    'validation.email.invalid': 'Please enter a valid email address',
    'validation.phone.required': 'Phone number is required',
    'validation.phone.invalid': 'Please enter a valid phone number',
    'validation.message.required': 'Message is required',
    'validation.message.min': 'Message must be at least 10 characters',
    
    // WhatsApp
    'whatsapp.tooltip': 'Contact via WhatsApp',
    'whatsapp.mobile.title': 'WhatsApp Contact',
    'whatsapp.mobile.subtitle': 'Send message now',
    'whatsapp.mobile.button': 'Message',
    'whatsapp.default': 'Hello! I am contacting you from your website. I would like to get information about your services.',
    'whatsapp.service': 'Hello! I would like to get information about the {service} service.',
    'whatsapp.emergency': '🚨 EMERGENCY! I need help immediately.',
    'whatsapp.connect': 'Contact via WhatsApp',
    'whatsapp.contact': 'WhatsApp Contact',
    'whatsapp.send': 'Send message now',
    'whatsapp.message': 'Message',
    
    // References
    'references.title': 'Our References',
    'references.subtitle': 'We are proud to serve Turkey\'s leading companies',
    'references.stats.customers': 'Corporate Clients',
    'references.stats.projects': 'Completed Projects',
    'references.stats.satisfaction': 'Customer Satisfaction',
    'references.stats.experience': 'Years of Experience',
    'references.testimonial.quote': '"Working with AKC Mechanical Construction always means reliable and quality service for us. Their professional teams and success in timely delivery are commendable."',
    'references.testimonial.author': '- Corporate Client',
    
    // Footer
    'footer.company': 'AKC Mechanical Construction',
    'footer.rights': 'All rights reserved.',
    'footer.quick': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.emergency': 'Emergency',
    'footer.social': 'Social Media',
    'footer.emergency.title': 'EMERGENCY HOTLINE - 24/7 SERVICE',
    'footer.contact.phone': 'Phone',
    'footer.contact.email': 'Email',
    'footer.contact.address': 'Address',
    'footer.quickLinks.title': 'Quick Links',
    'footer.certifications.title': 'Our Certificates & Memberships',
    'footer.copyright': '© {year} AKC Mechanical Construction. All rights reserved.',
    
    // Contact extended
    'contact.form.disclaimer': '* Required fields. Your personal data is stored securely and not shared with third parties.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('akc-language') as Language;
    if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('akc-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage: changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 