/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './HomePage';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { LegalitySection } from './components/LegalitySection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
import { ContactPage } from './components/ContactPage';
import { LanguageProvider } from './context/LanguageContext';
import { NotificationProvider } from './context/NotificationContext';
import { ErrorBoundary } from './components/ErrorBoundary';

// Standard layout wrapper for inside pages (non-home pages)
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-[#050505] font-sans selection:bg-[#FFB800] selection:text-black flex flex-col">
    <Navbar />
    {/* pt-20 added here to prevent content hiding behind absolute navbar on standard pages */}
    <main className="flex-grow pt-[88px] md:pt-[104px]">{children}</main>
    <Footer />
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <NotificationProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={
                <div className="min-h-screen font-sans selection:bg-[#FFB800] selection:text-black flex flex-col">
                  <Navbar />
                  <main className="flex-grow">
                    <HomePage />
                  </main>
                  <Footer />
                </div>
              } />
              {/* Combine About and Legality */}
              <Route path="/about" element={
                <Layout>
                  <AboutSection />
                  <LegalitySection />
                </Layout>
              } />
              <Route path="/services" element={<Layout><ServicesSection /></Layout>} />
              <Route path="/projects" element={<Layout><ProjectsSection /></Layout>} />
              <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
            </Routes>
          </Router>
        </NotificationProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

