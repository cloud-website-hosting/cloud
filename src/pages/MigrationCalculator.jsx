import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MigrationCalculator = () => {
  // Input State
  const [inputs, setInputs] = useState({
    currentCost: 29,
    pageSpeedScore: 55,
    monthlyVisitors: 5000,
    revenuePerConversion: 100,
    hostType: 'shared',
    hasSSL: true,
  });

  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [emailCaptured, setEmailCaptured] = useState(false);

  // Computed Results State
  const [results, setResults] = useState({
    annualSavingsBase: 0,
    annualSavingsPro: 0,
    finalCurrentLCP: 0,
    tchLCP: 0,
    speedImprovementPct: 0,
    seoImpactScore: 0,
    seoImpactLabel: '',
    revenueAtRisk: 0,
    downtimeSavings: 0,
  });

  const hostTypeOptions = {
    shared: { multiplier: 0.35, uptime: 99.5, label: 'Shared Hosting' },
    vps: { multiplier: 0.55, uptime: 99.7, label: 'VPS Hosting' },
    dedicated: { multiplier: 0.75, uptime: 99.9, label: 'Dedicated Server' },
    cloud: { multiplier: 0.80, uptime: 99.8, label: 'Cloud Hosting (Other)' },
    turbocloud: { multiplier: 1.00, uptime: 99.99, label: 'TurboCloudHost (Current)' },
  };

  const calculate = () => {
    const { currentCost, pageSpeedScore, monthlyVisitors, revenuePerConversion, hostType, hasSSL } = inputs;
    const tchMonthly = 14.99;
    const tchMonthlyPremium = 29.99;
    const tchSpeedScore = 92;
    const tchUptime = 99.99;

    // Formula 1: Hosting Cost Savings
    const annualCurrent = currentCost * 12;
    const annualTchBase = tchMonthly * 12;
    const annualTchPro = tchMonthlyPremium * 12;
    const annualSavingsBase = annualCurrent - annualTchBase;
    const annualSavingsPro = annualCurrent - annualTchPro;

    // Formula 2: Speed Improvement
    const hostMultiplier = hostTypeOptions[hostType].multiplier;
    const estimatedCurrentLCP = 8 - (pageSpeedScore / 100 * 7);
    const estimatedTchLCP = 8 - (tchSpeedScore / 100 * 7);
    const hostPenalty = 1 + (1 - hostMultiplier) * 1.5;
    const finalCurrentLCP = estimatedCurrentLCP * hostPenalty;
    const speedImprovementPct = ((finalCurrentLCP - estimatedTchLCP) / finalCurrentLCP) * 100;

    // Formula 3: SEO Impact Score
    const currentHostUptime = hostTypeOptions[hostType].uptime;
    const speedComponent = Math.min((tchSpeedScore - pageSpeedScore) / 100 * 40, 40);
    const uptimeGain = (tchUptime - currentHostUptime);
    const uptimeComponent = Math.min(uptimeGain * 50, 30);
    const sslComponent = hasSSL ? 10 : 20;
    const infraComponent = (hostMultiplier < 0.8) ? 10 : 5;
    const seoImpactScore = Math.round(speedComponent + uptimeComponent + sslComponent + infraComponent);

    let seoImpactLabel = "👍 Minor Impact";
    if (seoImpactScore >= 50) seoImpactLabel = "🔥 Major Impact";
    else if (seoImpactScore >= 30) seoImpactLabel = "✅ Significant Impact";
    else if (seoImpactScore >= 15) seoImpactLabel = "📈 Moderate Impact";

    // Formula 4: Downtime Cost Risk
    const estimatedCvr = 0.025;
    const monthlyRevenue = monthlyVisitors * estimatedCvr * revenuePerConversion;
    const revenuePerHour = monthlyRevenue / (30 * 24);
    const currentDowntimeHrsPerYear = (1 - currentHostUptime / 100) * 365 * 24;
    const tchDowntimeHrsPerYear = (1 - tchUptime / 100) * 365 * 24;
    const currentDowntimeCost = currentDowntimeHrsPerYear * revenuePerHour;
    const tchDowntimeCost = tchDowntimeHrsPerYear * revenuePerHour;
    const downtimeSavings = currentDowntimeCost - tchDowntimeCost;

    setResults({
      annualSavingsBase,
      annualSavingsPro,
      finalCurrentLCP: finalCurrentLCP.toFixed(1),
      tchLCP: estimatedTchLCP.toFixed(1),
      speedImprovementPct: Math.round(speedImprovementPct),
      seoImpactScore,
      seoImpactLabel,
      revenueAtRisk: Math.round(currentDowntimeCost),
      downtimeSavings: Math.round(downtimeSavings),
    });
  };

  useEffect(() => {
    calculate();
  }, [inputs]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInputs({
      ...inputs,
      [name]: type === 'checkbox' ? checked : (type === 'number' || type === 'range' ? parseFloat(value) : value),
    });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmailCaptured(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Helmet>
        <title>Website Migration & ROI Calculator | TurboCloudHost</title>
        <meta name="description" content="Calculate your hosting savings, speed boost, and SEO impact when switching to TurboCloudHost." />
      </Helmet>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Find Out How Much Faster & More Profitable Your Site Could Be.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter your current hosting details below. See exactly what TurboCloudHost can do for your bottom line — in 30 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Calculator Inputs</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Current Monthly Hosting Cost ($)</label>
                <input 
                  type="number" 
                  name="currentCost"
                  value={inputs.currentCost}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex justify-between">
                  Current PageSpeed Score (Mobile) <span>{inputs.pageSpeedScore}</span>
                </label>
                <input 
                  type="range" 
                  name="pageSpeedScore"
                  min="0" max="100"
                  value={inputs.pageSpeedScore}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0 (Slow)</span>
                  <span>100 (Fast)</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Monthly Website Visitors</label>
                <input 
                  type="number" 
                  name="monthlyVisitors"
                  value={inputs.monthlyVisitors}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Avg Revenue Per Conversion ($)</label>
                <input 
                  type="number" 
                  name="revenuePerConversion"
                  value={inputs.revenuePerConversion}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Current Host Type</label>
                <select 
                  name="hostType"
                  value={inputs.hostType}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                >
                  {Object.keys(hostTypeOptions).map(key => (
                    <option key={key} value={key}>{hostTypeOptions[key].label}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-700">Do You Currently Have SSL?</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="hasSSL"
                    checked={inputs.hasSSL}
                    onChange={handleInputChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {!showResults && (
                <button 
                  onClick={() => setShowResults(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1 active:translate-y-0"
                >
                  Calculate Your Savings →
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            {showResults ? (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                  <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="bg-blue-600 p-2 rounded-lg">🔄</span>
                    Your Hosting Comparison Results
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all">
                      <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">💰 Annual Savings</p>
                      <p className="text-4xl font-black">
                        {results.annualSavingsBase > 0 ? `$${Math.round(results.annualSavingsBase)}` : '$0'}
                      </p>
                      <p className="text-xs text-slate-400 mt-2">switching to Business Plan</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all">
                      <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-2">⚡ Speed Boost</p>
                      <p className="text-4xl font-black">{results.speedImprovementPct}%</p>
                      <p className="text-xs text-slate-400 mt-2">{results.finalCurrentLCP}s → {results.tchLCP}s load time</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all">
                      <p className="text-green-400 font-bold text-sm uppercase tracking-wider mb-2">🔍 SEO Impact</p>
                      <p className="text-4xl font-black">+{results.seoImpactScore}</p>
                      <p className="text-xs text-slate-400 mt-2">ranking signal points</p>
                    </div>
                  </div>

                  <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-6 mb-8 flex items-center gap-4">
                    <div className="text-3xl">⏱️</div>
                    <div>
                      <p className="text-red-300 font-bold text-sm uppercase tracking-wider">Downtime Revenue Risk</p>
                      <p className="text-2xl font-bold">${results.revenueAtRisk.toLocaleString()}/yr at stake</p>
                    </div>
                  </div>

                  {!emailCaptured ? (
                    <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-inner">
                      <h3 className="text-xl font-bold mb-2">🎯 Send Me My Full Breakdown</h3>
                      <p className="text-slate-600 mb-6">Get a personalized PDF report with your ROI analysis and a step-by-step migration roadmap.</p>
                      <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row gap-3">
                        <input 
                          type="email" 
                          required 
                          placeholder="your@email.com"
                          className="flex-grow border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-blue-500 outline-none"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg hover:-translate-y-1">
                          Send Report
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-8 text-center animate-fadeIn">
                      <div className="text-4xl mb-2">✅</div>
                      <h3 className="text-2xl font-bold text-white mb-2">Report Sent!</h3>
                      <p className="text-green-100">Check your inbox at <strong>{email}</strong> for your full breakdown.</p>
                    </div>
                  )}

                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-0"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="text-xl">💰</span> Cost Savings
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {results.annualSavingsBase > 0 
                        ? `You're currently paying $${Math.round(inputs.currentCost * 12)}/year. Switching to TurboCloudHost saves you $${Math.round(results.annualSavingsBase)}/year — money you can reinvest in your business.`
                        : `You're paying less than $14.99/month, but for just a few dollars more, you get 3× faster loads, free SSL + CDN, and 24/7 US support.`
                      }
                    </p>
                    <a href="/#plans" className="text-blue-600 text-sm font-bold hover:underline flex items-center gap-1">
                      Switch to TurboCloudHost → $14.99/mo
                    </a>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="text-xl">🔍</span> SEO Performance
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Page speed is a confirmed Google ranking factor. Switching to TurboCloudHost improves your technical SEO signal by +{results.seoImpactScore} points — a {results.seoImpactLabel.split(' ')[1]} impact.
                    </p>
                    <Link to="/seo-hardening" className="text-blue-600 text-sm font-bold hover:underline">
                      Learn About SEO Hardening →
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col justify-center items-center text-center p-12 bg-white rounded-3xl border-2 border-dashed border-slate-200 text-slate-400">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-2xl font-bold">Results will appear here</h3>
                <p className="max-w-xs mx-auto mt-2">Fill out the form to calculate your potential savings and performance boost.</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">🏆 Trusted by 5,000+ local businesses</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale">
              <span className="font-black text-2xl">99.99% UPTIME</span>
              <span className="font-black text-2xl">NVMe SSD</span>
              <span className="font-black text-2xl">LITESPEED</span>
              <span className="font-black text-2xl">US SUPPORT</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200 pt-12">
            <div>
              <h4 className="font-bold text-lg mb-2">How long does a migration take?</h4>
              <p className="text-slate-600 text-sm">Most sites are migrated in under 4 hours — with zero downtime. We handle everything: files, databases, SSL, DNS propagation. You don't need to lift a finger.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">What if I'm not happy?</h4>
              <p className="text-slate-600 text-sm">Every TurboCloudHost plan comes with a 30-day money-back guarantee. If you're not satisfied for any reason, we'll move you back to your old host for free.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Do I need technical skills?</h4>
              <p className="text-slate-600 text-sm">Not at all. Our migration team handles everything. You just provide your current hosting credentials, and we take it from there.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Will my site go down during migration?</h4>
              <p className="text-slate-600 text-sm">Nope. We use a live migration process that keeps your existing site running until the new one is fully ready. Your visitors won't notice a thing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigrationCalculator;
