import React, { useState, useEffect } from 'react';
import { useSiteData } from '../context/SiteDataContext';
import { useLanguage } from '../context/LanguageContext';

const WhatsAppButton = () => {
  const { siteData } = useSiteData();
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleWhatsAppClick = () => {
    try {
      const phoneNumber = siteData.contactInfo.whatsapp?.replace(/\s+/g, '').replace('+', '') || '905372959612';
      const message = encodeURIComponent(t('whatsapp.default'));
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      
      // Open in new tab/window
      const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      // Fallback for popup blockers
      if (!newWindow) {
        window.location.href = whatsappUrl;
      }
    } catch (error) {
      console.error('WhatsApp açılırken hata oluştu:', error);
      // Fallback to phone call
      window.location.href = `tel:${siteData.contactInfo.phone}`;
    }
  };

  return (
    <>
      {/* Desktop WhatsApp Button */}
      {!isMobile && (
        <div
          className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          role="region"
          aria-label="WhatsApp iletişim butonu"
        >
          <div className="relative">
            {/* Tooltip */}
            <div
              className={`absolute bottom-full right-0 mb-4 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 pointer-events-none ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              role="tooltip"
              aria-hidden={!isHovered}
            >
{t('whatsapp.connect')}
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onFocus={() => setIsHovered(true)}
              onBlur={() => setIsHovered(false)}
              className="group relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center whatsapp-pulse hover:animate-none focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 gpu-accelerated"
              aria-label="WhatsApp ile mesaj gönder"
              type="button"
            >
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75 pointer-events-none"></div>
              
              {/* WhatsApp Icon */}
              <svg
                className="w-8 h-8 text-white relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Mobile WhatsApp Bar */}
      {isMobile && (
        <div 
          className="fixed bottom-0 left-0 right-0 z-50 no-print"
          role="region"
          aria-label="WhatsApp iletişim çubuğu"
        >
          <div className="bg-green-500 text-white p-4 flex items-center justify-between shadow-2xl border-t-4 border-green-600">
            <div className="flex items-center min-w-0 flex-1">
              <div className="flex-shrink-0 mr-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm">{t('whatsapp.contact')}</div>
                <div className="text-xs opacity-90 truncate">{t('whatsapp.send')}</div>
              </div>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-green-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-500 ml-4"
              aria-label="WhatsApp ile mesaj gönder"
              type="button"
            >
{t('whatsapp.message')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton; 