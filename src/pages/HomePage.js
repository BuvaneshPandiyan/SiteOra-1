import React from 'react';

// Import our new animation wrapper
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

// Import all components for the final, massive homepage
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import FeaturedServices from '../components/FeaturedServices';
import WhyChooseUs from '../components/WhyChooseUs';
import ResponsiveShowcase from '../components/ResponsiveShowcase';
import FeaturedProjects from '../components/FeaturedProjects';
import CoreVitalsSection from '../components/CoreVitalsSection';
import TechnologyShowcase from '../components/TechnologyShowcase';
import IndustryExpertise from '../components/IndustryExpertise';
import OurSimpleProcess from '../components/OurSimpleProcess';
import Testimonials from '../components/Testimonials';
import MeetTheFounder from '../components/MeetTheFounder';
import ComparisonTable from '../components/ComparisonTable';
import CTA from '../components/CTA';

function HomePage() {
  return (
    <>
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

      <main className="pt-12 overflow-x-hidden">
        {/* Each section is now wrapped with our animation component */}
        <ScrollAnimationWrapper animationType="fadeInUp"><Hero /></ScrollAnimationWrapper>
                <ScrollAnimationWrapper animationType="zoomIn"><FeaturedProjects /></ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="fadeInUp"><ResponsiveShowcase /></ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="slideInRight"><WhyChooseUs /></ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="slideInLeft"><FeaturedServices /></ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="slideInRight"><MeetTheFounder /></ScrollAnimationWrapper>

        <ScrollAnimationWrapper animationType="zoomIn"><Clients /></ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="zoomIn"><OurSimpleProcess /></ScrollAnimationWrapper>
                <ScrollAnimationWrapper animationType="slideInLeft"><CoreVitalsSection /></ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="fadeInUp"><IndustryExpertise /></ScrollAnimationWrapper>

        <ScrollAnimationWrapper animationType="slideInLeft"><Testimonials /></ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="slideInRight"><TechnologyShowcase /></ScrollAnimationWrapper>

        <ScrollAnimationWrapper animationType="fadeInUp"><ComparisonTable /></ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="zoomIn"><CTA /></ScrollAnimationWrapper>
      </main>
    </>
  );
}

export default HomePage;
