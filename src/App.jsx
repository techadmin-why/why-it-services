import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';

// Static imports for initial landing page to maintain instant FCP
import Home from './pages/Home';

// Lazy loaded page components for optimal bundle splitting
const DigitalStrategy = lazy(() => import('./pages/services/DigitalStrategy'));
const DigitalEngineering = lazy(() => import('./pages/services/DigitalEngineering'));
const DataEngineering = lazy(() => import('./pages/services/DataEngineering'));
const GenerativeAI = lazy(() => import('./pages/services/GenerativeAI'));
const InfrastructureServices = lazy(() => import('./pages/services/InfrastructureServices'));

const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Contact = lazy(() => import('./pages/Contact'));
const HireDevelopers = lazy(() => import('./pages/HireDevelopers'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const SecurityStatement = lazy(() => import('./pages/SecurityStatement'));
const Careers = lazy(() => import('./pages/Careers'));
const TrustSafety = lazy(() => import('./pages/TrustSafety'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ReserveSpot = lazy(() => import('./pages/ReserveSpot'));
const ScheduleDiscovery = lazy(() => import('./pages/ScheduleDiscovery'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const PressReleaseDetail = lazy(() => import('./pages/PressReleaseDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Admin = lazy(() => import('./pages/Admin'));

const FamilyCare = lazy(() => import('./pages/domains/FamilyCare'));
const HealthcareDomain = lazy(() => import('./pages/domains/HealthcareDomain'));
const FintechDomain = lazy(() => import('./pages/domains/FintechDomain'));
const SaasDomain = lazy(() => import('./pages/domains/SaasDomain'));
const EcommerceDomain = lazy(() => import('./pages/domains/EcommerceDomain'));
const LogisticsDomain = lazy(() => import('./pages/domains/LogisticsDomain'));
const EducationDomain = lazy(() => import('./pages/domains/EducationDomain'));
const RealEstateDomain = lazy(() => import('./pages/domains/RealEstateDomain'));
const ManufacturingDomain = lazy(() => import('./pages/domains/ManufacturingDomain'));

const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center py-16">
    <div className="flex flex-col items-center gap-3">
      <div className="w-9 h-9 border-3 border-purple-200 border-t-[#6D28D9] rounded-full animate-spin"></div>
      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest font-mono">Loading...</span>
    </div>
  </div>
);

export default function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-[#0F172A] font-sans antialiased selection:bg-[#6D28D9] selection:text-white">
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </Suspense>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAFAFC] text-[#0F172A] font-sans antialiased selection:bg-[#F3E8FF] selection:text-[#6D28D9]">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#6D28D9] focus:text-white focus:rounded-lg focus:shadow-xl font-bold text-xs"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <div>
        <Navbar />
        <Breadcrumbs />
        <main id="main-content" className="focus:outline-none" tabIndex={-1}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/digital-strategy" element={<DigitalStrategy />} />
              <Route path="/services/digital-engineering" element={<DigitalEngineering />} />
              <Route path="/services/data-engineering" element={<DataEngineering />} />
              <Route path="/services/generative-ai" element={<GenerativeAI />} />
              <Route path="/services/infrastructure-services" element={<InfrastructureServices />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/family-care" element={<FamilyCare />} />
              <Route path="/solutions/healthcare" element={<HealthcareDomain />} />
              <Route path="/solutions/fintech" element={<FintechDomain />} />
              <Route path="/solutions/saas" element={<SaasDomain />} />
              <Route path="/solutions/ecommerce" element={<EcommerceDomain />} />
              <Route path="/solutions/logistics" element={<LogisticsDomain />} />
              <Route path="/solutions/education" element={<EducationDomain />} />
              <Route path="/solutions/real-estate" element={<RealEstateDomain />} />
              <Route path="/solutions/manufacturing" element={<ManufacturingDomain />} />
              <Route path="/hire" element={<HireDevelopers />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reserve-spot" element={<ReserveSpot />} />
              <Route path="/schedule-discovery" element={<ScheduleDiscovery />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/security" element={<SecurityStatement />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/trust" element={<TrustSafety />} />
              <Route path="/trust-safety" element={<TrustSafety />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/insights" element={<NewsPage />} />
              <Route path="/about/news" element={<NewsPage />} />
              <Route path="/about/news/:slug" element={<PressReleaseDetail />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:slug" element={<PressReleaseDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}
