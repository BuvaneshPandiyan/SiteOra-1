import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Layout and ALL Page Components
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import PricingPage from './pages/PricingPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import FloatingSocialIcons from './components/FloatingSocialIcons';

// Import Utility
import ScrollToTop from './utils/ScrollToTop';

function App() {
  const [isHiringModalOpen, setIsHiringModalOpen] = useState(false);

  const handleOpenHiringModal = () => setIsHiringModalOpen(true);
  const handleCloseHiringModal = () => setIsHiringModalOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <MainLayout 
              isHiringModalOpen={isHiringModalOpen}
              handleOpenHiringModal={handleOpenHiringModal}
              handleCloseHiringModal={handleCloseHiringModal}
            />
          }
        >
          {/* Nested Routes render in MainLayout's <Outlet> */}
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          
          {/* Optional 404 Page Route */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
   <FloatingSocialIcons /> 
    </BrowserRouter>
  );
}

export default App;