import React, { useState, useEffect } from 'react';
import { useSiteData } from '../context/SiteDataContext';

const Services = () => {
  const { siteData } = useSiteData();
  const [selectedService, setSelectedService] = useState(0);
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

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const serviceIcons = {
    '🏠': (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    '🏢': (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    '⚡': (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    '🏗️': (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hizmetlerimiz
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sigorta hasarlarında kapsamlı ve profesyonel çözümler sunuyoruz
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {siteData.services.map((service: any, index: number) => (
            <div
              key={service.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2 ${
                selectedService === index ? 'ring-4 ring-orange-500 shadow-2xl' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedService(index)}
            >
              {/* Icon Header */}
              <div className={`p-8 text-center transition-all duration-300 ${
                selectedService === index ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' : 'bg-gray-100 text-orange-600'
              }`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  {serviceIcons[service.icon as keyof typeof serviceIcons] || <span className="text-3xl">{service.icon}</span>}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  Detaylı Bilgi Al
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Service Details */}
        {selectedService !== null && (
          <div className={`bg-white rounded-2xl shadow-2xl p-8 md:p-12 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {siteData.services[selectedService]?.title}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {siteData.services[selectedService]?.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {siteData.services[selectedService]?.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary">
                    Teklif Al
                  </button>
                  <button className="btn-secondary">
                    Daha Fazla Bilgi
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-orange-500 to-blue-600 rounded-2xl p-8 text-white text-center">
                  <div className="text-6xl mb-4">
                    {serviceIcons[siteData.services[selectedService]?.icon as keyof typeof serviceIcons] || siteData.services[selectedService]?.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Acil Müdahale</h4>
                  <p className="text-orange-100 mb-6">
                    7/24 acil durum müdahale hizmeti ile yanınızdayız
                  </p>
                  <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                    Hemen Ara
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
