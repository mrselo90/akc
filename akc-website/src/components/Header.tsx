import React, { useState, useEffect } from 'react';
import { useSiteData } from '../context/SiteDataContext';

const Header = () => {
  const { siteData } = useSiteData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };



  const menuItems = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'about', label: 'Hakkımızda' },
    { id: 'services', label: 'Hizmetlerimiz' },
    { id: 'references', label: 'Referanslar' },
    { id: 'contact', label: 'İletişim' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <span className="text-orange-400 mr-2">📞</span>
              {siteData.contactInfo.phone}
            </span>
            <span className="flex items-center">
              <span className="text-orange-400 mr-2">✉️</span>
              {siteData.contactInfo.email}
            </span>
          </div>
          <div className="hidden md:block">
            <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-semibold">
              🚨 7/24 ACİL MÜDAHALE
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-8 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-2xl' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-3xl font-bold">
                <span className="text-blue-900">AKC</span>
                <span className="text-orange-600 ml-2">Mekanik İnşaat</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${siteData.contactInfo.phone}`}
                className="btn-primary"
              >
                Hemen Ara
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 hover:text-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href={`tel:${siteData.contactInfo.phone}`}
                  className="btn-primary text-center mt-4"
                >
                  Hemen Ara
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
