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
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="text-3xl font-bold">
                  <span className="text-blue-400">AKC</span>
                  <span className="text-orange-500 ml-2">Mekanik İnşaat</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                {siteData.companyInfo.description[language]}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">{t('footer.contact.phone')}</div>
                                <a href={`tel:${siteData.contactInfo.phone}`} className="text-orange-400 hover:text-orange-300">
              {siteData.contactInfo.phone}
            </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">{t('footer.contact.email')}</div>
                                <a href={`mailto:${siteData.contactInfo.email}`} className="text-blue-400 hover:text-blue-300">
              {siteData.contactInfo.email}
            </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">{t('footer.contact.address')}</div>
                    <div className="text-gray-300">{siteData.contactInfo.address[language]}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-400">{t('footer.quickLinks.title')}</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
{t('nav.home')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
{t('nav.about')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
{t('nav.services')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('references')}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
{t('nav.references')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
{t('nav.contact')}
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-400">{t('nav.services')}</h3>
              <ul className="space-y-3">
                {siteData.services.slice(0, 4).map((service: any) => (
                  <li key={service.id}>
                    <div className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                      {service.title[language]}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-6 text-green-400">{t('footer.certifications.title')}</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="text-sm text-gray-300">ISO 9001</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">✅</div>
                  <div className="text-sm text-gray-300">TSE Belgeli</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🛡️</div>
                  <div className="text-sm text-gray-300">Sigortalı</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm text-gray-300">Elektrik Yeterlilik</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
