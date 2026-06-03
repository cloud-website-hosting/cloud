import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">CityCloud SEO Hosting</Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li><Link to="/" className="hover:text-blue-200 font-medium">Home</Link></li>
            <li><Link to="/seo-hardening" className="hover:text-blue-200 font-medium">SEO Hardening</Link></li>
            <li><a href="/#plans" className="hover:text-blue-200 font-medium">Plans</a></li>
            <li 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="hover:text-blue-200 font-medium flex items-center gap-1">
                Resources
                <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 overflow-hidden text-gray-800 animate-fadeIn">
                  <Link 
                    to="/resources/local-seo-checklist" 
                    className="block px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-50"
                  >
                    <p className="font-bold text-sm text-blue-600">Local SEO Checklist</p>
                    <p className="text-xs text-gray-500">Boost your local rankings in 10 mins.</p>
                  </Link>
                  <Link 
                    to="/resources/core-update-survival-kit" 
                    className="block px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-50"
                  >
                    <p className="font-bold text-sm text-red-600">Core Update Survival Kit</p>
                    <p className="text-xs text-gray-500">5-day course to recover your traffic.</p>
                  </Link>
                  <Link 
                    to="/resources/migration-calculator" 
                    className="block px-4 py-3 hover:bg-blue-50 transition-colors"
                  >
                    <p className="font-bold text-sm text-purple-600">Migration Calculator</p>
                    <p className="text-xs text-gray-500">See your speed boost & savings.</p>
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
