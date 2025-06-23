export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Reference {
  id: string;
  name: string;
  logo: string;
  sector: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  mission: string;
  vision: string;
}

export interface About {
  title: string;
  description: string;
  mission: string;
  vision: string;
  features: string[];
}

export interface SiteData {
  companyInfo: CompanyInfo;
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  about: About;
  services: Service[];
  references: Reference[];
  contactInfo: ContactInfo;
}
