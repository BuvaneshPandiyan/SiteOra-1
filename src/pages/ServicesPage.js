import React from 'react';

// Import all service-related components
import FeaturedServices from '../components/FeaturedServices';
import CoreVitalsSection from '../components/CoreVitalsSection';
import TechnologyShowcase from '../components/TechnologyShowcase';
import ComparisonTable from '../components/ComparisonTable';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

function ServicesPage() {
  return (
    // Add padding-top to account for the fixed navbar
    <div className="pt-24 overflow-x-hidden">
      <FeaturedServices />
      <TechnologyShowcase />
      <ComparisonTable />
      <Pricing />
    <CoreVitalsSection />
      <FAQ />
    </div>
  );
}

export default ServicesPage;
