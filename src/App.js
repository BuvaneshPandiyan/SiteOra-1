import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Process from './components/Process';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppChatButton from './components/WhatsAppChatButton';
import About from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
// Re-adding the import for NotHiringModal
import NotHiringModal from './components/NotHiringModal';

function App() {
  // State to manage the current page view
  const [currentPage, setCurrentPage] = useState('home');
  // Re-adding state for the hiring modal visibility
  const [isHiringModalOpen, setIsHiringModalOpen] = useState(false);

  // Function to handle navigation
  const handleNavigation = (pageName) => {
    setCurrentPage(pageName);
    // Only scroll to top if navigating to a *new* full page.
    // For internal home page section scrolls, Navbar/Footer's navigateAndScroll handles it.
    if (pageName !== 'home') {
      window.scrollTo(0, 0);
    }
  };

  // Re-adding functions to open and close the hiring modal
  const handleOpenHiringModal = () => {
    setIsHiringModalOpen(true);
  };

  const handleCloseHiringModal = () => {
    setIsHiringModalOpen(false);
  };

  return (
    <div className="bg-gray-50">
      {/* Animated Background - only render if on the home page for performance/simplicity */}
      {currentPage === 'home' && (
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 opacity-70"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-300 opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-indigo-300 opacity-20 animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-pink-300 opacity-20 animate-blob"></div>
          </div>
        </div>
      )}

      {/* Navbar is always rendered and now receives currentPage */}
      <Navbar onNavigate={handleNavigation} currentPage={currentPage} />

      {/* Conditionally render main content or specific pages */}
      {currentPage === 'home' ? (
        <main className="pt-12"> {/* Adjusted padding-top to pt-12 for smaller navbar */}
          <Hero />
          <Clients />
          <Services />
          <Stats />
          <Portfolio />
          <Testimonials />
          <Pricing />
          <Process />
          <FAQ />
          <CTA />
          <Contact />
          <About />
        </main>
      ) : currentPage === 'privacy-policy' ? (
        <PrivacyPolicy onNavigate={handleNavigation} />
      ) : null
      }

      {/* Footer and WhatsAppChatButton are always rendered */}
      {/* Re-adding onOpenHiringModal prop */}
      <Footer onNavigate={handleNavigation} currentPage={currentPage} onOpenHiringModal={handleOpenHiringModal} />
      <WhatsAppChatButton />

      {/* Re-rendering the NotHiringModal */}
      <NotHiringModal isOpen={isHiringModalOpen} onClose={handleCloseHiringModal} />
    </div>
  );
}

export default App;
