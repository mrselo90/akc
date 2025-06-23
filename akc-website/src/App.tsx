import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteDataProvider } from './context/SiteDataContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

function MainWebsite() {
  return (
    <SiteDataProvider>
      <MainWebsiteContent />
    </SiteDataProvider>
  );
}

function MainWebsiteContent() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <References />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainWebsite />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <SiteDataProvider>
              <AdminDashboard />
            </SiteDataProvider>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
