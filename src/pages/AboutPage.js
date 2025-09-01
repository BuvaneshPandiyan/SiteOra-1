import React from 'react';

// Import all about-related components
import WhyChooseUs from '../components/WhyChooseUs';
import OurSimpleProcess from '../components/OurSimpleProcess';
import MeetTheFounder from '../components/MeetTheFounder';
import Stats from '../components/Stats';
import About from '../components/AboutUs'; // Assuming the original 'About' component exists

function AboutPage() {
  return (
    <div className="pt-24">
      <About />
      <WhyChooseUs />
      <OurSimpleProcess />
      <MeetTheFounder />
      <Stats />
    </div>
  );
}

export default AboutPage;
