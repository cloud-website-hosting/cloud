import React from 'react';

const PlanCard = ({ plan }) => {
  if (!plan) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all p-6 flex flex-col h-full text-black">
      <h3 className="text-xl font-bold mb-2 text-gray-900">{plan.name || 'Plan'}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-4">
        ${plan.price || '0.00'}<span className="text-sm text-gray-500 font-normal">/mo</span>
      </div>
      <ul className="mb-6 flex-grow space-y-3">
        {(plan.features || []).map((feature, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <svg className="w-5 h-5 mr-2 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-sm leading-tight">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href={plan.url || 'https://turbocloudhost.duoservers.com/linux-cloud-web-hosting/'} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full bg-blue-600 text-white text-center font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
      >
        Get Started
      </a>
    </div>
  );
};

export default PlanCard;
