import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import citiesData from '../data/cities.json';
import plansData from '../data/plans.json';
import PlanCard from '../components/PlanCard';
import LeadAuditForm from '../components/LeadAuditForm';

const Home = () => {
  const cities = Array.isArray(citiesData) ? citiesData : (citiesData?.default || []);
  const plans = Array.isArray(plansData) ? plansData : (plansData?.default || []);

  return (
    <div className="text-black">
      <Helmet>
        <title>CityCloud SEO Hosting | Fast Local Web Hosting</title>
        <meta name="description" content="Discover high-performance web hosting tailored for local businesses. Fast, reliable, and SEO-optimized hosting in major US cities." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Fast Local Web Hosting for Your Business
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
                Get the performance and reliability your local business needs. Powered by TurboCloudHost with locations across the US.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="#cities" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl inline-block text-center">
                  Find Your City
                </a>
                <a href="#audit" className="bg-white text-blue-600 border-2 border-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-all inline-block text-center">
                  Audit Your Site Free
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full" id="audit">
              <LeadAuditForm />
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Flexible Hosting Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
          {plans.length === 0 && <p className="text-center text-gray-500">No plans available at the moment.</p>}
          <div className="text-center">
            <Link 
              to="/resources/migration-calculator" 
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline bg-blue-50 px-6 py-3 rounded-full transition-all"
            >
              📊 Not sure which plan? See your speed boost & savings with our calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section id="cities" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Service Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
            {cities.map((city) => (
              <Link 
                key={city.slug} 
                to={`/${city.slug}`}
                className="p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
              >
                {city.name}, {city.state}
              </Link>
            ))}
          </div>
          {cities.length === 0 && <p className="text-center text-gray-500">No cities available at the moment.</p>}
        </div>
      </section>
    </div>
  );
};

export default Home;
