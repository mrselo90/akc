import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteData as initialSiteData } from '../data/siteData';
import { SiteData } from '../types';

interface SiteDataContextType {
  siteData: SiteData;
  updateSiteData: (newData: Partial<SiteData>) => void;
  updateSection: (section: keyof SiteData, data: any) => void;
  resetToDefault: () => void;
}

const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined);

export const useSiteData = () => {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error('useSiteData must be used within a SiteDataProvider');
  }
  return context;
};

export const SiteDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteData, setSiteData] = useState<SiteData>(() => {
    // Load from localStorage if available, otherwise use initial data
    const saved = localStorage.getItem('akc-site-data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (error) {
        console.error('Error loading saved site data:', error);
        return initialSiteData;
      }
    }
    return initialSiteData;
  });

  // Save to localStorage whenever siteData changes
  useEffect(() => {
    localStorage.setItem('akc-site-data', JSON.stringify(siteData));
  }, [siteData]);

  const updateSiteData = (newData: Partial<SiteData>) => {
    setSiteData(prev => ({
      ...prev,
      ...newData
    }));
  };

  const updateSection = (section: keyof SiteData, data: any) => {
    setSiteData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const resetToDefault = () => {
    setSiteData(initialSiteData);
    localStorage.removeItem('akc-site-data');
  };

  return (
    <SiteDataContext.Provider value={{
      siteData,
      updateSiteData,
      updateSection,
      resetToDefault
    }}>
      {children}
    </SiteDataContext.Provider>
  );
}; 