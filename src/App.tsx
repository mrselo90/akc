import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AdminServices from './admin/AdminServices';
import { SiteDataProvider, useSiteData } from './context/SiteDataContext';

function MainWebsite() {
  const { siteData } = useSiteData();
  
  return (
    <div className="min-h-screen">
      <Header contactInfo={siteData.contactInfo} />
      <Hero 
        title={siteData.hero.title}
        subtitle={siteData.hero.subtitle}
        phone={siteData.contactInfo.phone}
        ctaPrimary={siteData.hero.ctaPrimary}
        ctaSecondary={siteData.hero.ctaSecondary}
      />
      <About aboutData={siteData.about} />
      <Services services={siteData.services} />
      <References references={siteData.references} />
      <Contact contactInfo={siteData.contactInfo} />
      <Footer 
        contactInfo={siteData.contactInfo}
        services={siteData.services}
        footerData={siteData.footer}
      />
    </div>
  );
}

function App() {
  return (
    <SiteDataProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainWebsite />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/services" element={<AdminServices />} />
          </Routes>
        </div>
      </Router>
    </SiteDataProvider>
  );
}

export default App; 