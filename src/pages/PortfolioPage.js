import React from 'react';

// Import all portfolio-related components
import FeaturedProjects from '../components/FeaturedProjects';
import IndustryExpertise from '../components/IndustryExpertise';
import ResponsiveShowcase from '../components/ResponsiveShowcase';
import Clients from '../components/Clients';

function PortfolioPage() {
  return (
    <div className="pt-24">
      <FeaturedProjects />
      <IndustryExpertise />
      <ResponsiveShowcase />
      <Clients />
    </div>
  );
}

export default PortfolioPage;
