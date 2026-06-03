import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CityDetail from './pages/CityDetail';
import SEOHardening from './pages/SEOHardening';
import LocalSEOChecklist from './pages/LocalSEOChecklist';
import CoreUpdateSurvivalKit from './pages/CoreUpdateSurvivalKit';
import MigrationCalculator from './pages/MigrationCalculator';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-black bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seo-hardening" element={<SEOHardening />} />
            <Route path="/resources/local-seo-checklist" element={<LocalSEOChecklist />} />
            <Route path="/resources/core-update-survival-kit" element={<CoreUpdateSurvivalKit />} />
            <Route path="/resources/migration-calculator" element={<MigrationCalculator />} />
            <Route path="/:slug" element={<CityDetail />} />
            <Route path="*" element={<div className="py-20 text-center text-2xl font-bold">404 - Page Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
