import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';
import { Service } from '../types';

const AdminServices: React.FC = () => {
  const navigate = useNavigate();
  const { siteData, updateSection } = useSiteData();
  const [services, setServices] = useState<Service[]>(siteData.services);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [tempService, setTempService] = useState<Partial<Service>>({});

  // Update local state when context changes
  useEffect(() => {
    setServices(siteData.services);
  }, [siteData.services]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin');
  };

  const startEditing = (service: Service) => {
    setEditingService(service);
    setTempService(service);
    setIsAddingNew(false);
  };

  const startAddingNew = () => {
    setEditingService(null);
    setTempService({
      id: '',
      title: '',
      description: '',
      icon: '🛠️',
      features: [],
      details: ''
    });
    setIsAddingNew(true);
  };

  const handleSave = () => {
    let newServices: Service[];
    
    if (isAddingNew) {
      const newService: Service = {
        id: tempService.id || `service-${Date.now()}`,
        title: tempService.title || '',
        description: tempService.description || '',
        icon: tempService.icon || '🛠️',
        features: tempService.features || [],
        details: tempService.details || ''
      };
      newServices = [...services, newService];
    } else if (editingService) {
      newServices = services.map(service => 
        service.id === editingService.id 
          ? { ...service, ...tempService }
          : service
      );
    } else {
      return;
    }
    
    // Update both local state and context
    setServices(newServices);
    updateSection('services', newServices);
    
    setEditingService(null);
    setTempService({});
    setIsAddingNew(false);
  };

  const handleCancel = () => {
    setEditingService(null);
    setTempService({});
    setIsAddingNew(false);
  };

  const handleDelete = (serviceId: string) => {
    if (window.confirm('Bu hizmeti silmek istediğinizden emin misiniz?')) {
      const newServices = services.filter(service => service.id !== serviceId);
      setServices(newServices);
      updateSection('services', newServices);
    }
  };

  const addFeature = () => {
    setTempService(prev => ({
      ...prev,
      features: [...(prev.features || []), '']
    }));
  };

  const updateFeature = (index: number, value: string) => {
    setTempService(prev => ({
      ...prev,
      features: prev.features?.map((feature, i) => i === index ? value : feature) || []
    }));
  };

  const removeFeature = (index: number) => {
    setTempService(prev => ({
      ...prev,
      features: prev.features?.filter((_, i) => i !== index) || []
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/admin/dashboard')}
                className="text-gray-600 hover:text-gray-900 mr-4"
              >
                ← Geri
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Hizmetler Yönetimi</h1>
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
        {/* Add New Service Button */}
        <div className="mb-8">
          <button
            onClick={startAddingNew}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Yeni Hizmet Ekle
          </button>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-sm border p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm">ID: {service.id}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => startEditing(service)}
                    className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                  >
                    Düzenle
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                  >
                    Sil
                  </button>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Özellikler:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Detaylar:</h4>
                <p className="text-gray-600 text-sm">{service.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Edit/Add Modal */}
        {(editingService || isAddingNew) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6">
                {isAddingNew ? 'Yeni Hizmet Ekle' : 'Hizmet Düzenle'}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Hizmet ID</label>
                  <input
                    type="text"
                    value={tempService.id || ''}
                    onChange={(e) => setTempService({...tempService, id: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="hizmet-id"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">İkon</label>
                  <input
                    type="text"
                    value={tempService.icon || ''}
                    onChange={(e) => setTempService({...tempService, icon: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="🛠️"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Başlık</label>
                  <input
                    type="text"
                    value={tempService.title || ''}
                    onChange={(e) => setTempService({...tempService, title: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Hizmet başlığı"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Açıklama</label>
                  <textarea
                    value={tempService.description || ''}
                    onChange={(e) => setTempService({...tempService, description: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                    rows={3}
                    placeholder="Kısa açıklama"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Detaylar</label>
                  <textarea
                    value={tempService.details || ''}
                    onChange={(e) => setTempService({...tempService, details: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                    rows={4}
                    placeholder="Detaylı açıklama"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium">Özellikler</label>
                    <button
                      onClick={addFeature}
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                    >
                      + Ekle
                    </button>
                  </div>
                  <div className="space-y-2">
                    {(tempService.features || []).map((feature, index) => (
                      <div key={index} className="flex space-x-2">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => updateFeature(index, e.target.value)}
                          className="flex-1 px-3 py-2 border rounded-lg"
                          placeholder="Özellik"
                        />
                        <button
                          onClick={() => removeFeature(index)}
                          className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
                        >
                          Sil
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                >
                  Kaydet
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
                >
                  İptal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminServices; 