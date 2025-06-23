import React, { useEffect, useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';

const References = () => {
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

    const element = document.getElementById('references');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="references" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Referanslarımız
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Türkiye'nin önde gelen firmalarına hizmet vermenin gururunu yaşıyoruz
          </p>
        </div>

        {/* Reference Logos */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {siteData.references.map((reference: any, index: number) => (
            <div
              key={reference.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {reference.logo}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{reference.name}</h3>
                <p className="text-gray-600 text-sm">{reference.sector}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium">Kurumsal Müşteri</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-700 font-medium">Tamamlanan Proje</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
            <div className="text-gray-700 font-medium">Müşteri Memnuniyeti</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-purple-600 mb-2">30</div>
            <div className="text-gray-700 font-medium">Yıllık Deneyim</div>
          </div>
        </div>

        {/* Testimonial */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl p-12 text-white">
            <div className="text-6xl mb-6">💬</div>
            <blockquote className="text-2xl font-medium mb-6 italic">
              "AKC Mekanik İnşaat ile çalışmak bizim için her zaman güvenilir ve kaliteli hizmet almak anlamına geliyor. Profesyonel ekipleri ve zamanında teslimat konusundaki başarıları takdire şayan."
            </blockquote>
            <div className="font-bold text-xl">- Kurumsal Müşteri</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
