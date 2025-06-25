import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';
import { useLanguage } from '../context/LanguageContext';

const ServiceDetail = () => {
  const { id } = useParams();
  const { siteData } = useSiteData();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const service = siteData.services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{t('serviceDetail.notFound')}</h1>
          <p className="text-gray-600 mb-8">{t('serviceDetail.notFoundDesc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate(-1)} 
              className="btn-secondary"
              aria-label="Önceki sayfaya dön"
            >
              ← {t('serviceDetail.goBack')}
            </button>
            <button 
              onClick={() => navigate('/')} 
              className="btn-primary"
              aria-label="Ana sayfaya git"
            >
              🏠 {t('serviceDetail.goHome')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '905372959612';
    const message = encodeURIComponent(t('whatsapp.service').replace('{service}', service.title[language]));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <button 
            onClick={() => navigate(-1)} 
            className="mb-8 text-white/80 hover:text-white font-semibold flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500 rounded-lg px-2 py-1"
            aria-label="Önceki sayfaya dön"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('serviceDetail.back')}
          </button>
          
          <div className="flex items-center mb-6">
            <div className="text-5xl mr-6" role="img" aria-label={`${service.title[language]} ikonu`}>
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{service.title[language]}</h1>
          </div>
          
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
            {service.description[language]}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Content Sections */}
            <div className="p-8 md:p-12 space-y-8">
              {service.details && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-orange-600 flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('serviceDetail.details')}
                  </h2>
                  <div className="prose prose-lg text-gray-700">
                    <p className="leading-relaxed whitespace-pre-line">{service.details[language]}</p>
                  </div>
                </div>
              )}

              {service.equipment && service.equipment[language] && service.equipment[language].length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-orange-600 flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    {t('serviceDetail.equipment')}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.equipment[language].map((eq, i) => (
                      <div key={i} className="flex items-center p-4 bg-gray-50 rounded-xl">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{eq}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.projects && service.projects[language] && service.projects[language].length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-orange-600 flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {t('serviceDetail.projects')}
                  </h2>
                  <div className="space-y-3">
                    {service.projects[language].map((pr, i) => (
                      <div key={i} className="flex items-start p-4 bg-blue-50 rounded-xl">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{pr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.process && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-orange-600 flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    {t('serviceDetail.process')}
                  </h2>
                  <div className="prose prose-lg text-gray-700">
                    <p className="leading-relaxed whitespace-pre-line">{service.process[language]}</p>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('serviceDetail.contact')}</h3>
                <p className="text-gray-600">{t('serviceDetail.expert')}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex-1 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center whatsapp-pulse hover:animate-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  aria-label={`${service.title[language]} hizmeti için WhatsApp ile iletişim`}
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  {t('serviceDetail.whatsapp')}
                </button>
                
                <a
                  href={`tel:+905372959612`}
                  className="flex-1 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  aria-label="Telefon ile ara"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t('serviceDetail.call')}
                </a>
              </div>
              
              <div className="text-center mt-6">
                <button
                  onClick={() => navigate('/')}
                  className="text-gray-600 hover:text-orange-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-lg px-3 py-1"
                  aria-label="Ana sayfaya git"
                >
                  ← {t('serviceDetail.home')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail; 