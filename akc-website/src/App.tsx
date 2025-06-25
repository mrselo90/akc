import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteDataProvider } from './context/SiteDataContext';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import ServiceDetail from './components/ServiceDetail';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <SiteDataProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/hizmetler/:id" element={
                <>
                  <Header />
                  <ServiceDetail />
                  <Footer />
                  <WhatsAppButton />
                </>
              } />
              <Route path="/" element={
                <>
                  <Header />
                  <Hero />
                  <About />
                  <Services />
                  <References />
                  <Contact />
                  <Footer />
                  <WhatsAppButton />
                </>
              } />
            </Routes>
          </div>
        </Router>
      </SiteDataProvider>
    </LanguageProvider>
  );
}

export default App;
