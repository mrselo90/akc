import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { siteData } = useSiteData();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t('whatsapp.emergency'));
    const whatsappUrl = `https://wa.me/${siteData.contactInfo.whatsapp?.replace(/\D/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'
    }`}>
      {/* Emergency Bar */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <span className="font-semibold">{t('nav.emergency')}</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">{siteData.contactInfo.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.open(`tel:${siteData.contactInfo.phone}`, '_self')}
              className="bg-white text-red-600 px-3 py-1 rounded font-semibold hover:bg-red-50 transition-colors"
              aria-label={t('nav.call')}
            >
              📞 {t('nav.call')}
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white px-3 py-1 rounded font-semibold hover:bg-green-600 transition-colors"
              aria-label={t('nav.whatsapp')}
            >
              💬 {t('nav.whatsapp')}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AKC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AKC Mekanik İnşaat</h1>
              <p className="text-sm text-gray-600 hidden sm:block">Güvenilir Hasar Onarım Uzmanı</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('references')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('nav.references')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('nav.contact')}
            </button>
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium border border-gray-300 rounded-lg px-3 py-1 hover:border-blue-600"
              aria-label={`Switch to ${language === 'tr' ? 'English' : 'Turkish'}`}
            >
              <span className="text-sm">{language === 'tr' ? '🇹🇷' : '🇺🇸'}</span>
              <span className="text-xs font-semibold">{language === 'tr' ? 'TR' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors border border-gray-300 rounded-lg px-2 py-1"
              aria-label={`Switch to ${language === 'tr' ? 'English' : 'Turkish'}`}
            >
              <span className="text-sm">{language === 'tr' ? '🇹🇷' : '🇺🇸'}</span>
              <span className="text-xs font-semibold">{language === 'tr' ? 'TR' : 'EN'}</span>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('references')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                {t('nav.references')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
