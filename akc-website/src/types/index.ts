export interface Service {
  id: string;
  title: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  icon: string;
  features: {
    tr: string[];
    en: string[];
  };
  details?: {
    tr: string;
    en: string;
  };
  projects?: {
    tr: string[];
    en: string[];
  };
  equipment?: {
    tr: string[];
    en: string[];
  };
  process?: {
    tr: string;
    en: string;
  };
}

export interface Reference {
  id: string;
  name: string;
  logo: string;
  sector: {
    tr: string;
    en: string;
  };
}

export interface ContactInfo {
  phone: string;
  whatsapp?: string;
  email: string;
  address: {
    tr: string;
    en: string;
  };
  workingHours: {
    tr: string;
    en: string;
  };
}

export interface CompanyInfo {
  name: string;
  description: {
    tr: string;
    en: string;
  };
  mission: {
    tr: string;
    en: string;
  };
  vision: {
    tr: string;
    en: string;
  };
}

export interface About {
  title: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  mission: {
    tr: string;
    en: string;
  };
  vision: {
    tr: string;
    en: string;
  };
  features: {
    tr: string[];
    en: string[];
  };
}

export interface SiteData {
  companyInfo: CompanyInfo;
  hero: {
    title: {
      tr: string;
      en: string;
    };
    subtitle: {
      tr: string;
      en: string;
    };
    backgroundImage: string;
  };
  about: About;
  services: Service[];
  references: Reference[];
  contactInfo: ContactInfo;
}

export type Language = 'tr' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export interface Translations {
  tr: Record<string, string>;
  en: Record<string, string>;
}
