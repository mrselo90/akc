import React, { useState, useEffect } from 'react';

interface HeaderProps {
  contactInfo: {
    phone: string;
    email: string;
    emergencyPhone?: string;
  };
}

const Header: React.FC<HeaderProps> = ({ contactInfo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    }
    setIsMobileMenuOpen(false);
  };

  const handlePhoneCall = () => {
    window.open(`tel:${contactInfo.phone}`, '_self');
  };

  const handleEmergencyCall = () => {
    window.open(`tel:${contactInfo.emergencyPhone || contactInfo.phone}`, '_self');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="text-2xl md:text-3xl font-bold cursor-pointer"
            >
              <span className={isScrolled ? 'text-blue-600' : 'text-white'}>AKC</span>
              <span className={isScrolled ? 'text-orange-500' : 'text-yellow-300'}>Mekanik İnşaat</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-yellow-300'
              }`}
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-yellow-300'
              }`}
            >
              Hakkımızda
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-yellow-300'
              }`}
            >
              Hizmetler
            </button>
            <button
              onClick={() => scrollToSection('references')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-yellow-300'
              }`}
            >
              Referanslar
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-yellow-300'
              }`}
            >
              İletişim
            </button>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Emergency Call Button */}
            <button
              onClick={handleEmergencyCall}
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Acil
            </button>

            {/* Regular Call Button */}
            <button
              onClick={handlePhoneCall}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center ${
                isScrolled 
                  ? 'bg-orange-500 text-white hover:bg-orange-600' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {contactInfo.phone}
            </button>

            {/* Admin Panel Button */}
            <a
              href="/admin"
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                isScrolled 
                  ? 'bg-gray-800 text-white hover:bg-gray-900' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              Admin
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg"
          >
            <svg className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mb-4">
            <nav className="py-4 px-6 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Hakkımızda
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Hizmetler
              </button>
              <button
                onClick={() => scrollToSection('references')}
                className="block w-full text-left text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Referanslar
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                İletişim
              </button>
              
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <button
                  onClick={handleEmergencyCall}
                  className="w-full bg-red-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Acil Arama
                </button>
                
                <button
                  onClick={handlePhoneCall}
                  className="w-full bg-orange-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {contactInfo.phone}
                </button>

                <a
                  href="/admin"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center"
                >
                  Admin Paneli
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 