import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 mt-20 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">CityCloud SEO Hosting</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              High-performance local cloud hosting integrated with expert Google SEO Hardening. We ensure local businesses not only rank but also capture and convert their search traffic.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Free Resources</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link to="/resources/local-seo-checklist" className="hover:text-white transition-colors">Local SEO Quick-Win Checklist</Link>
              </li>
              <li>
                <Link to="/resources/core-update-survival-kit" className="hover:text-white transition-colors">Google Core Update Survival Kit</Link>
              </li>
              <li>
                <Link to="/resources/migration-calculator" className="hover:text-white transition-colors">Migration & ROI Calculator</Link>
              </li>
              <li>
                <Link to="/seo-hardening" className="hover:text-white transition-colors">SEO Hardening Services</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><a href="/#plans" className="hover:text-white transition-colors">Hosting Plans</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} CityCloud SEO Hosting. Powered by TurboCloudHost.
          </p>
          <p className="text-slate-500 text-xs">
            Hyper-localized web hosting for your business success.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
