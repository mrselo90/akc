import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteData } from '../types';
import { siteData as defaultSiteData } from '../data/siteData';

interface SiteDataContextType {
  siteData: SiteData;
  updateSiteData: (data: Partial<SiteData>) => void;
  updateHero: (hero: Partial<SiteData['hero']>) => void;
  updateAbout: (about: Partial<SiteData['about']>) => void;
  updateServices: (services: SiteData['services']) => void;
  updateContactInfo: (contactInfo: Partial<SiteData['contactInfo']>) => void;
  updateCompanyInfo: (companyInfo: Partial<SiteData['companyInfo']>) => void;
  updateReferences: (references: SiteData['references']) => void;
}

const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined);

export const useSiteData = () => {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error('useSiteData must be used within a SiteDataProvider');
  }
  return context;
};

interface SiteDataProviderProps {
  children: ReactNode;
}

export const SiteDataProvider: React.FC<SiteDataProviderProps> = ({ children }) => {
  const [siteData, setSiteData] = useState<SiteData>(defaultSiteData);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('akc-site-data');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setSiteData({ ...defaultSiteData, ...parsedData });
      } catch (error) {
        console.error('Error loading saved site data:', error);
      }
    }
  }, []);

  // Save to localStorage whenever data changes
  const saveToLocalStorage = (newData: SiteData) => {
    localStorage.setItem('akc-site-data', JSON.stringify(newData));
  };

  const updateSiteData = (data: Partial<SiteData>) => {
    const newData = { ...siteData, ...data };
    setSiteData(newData);
    saveToLocalStorage(newData);
  };

  const updateHero = (hero: Partial<SiteData['hero']>) => {
    const newData = { ...siteData, hero: { ...siteData.hero, ...hero } };
    setSiteData(newData);
    saveToLocalStorage(newData);
  };

  const updateAbout = (about: Partial<SiteData['about']>) => {
    const newData = { ...siteData, about: { ...siteData.about, ...about } };
    setSiteData(newData);
    saveToLocalStorage(newData);
  };

  const updateServices = (services: SiteData['services']) => {
    const newData = { ...siteData, services };
    setSiteData(newData);
    saveToLocalStorage(newData);
  };

  const updateContactInfo = (contactInfo: Partial<SiteData['contactInfo']>) => {
    const newData = { ...siteData, contactInfo: { ...siteData.contactInfo, ...contactInfo } };
    setSiteData(newData);
    saveToLocalStorage(newData);
  };

  const updateCompanyInfo = (companyInfo: Partial<SiteData['companyInfo']>) => {
    const newData = { ...siteData, companyInfo: { ...siteData.companyInfo, ...companyInfo } };
    setSiteData(newData);
    saveToLocalStorage(newData);
  };

  const updateReferences = (references: SiteData['references']) => {
    const newData = { ...siteData, references };
    setSiteData(newData);
    saveToLocalStorage(newData);
  };

  const value: SiteDataContextType = {
    siteData,
    updateSiteData,
    updateHero,
    updateAbout,
    updateServices,
    updateContactInfo,
    updateCompanyInfo,
    updateReferences,
  };

  return (
    <SiteDataContext.Provider value={value}>
      {children}
    </SiteDataContext.Provider>
  );
}; 