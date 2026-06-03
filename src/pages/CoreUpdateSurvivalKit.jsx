import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { trackLeadMagnet } from '../services/analytics';

const CoreUpdateSurvivalKit = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    trackLeadMagnet('core_update_survival_kit', 'view');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    trackLeadMagnet('core_update_survival_kit', 'submit');
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>Google Core Update Survival Kit | 5-Day SEO Recovery Course</title>
        <meta name="description" content="Did a Google update hit your rankings? Enroll in our free 5-day email course to diagnose, triage, and recover your organic traffic." />
      </Helmet>

      <div className="bg-slate-900 py-20 text-white border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
              Free 5-Day Recovery Course
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Google Core Update Survival Kit
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed">
              Google just changed the rules. Most local businesses lose 40-60% of traffic after an update. Here is your step-by-step recovery plan.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-3/5">
            <h2 className="text-3xl font-bold mb-10 text-slate-900">What You'll Learn Over 5 Days:</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Day 1: Traffic Loss Diagnostic</h3>
                  <p className="text-slate-600 leading-relaxed">Is your site really hit by an update? We'll show you how to use Search Console to differentiate between a penalty, an algorithm hit, and seasonal trends.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Day 2: Technical Triage</h3>
                  <p className="text-slate-600 leading-relaxed">Fix Core Web Vitals and mobile errors. We'll identify the 20% of technical fixes that drive 80% of ranking recovery.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Day 3: Content Cleanup</h3>
                  <p className="text-slate-600 leading-relaxed">How to align with the "Helpful Content" update. Learn to spot low-quality AI content that might be poisoning your site authority.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Day 4: Backlink Firefighting</h3>
                  <p className="text-slate-600 leading-relaxed">Identify and remove toxic links. Build a diverse link velocity that builds trust and signals E-E-A-T to Google.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Day 5: Your 90-Day Roadmap</h3>
                  <p className="text-slate-600 leading-relaxed">A long-term strategy for resilience. Set up your "Rank Recovery Score" and automated monitoring so you're never surprised again.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 sticky top-8">
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-bold mb-6 text-slate-900">Enroll in the Course</h3>
                  <p className="text-slate-600 mb-8">
                    Get Day 1 delivered to your inbox immediately. No fluff, just actionable recovery steps.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Work Email Address</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full bg-slate-50 border-slate-200 border rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                        placeholder="ceo@yourcompany.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl transition-all shadow-xl hover:-translate-y-1 active:translate-y-0">
                      Send Me Day 1 — Free
                    </button>
                    <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mt-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      <span>Secure Enrollment</span>
                    </div>
                  </form>
                </>
              ) : (
                <div className="animate-fadeIn">
                  <div className="bg-blue-50 text-blue-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 transform rotate-3">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-center">You're Enrolled!</h3>
                  <p className="text-slate-600 text-center mb-8">
                    Welcome to the course. We've sent <strong>Day 1: The Diagnostic</strong> to <strong>{email}</strong>.
                  </p>
                  
                  <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-lg">
                    <h4 className="font-bold mb-4 flex items-center gap-2 text-blue-400">
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                      Day 1 Preview:
                    </h4>
                    <p className="text-sm text-slate-300 italic mb-4 leading-relaxed">
                      "The first mistake businesses make is assuming every traffic drop is an algorithm update. Before we change a single line of code, we must verify the 'Update Signature'..."
                    </p>
                    <div className="text-xs text-slate-500 border-t border-slate-800 pt-4">
                      Check your email in 1-2 minutes.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Don't Recover Alone</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Sites that recover fully within 3 months are the ones who get expert help. TurboCloudHost SEO Hardening builds algorithmic armor around your site — so you survive and thrive when Google changes the rules.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                <h4 className="font-bold text-slate-900 mb-2">Core Hardening</h4>
                <p className="text-sm text-slate-500 mb-4">Technical foundation & Core Web Vitals.</p>
                <span className="text-blue-600 font-bold">$499</span>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                <h4 className="font-bold text-slate-900 mb-2">Full Resilience</h4>
                <p className="text-sm text-slate-500 mb-4">Ongoing authority & rank protection.</p>
                <span className="text-blue-600 font-bold">$2,499/qtr</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreUpdateSurvivalKit;
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
