import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';
import { Service, Reference } from '../types';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { 
    siteData, 
    updateHero, 
    updateAbout, 
    updateServices, 
    updateContactInfo, 
    updateCompanyInfo,
    updateReferences 
  } = useSiteData();
  
  const [activeTab, setActiveTab] = useState('hero');
  const [message, setMessage] = useState('');
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [references, setReferences] = useState<Reference[]>([]);
  const [editingRef, setEditingRef] = useState<Reference | null>(null);

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('akc-admin-token');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  // Initialize state with context data
  useEffect(() => {
    setServices(siteData.services);
    setReferences(siteData.references);
  }, [siteData.services, siteData.references]);

  const handleLogout = () => {
    localStorage.removeItem('akc-admin-token');
    navigate('/admin');
  };

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  const tabs = [
    { id: 'hero', name: 'Ana Sayfa', icon: '🏠' },
    { id: 'about', name: 'Hakkımızda', icon: 'ℹ️' },
    { id: 'services', name: 'Hizmetler', icon: '🔧' },
    { id: 'references', name: 'Referanslar', icon: '🏢' },
    { id: 'contact', name: 'İletişim', icon: '📞' },
    { id: 'company', name: 'Şirket Bilgileri', icon: '🏛️' },
  ];

  const renderHeroTab = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Ana Sayfa Yönetimi</h3>
      <div>
        <label className="block text-sm font-medium mb-2">Başlık</label>
        <input
          type="text"
          value={siteData.hero.title}
          onChange={(e) => updateHero({ title: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Alt Başlık</label>
        <textarea
          value={siteData.hero.subtitle}
          onChange={(e) => updateHero({ subtitle: e.target.value })}
          className="w-full p-3 border rounded-lg h-32"
        />
      </div>
      <button
        onClick={() => showMessage('Ana sayfa bilgileri güncellendi!')}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Kaydet
      </button>
    </div>
  );

  const renderAboutTab = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Hakkımızda Yönetimi</h3>
      <div>
        <label className="block text-sm font-medium mb-2">Başlık</label>
        <input
          type="text"
          value={siteData.about.title}
          onChange={(e) => updateAbout({ title: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Açıklama</label>
        <textarea
          value={siteData.about.description}
          onChange={(e) => updateAbout({ description: e.target.value })}
          className="w-full p-3 border rounded-lg h-32"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Misyon</label>
        <textarea
          value={siteData.about.mission}
          onChange={(e) => updateAbout({ mission: e.target.value })}
          className="w-full p-3 border rounded-lg h-24"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Vizyon</label>
        <textarea
          value={siteData.about.vision}
          onChange={(e) => updateAbout({ vision: e.target.value })}
          className="w-full p-3 border rounded-lg h-24"
        />
      </div>
      <button
        onClick={() => showMessage('Hakkımızda bilgileri güncellendi!')}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Kaydet
      </button>
    </div>
  );

  const renderServicesTab = () => {

    const addService = () => {
      const newService: Service = {
        id: `service-${Date.now()}`,
        title: 'Yeni Hizmet',
        description: 'Hizmet açıklaması',
        icon: '🔧',
        features: ['Özellik 1', 'Özellik 2']
      };
      const newServices = [...services, newService];
      setServices(newServices);
      updateServices(newServices);
      setEditingService(newService);
    };

    const deleteService = (id: string) => {
      const newServices = services.filter(s => s.id !== id);
      setServices(newServices);
      updateServices(newServices);
    };

    const saveService = (service: Service) => {
      const newServices = services.map(s => s.id === service.id ? service : s);
      setServices(newServices);
      updateServices(newServices);
      setEditingService(null);
      showMessage('Hizmet güncellendi!');
    };

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Hizmetler Yönetimi</h3>
          <button
            onClick={addService}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Yeni Hizmet
          </button>
        </div>

        <div className="grid gap-4">
          {services.map((service) => (
            <div key={service.id} className="border rounded-lg p-4">
              {editingService?.id === service.id ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editingService.title}
                    onChange={(e) => setEditingService({...editingService, title: e.target.value})}
                    className="w-full p-2 border rounded"
                    placeholder="Hizmet başlığı"
                  />
                  <textarea
                    value={editingService.description}
                    onChange={(e) => setEditingService({...editingService, description: e.target.value})}
                    className="w-full p-2 border rounded h-20"
                    placeholder="Hizmet açıklaması"
                  />
                  <input
                    type="text"
                    value={editingService.icon}
                    onChange={(e) => setEditingService({...editingService, icon: e.target.value})}
                    className="w-full p-2 border rounded"
                    placeholder="İkon (emoji)"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => saveService(editingService)}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Kaydet
                    </button>
                    <button
                      onClick={() => setEditingService(null)}
                      className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                    >
                      İptal
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{service.icon} {service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingService(service)}
                      className="bg-orange-600 text-white px-3 py-1 rounded hover:bg-orange-700"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => deleteService(service.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderContactTab = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">İletişim Bilgileri</h3>
      <div>
        <label className="block text-sm font-medium mb-2">Telefon</label>
        <input
          type="text"
          value={siteData.contactInfo.phone}
          onChange={(e) => updateContactInfo({ phone: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">E-posta</label>
        <input
          type="email"
          value={siteData.contactInfo.email}
          onChange={(e) => updateContactInfo({ email: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Adres</label>
        <input
          type="text"
          value={siteData.contactInfo.address}
          onChange={(e) => updateContactInfo({ address: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Çalışma Saatleri</label>
        <input
          type="text"
          value={siteData.contactInfo.workingHours}
          onChange={(e) => updateContactInfo({ workingHours: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />
      </div>
      <button
        onClick={() => showMessage('İletişim bilgileri güncellendi!')}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Kaydet
      </button>
    </div>
  );

  const renderReferencesTab = () => {

    const addReference = () => {
      const newRef: Reference = {
        id: `ref-${Date.now()}`,
        name: 'Yeni Referans',
        logo: '🏢',
        sector: 'Sektör'
      };
      const newRefs = [...references, newRef];
      setReferences(newRefs);
      updateReferences(newRefs);
      setEditingRef(newRef);
    };

    const deleteReference = (id: string) => {
      const newRefs = references.filter(r => r.id !== id);
      setReferences(newRefs);
      updateReferences(newRefs);
    };

    const saveReference = (ref: Reference) => {
      const newRefs = references.map(r => r.id === ref.id ? ref : r);
      setReferences(newRefs);
      updateReferences(newRefs);
      setEditingRef(null);
      showMessage('Referans güncellendi!');
    };

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Referanslar Yönetimi</h3>
          <button
            onClick={addReference}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Yeni Referans
          </button>
        </div>

        <div className="grid gap-4">
          {references.map((ref) => (
            <div key={ref.id} className="border rounded-lg p-4">
              {editingRef?.id === ref.id ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editingRef.name}
                    onChange={(e) => setEditingRef({...editingRef, name: e.target.value})}
                    className="w-full p-2 border rounded"
                    placeholder="Şirket adı"
                  />
                  <input
                    type="text"
                    value={editingRef.logo}
                    onChange={(e) => setEditingRef({...editingRef, logo: e.target.value})}
                    className="w-full p-2 border rounded"
                    placeholder="Logo (emoji)"
                  />
                  <input
                    type="text"
                    value={editingRef.sector}
                    onChange={(e) => setEditingRef({...editingRef, sector: e.target.value})}
                    className="w-full p-2 border rounded"
                    placeholder="Sektör"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => saveReference(editingRef)}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Kaydet
                    </button>
                    <button
                      onClick={() => setEditingRef(null)}
                      className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                    >
                      İptal
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">{ref.logo} {ref.name}</h4>
                    <p className="text-gray-600 text-sm">{ref.sector}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingRef(ref)}
                      className="bg-orange-600 text-white px-3 py-1 rounded hover:bg-orange-700"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => deleteReference(ref.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCompanyTab = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Şirket Bilgileri</h3>
      <div>
        <label className="block text-sm font-medium mb-2">Şirket Adı</label>
        <input
          type="text"
          value={siteData.companyInfo.name}
          onChange={(e) => updateCompanyInfo({ name: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Açıklama</label>
        <textarea
          value={siteData.companyInfo.description}
          onChange={(e) => updateCompanyInfo({ description: e.target.value })}
          className="w-full p-3 border rounded-lg h-32"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Misyon</label>
        <textarea
          value={siteData.companyInfo.mission}
          onChange={(e) => updateCompanyInfo({ mission: e.target.value })}
          className="w-full p-3 border rounded-lg h-24"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Vizyon</label>
        <textarea
          value={siteData.companyInfo.vision}
          onChange={(e) => updateCompanyInfo({ vision: e.target.value })}
          className="w-full p-3 border rounded-lg h-24"
        />
      </div>
      <button
        onClick={() => showMessage('Şirket bilgileri güncellendi!')}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Kaydet
      </button>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'hero': return renderHeroTab();
      case 'about': return renderAboutTab();
      case 'services': return renderServicesTab();
      case 'references': return renderReferencesTab();
      case 'contact': return renderContactTab();
      case 'company': return renderCompanyTab();
      default: return renderHeroTab();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">AKC Admin Panel</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-900"
              >
                Siteyi Görüntüle
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mx-4 mt-4 rounded">
          {message}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-lg shadow-sm mr-8 p-6">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-orange-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-8">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 