import React, { useEffect, useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { siteData } = useSiteData();
  const { language, t } = useLanguage();
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

  const corporateValues = [
    {
      title: t('about.values.transparency'),
      description: t('about.values.transparency.desc'),
      icon: "🔍",
      color: "blue"
    },
    {
      title: t('about.values.honesty'),
      description: t('about.values.honesty.desc'),
      icon: "🤝",
      color: "green"
    },
    {
      title: t('about.values.reliability'),
      description: t('about.values.reliability.desc'),
      icon: "🛡️",
      color: "purple"
    },
    {
      title: t('about.values.customer'),
      description: t('about.values.customer.desc'),
      icon: "🎯",
      color: "orange"
    },
    {
      title: t('about.values.quality'),
      description: t('about.values.quality.desc'),
      icon: "⭐",
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      green: "bg-green-50 border-green-200 text-green-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700",
      yellow: "bg-yellow-50 border-yellow-200 text-yellow-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {siteData.about.title[language]}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteData.about.description[language]}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                {language === 'tr' ? 'Misyonumuz' : 'Our Mission'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {siteData.about.mission[language]}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">🚀</span>
                {language === 'tr' ? 'Vizyonumuz' : 'Our Vision'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {siteData.about.vision[language]}
              </p>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              {language === 'tr' ? 'Neden Bizi Seçmelisiniz?' : 'Why Choose Us?'}
            </h3>
            
            <div className="grid gap-6">
              {siteData.about.features[language].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature}</h4>
                    <p className="text-gray-600 text-sm">
                      {index === 0 && (language === 'tr' ? 'İş süreçlerimizde şeffaflık ve müşteri memnuniyeti önceliğimizdir.' : 'Transparency and customer satisfaction are our priority in our business processes.')}
                      {index === 1 && (language === 'tr' ? 'Acil durumlarında 7/24 hızlı müdahale ekibimizle yanınızdayız.' : 'We are with you 24/7 with our rapid response team in emergencies.')}
                      {index === 2 && (language === 'tr' ? 'Sertifikalı ve deneyimli uzman kadromuzla kaliteli hizmet sunuyoruz.' : 'We provide quality service with our certified and experienced expert staff.')}
                      {index === 3 && (language === 'tr' ? 'Modern teknoloji ve ekipmanlarla en iyi sonuçları elde ediyoruz.' : 'We achieve the best results with modern technology and equipment.')}
                      {index === 4 && (language === 'tr' ? 'Müşteri ihtiyaçlarını anlayarak özel çözümler geliştiriyoruz.' : 'We develop special solutions by understanding customer needs.')}
                      {index === 5 && (language === 'tr' ? 'Kaliteli malzeme ve işçilikle uzun ömürlü çözümler sunuyoruz.' : 'We offer long-lasting solutions with quality materials and workmanship.')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-blue-900 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">30+</div>
              <div className="text-blue-100">{t('stats.experience')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">1000+</div>
              <div className="text-blue-100">{t('stats.projects')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">24/7</div>
              <div className="text-blue-100">{t('stats.emergency')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">99%</div>
              <div className="text-blue-100">{t('stats.satisfaction')}</div>
            </div>
          </div>
        </div>

        {/* Corporate Values Section */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('about.values.title')}</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateValues.map((value, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${getColorClasses(value.color)}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
