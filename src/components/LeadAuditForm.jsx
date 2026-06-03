import React, { useState, useEffect } from 'react';
import { trackLeadMagnet } from '../services/analytics';

const LeadAuditForm = () => {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    trackLeadMagnet('site_speed_audit', 'view');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    trackLeadMagnet('site_speed_audit', 'submit', { website_url: url });
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-center shadow-lg">
        <div className="text-green-600 text-4xl mb-3">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Audit Request Sent!</h3>
        <p className="text-green-700">
          We're analyzing <strong>{url}</strong>. Your free Site Speed & SEO report will arrive at <strong>{email}</strong> in about 60 seconds.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-blue-100 max-w-xl mx-auto text-left">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Site Speed & SEO Audit</h3>
      <p className="text-gray-600 mb-6 text-sm md:text-base">See exactly why your website is losing customers — and exactly what to fix.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-semibold text-gray-700 mb-1">Website URL</label>
          <input
            type="url"
            id="url"
            required
            placeholder="https://yourwebsite.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-black"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            required
            placeholder="name@company.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-lg font-bold text-white shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
            loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing Site...
            </span>
          ) : 'Get My Free Audit'}
        </button>
        <p className="text-xs text-gray-500 text-center mt-4">
          No credit card required. 100% free technical audit.
        </p>
      </form>
    </div>
  );
};

export default LeadAuditForm;
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
