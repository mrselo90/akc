import React from 'react';

interface Reference {
  id: string;
  name: string;
  logo: string;
}

interface ReferencesProps {
  references: Reference[];
}

const References: React.FC<ReferencesProps> = ({ references }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Referanslarımız</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {references.map((reference) => (
            <div key={reference.id} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="text-2xl mb-2">🏢</div>
                <span className="text-sm font-medium">{reference.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References; 