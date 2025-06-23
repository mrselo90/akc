export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  details: string;
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
  emergencyPhone: string;
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
  stats: Array<{ number: string; label: string }>;
}

export interface Hero {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
  rating: number;
}

export interface Footer {
  emergencyBanner: string;
  description: string;
  certifications: Array<{ name: string; icon: string }>;
}

export interface SiteData {
  companyInfo: CompanyInfo;
  hero: Hero;
  about: About;
  services: Service[];
  references: Reference[];
  contactInfo: ContactInfo;
  testimonials: Testimonial[];
  footer: Footer;
} 