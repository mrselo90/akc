import React, { useEffect, useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';

const About = () => {
  const { siteData } = useSiteData();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hakkımızda
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            30 yıllık deneyimimizle sigorta hasarlarında güvenilir çözüm ortağınızız
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {siteData.about.title}
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {siteData.about.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-orange-50 rounded-2xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">30+</div>
                <div className="text-gray-700 font-medium">Yıllık Deneyim</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-2xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-700 font-medium">Başarılı Proje</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {siteData.about.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-orange-500 to-blue-600 rounded-3xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Misyonumuz</h4>
                <p className="text-orange-100 mb-6 leading-relaxed">
                  {siteData.about.mission}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="text-2xl mb-2">🏆</div>
                    <div className="font-semibold">Kalite</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="font-semibold">Hız</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="text-2xl mb-2">🤝</div>
                    <div className="font-semibold">Güven</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="font-semibold">Çözüm</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-float">
                ⭐
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-xl animate-float" style={{animationDelay: '1s'}}>
                ✅
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Vizyonumuz</h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {siteData.about.vision}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
