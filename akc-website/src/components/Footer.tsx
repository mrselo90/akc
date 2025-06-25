import React from 'react';
import { useSiteData } from '../context/SiteDataContext';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { siteData } = useSiteData();
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Emergency Banner */}
      <div className="bg-red-600 py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center text-lg font-bold">
              <span className="text-2xl mr-2">🚨</span>
{t('footer.emergency.title')}
            </div>
            <a
              href={`tel:${siteData.contactInfo.phone}`}
              className="bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteData.contactInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 flex flex-col space-y-6">
              <div className="flex items-center mb-2 md:mb-6">
                <div className="text-2xl sm:text-3xl font-bold">
                  <span className="text-blue-400">AKC</span>
                  <span className="text-orange-500 ml-2">Mekanik İnşaat</span>
                </div>
              </div>
              <p className="text-gray-300 mb-2 md:mb-6 leading-relaxed text-base sm:text-lg">
                {siteData.companyInfo.description[language]}
              </p>
              {/* Contact Info */}
              <div className="space-y-3 md:space-y-4">
                {/* Phone */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    {/* Phone Icon */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center sm:items-start w-full">
                    <div className="font-semibold text-sm sm:text-base">{t('footer.contact.phone')}</div>
                    <a href={`tel:${siteData.contactInfo.phone}`} className="text-orange-400 hover:text-orange-300 text-sm sm:text-base block">
                      {siteData.contactInfo.phone}
                    </a>
                  </div>
                </div>
                {/* Email */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    {/* Mail Icon */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center sm:items-start w-full">
                    <div className="font-semibold text-sm sm:text-base">{t('footer.contact.email')}</div>
                    <a href={`mailto:${siteData.contactInfo.email}`} className="text-blue-400 hover:text-blue-300 text-sm sm:text-base block break-all">
                      {siteData.contactInfo.email}
                    </a>
                  </div>
                </div>
                {/* Address */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-lg flex items-center justify-center mt-1">
                    {/* Address Icon */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center sm:items-start w-full">
                    <div className="font-semibold text-sm sm:text-base">{t('footer.contact.address')}</div>
                    <div className="text-gray-300 text-sm sm:text-base break-words text-center sm:text-left w-full">
                      {siteData.contactInfo.address[language].split(',').map((line: string, idx: number) => (
                        <span key={idx}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* WhatsApp Button */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    {/* WhatsApp Icon */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 0 5.37 0 12a11.93 11.93 0 001.64 6.06L0 24l6.31-1.65A12.07 12.07 0 0012 24c6.63 0 12-5.37 12-12a11.93 11.93 0 00-3.48-8.52zM12 22a9.93 9.93 0 01-5.09-1.39l-.36-.21-3.75.98.99-3.65-.23-.37A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01s-.5.07-.76.34c-.26.27-1 1-.98 2.44.02 1.44 1.02 2.84 1.16 3.04.14.2 2.01 3.08 4.87 4.2.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                    </svg>
                  </div>
                  <a
                    href="https://wa.me/905372959612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center sm:justify-start bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition-colors mt-2 text-sm sm:text-base w-full max-w-xs"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            {/* Quick Links */}
            <div className="mt-8 md:mt-0">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-orange-400">{t('footer.quickLinks.title')}</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base"
                  >
                    {t('nav.home')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base"
                  >
                    {t('nav.about')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base"
                  >
                    {t('nav.services')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('references')}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base"
                  >
                    {t('nav.references')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base"
                  >
                    {t('nav.contact')}
                  </button>
                </li>
              </ul>
            </div>
            {/* Services */}
            <div className="mt-8 md:mt-0">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-blue-400">{t('nav.services')}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {siteData.services.slice(0, 4).map((service: any) => (
                  <li key={service.id}>
                    <a
                      href={`/services/${service.slug}`}
                      className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer text-sm sm:text-base block"
                    >
                      {service.title[language]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Certifications */}
          <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-700">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-green-400">{t('footer.certifications.title')}</h3>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
                <div className="bg-gray-800 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🏆</div>
                  <div className="text-xs sm:text-sm text-gray-300">ISO 9001</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">✅</div>
                  <div className="text-xs sm:text-sm text-gray-300">TSE Belgeli</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🛡️</div>
                  <div className="text-xs sm:text-sm text-gray-300">Sigortalı</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">⚡</div>
                  <div className="text-xs sm:text-sm text-gray-300">Elektrik Yeterlilik</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WhatsApp Sticky Bar for Mobile */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex justify-center pointer-events-none">
        <a
          href="https://wa.me/905372959612"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-t-2xl shadow-lg mb-2 animate-bounce"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 0 5.37 0 12a11.93 11.93 0 001.64 6.06L0 24l6.31-1.65A12.07 12.07 0 0012 24c6.63 0 12-5.37 12-12a11.93 11.93 0 00-3.48-8.52zM12 22a9.93 9.93 0 01-5.09-1.39l-.36-.21-3.75.98.99-3.65-.23-.37A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01s-.5.07-.76.34c-.26.27-1 1-.98 2.44.02 1.44 1.02 2.84 1.16 3.04.14.2 2.01 3.08 4.87 4.2.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
          </svg>
          WhatsApp ile Hızlı İletişim
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              {t('footer.copyright').replace('{year}', currentYear.toString())}
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors"
                title="Yukarı çık"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
