import React, { useEffect, useState } from 'react';

const Hero = ({ title, subtitle, phone, ctaPrimary, ctaSecondary }: any) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmergencyCall = () => {
    window.open(`tel:${phone}`, '_self');
  };

  const stats = [
    { number: '30+', label: 'Yıllık Deneyim' },
    { number: '1000+', label: 'Başarılı Proje' },
    { number: '7/24', label: 'Acil Müdahale' },
    { number: '99%', label: 'Müşteri Memnuniyeti' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-32">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <span className="text-yellow-300 mr-2">⭐</span>
            <span className="font-semibold">Türkiye'nin Güvenilir Hasar Onarım Uzmanı</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">{title.split(' ').slice(0, 3).join(' ')}</span>
            <span className="block text-yellow-300">{title.split(' ').slice(3).join(' ')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToServices}
              className="group bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/25 transform hover:-translate-y-2 transition-all duration-300 flex items-center"
            >
              {ctaPrimary || 'Hizmetlerimizi Keşfet'}
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button
              onClick={handleEmergencyCall}
              className="group bg-transparent border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center"
            >
              <svg className="w-6 h-6 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {ctaSecondary || 'Acil Arama'}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-5xl font-bold mb-2 text-yellow-300">{stat.number}</div>
              <div className="text-gray-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 