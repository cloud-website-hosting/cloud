import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import citiesData from '../data/cities.json';
import plansData from '../data/plans.json';
import contentData from '../data/content.json';
import PlanCard from '../components/PlanCard';
import LeadAuditForm from '../components/LeadAuditForm';
import CompetitiveMap from '../components/CompetitiveMap';

const CityDetail = () => {
  const { slug: rawSlug } = useParams();
  const slug = rawSlug.startsWith('hosting-') ? rawSlug.replace('hosting-', '') : rawSlug;
  
  const cities = Array.isArray(citiesData) ? citiesData : (citiesData?.default || []);
  const plans = Array.isArray(plansData) ? plansData : (plansData?.default || []);
  const cityContentList = contentData?.cities || (contentData?.default?.cities) || [];
  
  const city = cities.find((c) => c.slug === slug);
  const localizedContent = cityContentList.find((c) => c.slug === slug);

  if (!city) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-black">
        <h1 className="text-4xl font-bold mb-4">City Not Found</h1>
        <p className="text-xl mb-8">Sorry, we don't have a landing page for this location yet. (Requested: {slug})</p>
        <Link to="/" className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 transition-colors">
          Return to Home
        </Link>
      </div>
    );
  }

  const cityName = city.name;
  const stateName = city.state;
  
  // Use localized content if available, otherwise fallback to defaults
  const title = localizedContent?.meta_title || `Best Web Hosting in ${cityName}, ${stateName} | CityCloud SEO Hosting`;
  const description = localizedContent?.meta_description || `Looking for the best web hosting in ${cityName}, ${stateName}? CityCloud SEO Hosting provides fast, reliable, and secure cloud hosting for local businesses in ${cityName}.`;
  const h1 = localizedContent?.h1 || `Web Hosting in ${cityName}, ${stateName}`;
  const intro = localizedContent?.intro || `High-performance cloud hosting solutions specifically optimized for businesses in ${cityName}. Fast load times, local relevance, and 24/7 support.`;
  const h2s = localizedContent?.h2s || [
    `Why Choose CityCloud for your ${cityName} Business?`,
    `Local ${cityName} Statistics`,
    `Affordable Hosting Plans for ${cityName}`
  ];
  const planPlacement = localizedContent?.plan_placement || `Don't let slow hosting hold your ${cityName} business back. Sign up today and experience the difference.`;

  return (
    <div className="text-black bg-white min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://citycloudseohosting.com/${slug}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">{h1}</h1>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto lg:mx-0 opacity-90">
                {intro}
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="#plans" className="bg-white text-blue-700 font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-blue-50 transition-all transform hover:-translate-y-1 text-center">
                  View Hosting Plans
                </a>
                <a href="#audit" className="bg-blue-600 bg-opacity-30 border-2 border-white border-opacity-50 text-white font-bold py-4 px-10 rounded-lg hover:bg-opacity-40 transition-all text-center">
                  Audit My Site Free
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full" id="audit">
              <LeadAuditForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">{h2s[0] || "Why Choose Us"}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When you're looking for <strong>web hosting in {cityName}</strong>, you need a provider that understands the local market. 
                Our localized infrastructure ensures that your website loads lightning-fast for your customers in {cityName} and surrounding areas.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Localized Performance</h4>
                    <p className="text-gray-600 text-sm">Servers optimized for the {stateName} region.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">SEO Advantage</h4>
                    <p className="text-gray-600 text-sm">Local signals to boost {cityName} rankings.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">24/7 Expert Support</h4>
                    <p className="text-gray-600 text-sm">Real humans ready to help anytime.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Free SSL & Security</h4>
                    <p className="text-gray-600 text-sm">Keep your site and visitors safe.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5 w-full">
              <div className="bg-gray-50 border border-gray-100 p-10 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{h2s[1] || `Local ${cityName} Stats`}</h3>
                <p className="mb-8 text-gray-600">Join hundreds of businesses in {cityName}, {stateName} that trust us.</p>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span className="text-gray-700">Network Uptime</span>
                    <span className="text-2xl font-bold text-blue-600">99.99%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span className="text-gray-700">Local Latency</span>
                    <span className="text-2xl font-bold text-blue-600">&lt;20ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Customer Satisfaction</span>
                    <span className="text-2xl font-bold text-blue-600">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <CompetitiveMap citySlug={slug} cityName={cityName} />
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">{h2s[2] || "Hosting Plans"}</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include NVMe storage and 24/7 support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Hardening Banner */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect your {cityName} business rankings.</h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Google Core Updates can be devastating. Our SEO Hardening service builds algorithmic armor around your site, ensuring your {cityName} customers can always find you.
          </p>
          <Link to="/seo-hardening" className="inline-block bg-white text-indigo-900 font-bold py-3 px-10 rounded-full shadow-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1">
            Learn About SEO Hardening
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Ready to boost your local SEO?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            {planPlacement}
          </p>
          <a 
            href={plans[0]?.url || 'https://turbocloudhost.duoservers.com/linux-cloud-web-hosting/'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-105"
          >
            Start Your 30-Day Free Trial
          </a>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": h1,
        "description": description,
        "areaServed": {
          "@type": "City",
          "name": cityName,
          "address": {
            "@type": "PostalAddress",
            "addressRegion": stateName,
            "addressCountry": "US"
          }
        },
        "provider": {
          "@type": "Organization",
          "name": "CityCloud SEO Hosting",
          "url": "https://citycloudseohosting.com"
        }
      }) }} />
    </div>
  );
};

export default CityDetail;
