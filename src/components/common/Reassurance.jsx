import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Headphones } from 'lucide-react';
import { MOCK_REASSURANCES } from '../../data/mockData';

const Reassurance = () => {
  // Associe chaque icône textuelle à un composant Lucide premium
  const getIcon = (iconText) => {
    switch (iconText) {
      case '🚚':
        return <Truck className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />;
      case '↩':
        return <RotateCcw className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />;
      case '🔒':
        return <ShieldCheck className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />;
      case '📞':
      default:
        return <Headphones className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />;
    }
  };

  return (
    <div className="bg-gray-light py-5 border-b border-customBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_REASSURANCES.map((item, index) => (
            <div
              key={index}
              className="group flex items-center space-x-4 p-3 bg-white rounded-md shadow-card border border-transparent hover:border-gold/30 hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 bg-gray-light rounded-full group-hover:bg-gold/10 transition-colors duration-300">
                {getIcon(item.icon)}
              </div>
              <div>
                <h4 className="font-barlow font-bold text-black text-sm tracking-wide uppercase">
                  {item.title}
                </h4>
                <p className="font-barlow font-medium text-xs text-gray-dark mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reassurance;
