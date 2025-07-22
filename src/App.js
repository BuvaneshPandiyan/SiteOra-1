import React from 'react';
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
import BackToTopButton from './components/BackToTopButton';
import About from './components/AboutUs';

function App() {
  return (
    <div className="bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 opacity-70"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-300 opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-indigo-300 opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-pink-300 opacity-20 animate-blob"></div>
        </div>
      </div>

      <Navbar />
      <main>
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
      </main>
      <About />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;