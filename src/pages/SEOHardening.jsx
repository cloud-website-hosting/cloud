import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SEOHardening = () => {
  const tiers = [
    {
      name: "Core Hardening Audit",
      price: "$499",
      period: "One-Time",
      description: "Build a rock-solid technical foundation that passes every Google audit.",
      features: [
        "Core Web Vitals Optimization (LCP, CLS, INP)",
        "Crawl Budget Optimization",
        "Schema Markup Audit & Implementation",
        "Mobile-First Readiness Testing",
        "HTTPS & Security Headers (HSTS, CSP)"
      ],
      color: "blue"
    },
    {
      name: "Entity & Authority Hardening",
      price: "$999",
      period: "Quarterly",
      description: "Transform your website into a recognized real-world authority.",
      features: [
        "Entity Optimization & Knowledge Graph building",
        "Topical Authority Architecture",
        "Backlink Resilience Audit & Toxic Link Removal",
        "Google Business Profile Hardening",
        "Weekly Rank Volatility Monitoring"
      ],
      color: "indigo",
      popular: true
    },
    {
      name: "Full Resilience Retainer",
      price: "$2,499",
      period: "per Quarter",
      description: "The ultimate algorithmic armor for high-stakes business rankings.",
      features: [
        "Everything in Tier 1 & 2",
        "Monthly Deep Technical Crawls",
        "Bi-Weekly Content Refreshes",
        "Alert-Based Rapid Response Triage",
        "Quarterly Competitor Gap Analysis"
      ],
      color: "slate"
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      <Helmet>
        <title>Google SEO Hardening Services | Protect Your Rankings — TurboCloudHost</title>
        <meta name="description" content="TurboCloudHost SEO Hardening builds algorithmic armor around your site so you survive and thrive when Google changes the rules." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto">
            Don't Let the Next Google Core Update Wipe Out Your Rankings.
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Most local businesses lose 40–60% of organic traffic after a Google update. 
            <strong> TurboCloudHost SEO Hardening</strong> builds algorithmic armor around your site — 
            so you survive and thrive when Google changes the rules.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="flex items-center space-x-2">
              <span className="bg-green-500 rounded-full p-1 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </span>
              <span className="font-semibold">Algorithm-Proof Rankings</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-green-500 rounded-full p-1 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </span>
              <span className="font-semibold">Core Web Vitals Guaranteed Green</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-green-500 rounded-full p-1 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </span>
              <span className="font-semibold">Entity-First Strategy</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-green-500 rounded-full p-1 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </span>
              <span className="font-semibold">24/7 Rank Monitoring</span>
            </div>
          </div>
          <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 inline-block text-lg">
            Protect Your Rankings Now
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What is SEO Hardening?</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            SEO Hardening is a proactive, technical SEO methodology that fortifies a website's ranking foundation against Google Core Updates, algorithm volatility, and competitive threats.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Unlike traditional SEO which focuses strictly on growth, hardening focuses on <strong>resilience</strong> — ensuring that rankings don't crater when Google rolls out a major update. We build your site's authority into the Knowledge Graph, making you an unshakeable entity in Google's eyes.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Hardening Packages</h2>
            <p className="text-xl text-gray-600">Choose the level of resilience your business demands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tiers.map((tier, idx) => (
              <div key={idx} className={`relative flex flex-col p-8 rounded-3xl border ${tier.popular ? 'border-indigo-500 shadow-2xl scale-105 z-10' : 'border-gray-200 shadow-xl'} bg-white`}>
                {tier.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                    Most Recommended
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-500 text-sm h-12">{tier.description}</p>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-extrabold">{tier.price}</span>
                  <span className="text-gray-500 ml-2">/ {tier.period}</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 px-6 rounded-xl font-bold transition-all ${
                  tier.popular 
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}>
                  Get Hardened
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free SEO Hardening Score</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            We'll audit 5 key pages and tell you exactly how vulnerable you are to the next Google update.
          </p>
          <button className="bg-white text-blue-600 font-bold py-4 px-12 rounded-full shadow-lg hover:bg-blue-50 transition-all transform hover:scale-105">
            Audit My Site Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default SEOHardening;
