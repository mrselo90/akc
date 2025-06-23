import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { siteData, updateSection } = useSiteData();
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [editingSection, setEditingSection] = useState<string>('');
  const [tempContent, setTempContent] = useState<any>({});

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin');
  };

  const handleSave = (section: string) => {
    updateSection(section as keyof typeof siteData, tempContent);
    setIsEditing(false);
    setEditingSection('');
    setTempContent({});
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingSection('');
    setTempContent({});
  };

  const startEditing = (section: string, data: any) => {
    setEditingSection(section);
    setTempContent(data);
    setIsEditing(true);
  };

  const tabs = [
    { id: 'overview', label: 'Genel Bakış', icon: '📊' },
    { id: 'hero', label: 'Ana Sayfa', icon: '🏠' },
    { id: 'about', label: 'Hakkımızda', icon: 'ℹ️' },
    { id: 'services', label: 'Hizmetler', icon: '🛠️' },
    { id: 'references', label: 'Referanslar', icon: '🏢' },
    { id: 'contact', label: 'İletişim', icon: '📞' },
    { id: 'testimonials', label: 'Müşteri Yorumları', icon: '💬' },
    { id: 'footer', label: 'Alt Bilgi', icon: '📄' }
  ];

  const renderOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-blue-50 p-6 rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-600 text-sm font-medium">Toplam Hizmet</p>
            <p className="text-3xl font-bold text-blue-900">{siteData.services.length}</p>
          </div>
          <div className="text-3xl">🛠️</div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-600 text-sm font-medium">Referanslar</p>
            <p className="text-3xl font-bold text-green-900">{siteData.references.length}</p>
          </div>
          <div className="text-3xl">🏢</div>
        </div>
      </div>
      <div className="bg-orange-50 p-6 rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-orange-600 text-sm font-medium">Müşteri Yorumları</p>
            <p className="text-3xl font-bold text-orange-900">{siteData.testimonials.length}</p>
          </div>
          <div className="text-3xl">💬</div>
        </div>
      </div>
      <div className="bg-purple-50 p-6 rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-purple-600 text-sm font-medium">Acil Telefon</p>
            <p className="text-lg font-bold text-purple-900">{siteData.contactInfo.emergencyPhone}</p>
          </div>
          <div className="text-3xl">🚨</div>
        </div>
      </div>
    </div>
  );

  const renderHeroEditor = () => (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Ana Sayfa İçeriği</h3>
        {!isEditing && (
          <button
            onClick={() => startEditing('hero', siteData.hero)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Düzenle
          </button>
        )}
      </div>
      
      {isEditing && editingSection === 'hero' ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Ana Başlık</label>
            <input
              type="text"
              value={tempContent.title}
              onChange={(e) => setTempContent({...tempContent, title: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Alt Başlık</label>
            <textarea
              value={tempContent.subtitle}
              onChange={(e) => setTempContent({...tempContent, subtitle: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Birincil Buton Metni</label>
            <input
              type="text"
              value={tempContent.ctaPrimary}
              onChange={(e) => setTempContent({...tempContent, ctaPrimary: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">İkincil Buton Metni</label>
            <input
              type="text"
              value={tempContent.ctaSecondary}
              onChange={(e) => setTempContent({...tempContent, ctaSecondary: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => handleSave('hero')}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Kaydet
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              İptal
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <strong>Ana Başlık:</strong> {siteData.hero.title}
          </div>
          <div>
            <strong>Alt Başlık:</strong> {siteData.hero.subtitle}
          </div>
          <div>
            <strong>Birincil Buton:</strong> {siteData.hero.ctaPrimary}
          </div>
          <div>
            <strong>İkincil Buton:</strong> {siteData.hero.ctaSecondary}
          </div>
        </div>
      )}
    </div>
  );

  const renderAboutEditor = () => (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Hakkımızda İçeriği</h3>
        {!isEditing && (
          <button
            onClick={() => startEditing('about', siteData.about)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Düzenle
          </button>
        )}
      </div>
      
      {isEditing && editingSection === 'about' ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Başlık</label>
            <input
              type="text"
              value={tempContent.title}
              onChange={(e) => setTempContent({...tempContent, title: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Açıklama</label>
            <textarea
              value={tempContent.description}
              onChange={(e) => setTempContent({...tempContent, description: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              rows={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Misyon</label>
            <textarea
              value={tempContent.mission}
              onChange={(e) => setTempContent({...tempContent, mission: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Vizyon</label>
            <textarea
              value={tempContent.vision}
              onChange={(e) => setTempContent({...tempContent, vision: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              rows={3}
            />
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => handleSave('about')}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Kaydet
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              İptal
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <strong>Başlık:</strong> {siteData.about.title}
          </div>
          <div>
            <strong>Açıklama:</strong> {siteData.about.description.substring(0, 100)}...
          </div>
          <div>
            <strong>Misyon:</strong> {siteData.about.mission.substring(0, 100)}...
          </div>
          <div>
            <strong>Vizyon:</strong> {siteData.about.vision.substring(0, 100)}...
          </div>
        </div>
      )}
    </div>
  );

  const renderServicesEditor = () => (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Hizmetler</h3>
        <button
          onClick={() => navigate('/admin/services')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Tümünü Yönet
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {siteData.services.map((service, index) => (
          <div key={service.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold">{service.title}</h4>
              <span className="text-2xl">{service.icon}</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">{service.description}</p>
            <div className="text-xs text-gray-500">
              {service.features.length} özellik
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContactEditor = () => (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">İletişim Bilgileri</h3>
        {!isEditing && (
          <button
            onClick={() => startEditing('contactInfo', siteData.contactInfo)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Düzenle
          </button>
        )}
      </div>
      
      {isEditing && editingSection === 'contactInfo' ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Telefon</label>
            <input
              type="text"
              value={tempContent.phone}
              onChange={(e) => setTempContent({...tempContent, phone: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Acil Telefon</label>
            <input
              type="text"
              value={tempContent.emergencyPhone}
              onChange={(e) => setTempContent({...tempContent, emergencyPhone: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">E-posta</label>
            <input
              type="email"
              value={tempContent.email}
              onChange={(e) => setTempContent({...tempContent, email: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Adres</label>
            <input
              type="text"
              value={tempContent.address}
              onChange={(e) => setTempContent({...tempContent, address: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Çalışma Saatleri</label>
            <input
              type="text"
              value={tempContent.workingHours}
              onChange={(e) => setTempContent({...tempContent, workingHours: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => handleSave('contactInfo')}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Kaydet
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              İptal
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div><strong>Telefon:</strong> {siteData.contactInfo.phone}</div>
          <div><strong>Acil Telefon:</strong> {siteData.contactInfo.emergencyPhone}</div>
          <div><strong>E-posta:</strong> {siteData.contactInfo.email}</div>
          <div><strong>Adres:</strong> {siteData.contactInfo.address}</div>
          <div><strong>Çalışma Saatleri:</strong> {siteData.contactInfo.workingHours}</div>
        </div>
      )}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'hero':
        return renderHeroEditor();
      case 'about':
        return renderAboutEditor();
      case 'services':
        return renderServicesEditor();
      case 'contact':
        return renderContactEditor();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">AKC Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                🏠 Ana Sayfa
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
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div>{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default AdminDashboard; 