import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { trackLeadMagnet } from '../services/analytics';

const LocalSEOChecklist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    trackLeadMagnet('local_seo_checklist', 'view');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    trackLeadMagnet('local_seo_checklist', 'submit');
    // Simulate lead capture
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Free Local SEO Quick-Win Checklist | TurboCloudHost</title>
        <meta name="description" content="Download our 5-step checklist to optimize your Google Business Profile and boost your local rankings in minutes." />
      </Helmet>

      <div className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            The Local SEO Quick-Win Checklist
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
            98% of local businesses skip these 5 steps. The ones who don't? They rank #1.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-6">What's Inside This Free Guide:</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-2xl">✅</span>
                <span><strong>Google Business Profile (GBP) Mastery:</strong> Optimize your profile in under 10 minutes for maximum Local Pack visibility.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-2xl">✅</span>
                <span><strong>The "Top 5" Citations:</strong> The exact sites you must be on to establish local authority.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-2xl">✅</span>
                <span><strong>Schema Markup for Mortals:</strong> How to add the technical code Google loves without being a developer.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-2xl">✅</span>
                <span><strong>Review Generation Templates:</strong> Steal our exact SMS and email scripts to get 5-star reviews on autopilot.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-2xl">✅</span>
                <span><strong>The "People Also Ask" Keyword Hack:</strong> Find high-intent local keywords in 5 minutes using free tools.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-100 italic text-gray-600 text-lg">
              "This checklist covers the fundamentals — but there's a ceiling to what a DIY approach can achieve. We've built this to get you the 'Quick Wins' you need to start seeing results today."
            </div>
          </div>

          <div className="lg:w-1/3 w-full sticky top-8">
            <div className="bg-white border-2 border-blue-600 rounded-3xl p-8 shadow-2xl">
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Get the Checklist</h3>
                  <p className="text-gray-600 mb-6 text-center">
                    Enter your email to receive the PDF checklist and our 2-week action plan.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full border-gray-300 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg">
                      Download Now — Free
                    </button>
                    <p className="text-[10px] text-center text-gray-400">
                      No credit card required. We respect your privacy.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8 animate-fadeIn">
                  <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Checklist Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    We've sent the download link to <strong>{email}</strong>.
                  </p>
                  <a 
                    href="#" 
                    className="inline-block text-blue-600 font-bold hover:underline"
                    onClick={(e) => { e.preventDefault(); alert('Downloading placeholder PDF...'); }}
                  >
                    Direct Download (PDF)
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Ready to Skip the DIY?
          </h2>
          <p className="text-xl mb-10 text-slate-400 max-w-2xl mx-auto">
            Our Core Hardening Audit includes everything on this checklist — done professionally — plus technical optimizations to pass Google's latest updates.
          </p>
          <a href="/seo-hardening" className="bg-white text-slate-900 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all">
            Explore SEO Hardening
          </a>
        </div>
      </section>
    </div>
  );
};

export default LocalSEOChecklist;
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
