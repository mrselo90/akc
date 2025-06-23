import React from 'react';

interface AboutProps {
  companyInfo: {
    name: string;
    description: string;
    mission: string;
    vision: string;
  };
}

const About: React.FC<AboutProps> = ({ companyInfo }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Hakkımızda</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8 text-center">{companyInfo.description}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-orange-600">Misyonumuz</h3>
              <p>{companyInfo.mission}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Vizyonumuz</h3>
              <p>{companyInfo.vision}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 