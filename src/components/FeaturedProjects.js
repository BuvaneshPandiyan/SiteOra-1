import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

// NOTE: Make sure you have these images in your assets/images folder.
import GenZMilletImage from '../assets/images/GenZMilletImage.png';
import SiteoraImage from '../assets/images/SiteoraImage.png'; 
import FionaMakeoverArtistryImage from '../assets/images/FionaMakeoverArtistryImage.png';

// ✅ NEW IMPORTS ADDED
import DredInteriorsImage from '../assets/images/DredInteriorsImage.png'; 
import S2SketchesImage from '../assets/images/S2SketchesImage.png'; 

const projects = [
    {
    title: 'Dred Interiors',
    description: 'A sophisticated portfolio and contact site for a premier interior design firm, showcasing their high-end residential and commercial projects.',
    tags: ['Interior Design', 'Portfolio Site', 'Web Development', 'React'],
    imageUrl: DredInteriorsImage,
    align: 'right',
    link: 'https://dredinteriors.com', 
  },
  // ✅ NEW PROJECT 2: S2 Sketches
  {
    title: 'S2 Sketches',
    description: 'A dynamic online presence for a portrait painting business, highlighting their unique services including portrait drawing, restoration, and acrylic commissions.',
    tags: ['Portrait Artistry', 'Digital Portfolio', 'Small Business', 'E-commerce'],
    imageUrl: S2SketchesImage,
    align: 'left',
    link: 'https://s2skteches.com', 
  },
  {
    title: 'Genz Millet',
    description: 'For this health-focused startup, we created an innovative WhatsApp e-commerce solution. To match their budget, we designed a streamlined static site where customers can browse millet products.',
    tags: ['WhatsApp E-commerce', 'Static Site', 'Small Business Solution', 'React'],
    imageUrl: GenZMilletImage,
    align: 'left',
    link: 'https://genzmillet.store', 
  },
  {
    title: 'Siteora',
    description: 'We engineered this comprehensive platform to deliver bespoke website creation services directly to customers. This live project powerfully showcases our ability to architect complex web applications.',
    tags: ['Web Development', 'Live Site', 'React', 'SaaS Platform'],
    imageUrl: SiteoraImage,
    align: 'right',
    link: 'https://siteora.online', 
  },
  {
    title: 'FionaArtistry',
    description: 'We are currently crafting a bespoke digital portfolio for a leading makeup artist that reflects the elegance of their work.',
    tags: ['Makeup Artistry', 'UI/UX Design', 'In Progress', 'Portfolio'],
    imageUrl: FionaMakeoverArtistryImage,
    align: 'left',
    link: null, 
  },
  // ✅ NEW PROJECT 1: Dred Interiors

];

// --- Project Card Component ---
const ProjectCard = ({ title, description, tags, imageUrl, align, link }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });
  const isRight = align === 'right';
  
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const currentCard = cardRef.current;
    if (!currentCard) return;

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const handleMouseMove = (e) => {
      const rect = currentCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (y - centerY) / centerY * -8;
      const tiltY = (x - centerX) / centerX * 8;
      setTilt({ x: tiltX, y: tiltY });
    };
    
    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    if (!isTouchDevice) {
      currentCard.addEventListener('mousemove', handleMouseMove);
      currentCard.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (!isTouchDevice && currentCard) {
        currentCard.removeEventListener('mousemove', handleMouseMove);
        currentCard.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      <div 
        ref={cardRef}
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch transition-transform duration-300 ease-out"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
        }}
      >
        {/* Image Container (2/3 width on desktop, full width on mobile) */}
        <div 
          className={`relative transition-all duration-1000 ease-out group lg:col-span-2 ${isRight ? 'lg:order-last' : ''} ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{ transform: 'translateZ(30px)' }}
        >
          {/* REINSTATED: The decorative background div for the colored effect */}
          <div className={`absolute -inset-4 bg-indigo-50 rounded-3xl transition-transform duration-700 delay-300 ${isRight ? '-rotate-2 group-hover:-rotate-3' : 'rotate-2 group-hover:rotate-3'} ${inView ? 'scale-100 rotate-0' : 'scale-90'}`}></div>
          
          <img 
            src={imageUrl} 
            alt={title} 
            // border-none added to explicitly remove any border from the image
            className="relative rounded-2xl border-none object-contain w-full h-auto sm:h-auto md:h-auto lg:h-[500px] transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        
        {/* Text Container (1/3 width on desktop, full width on mobile) */}
        <div 
          className={`lg:col-span-1 transition-all duration-1000 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transform: 'translateZ(60px)' }}
        >
          {/* MODIFIED: Removed `border border-gray-100` from this div */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex flex-col h-auto lg:h-full">
            
            <div className="flex-1 overflow-y-auto pr-4"> 
              <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
              <p className="mt-4 text-lg text-gray-700">{description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {tags.map(tag => (
                  <span key={tag} className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="flex-shrink-0 pt-6">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-300 group"
                >
                  View Live Site
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              ) : (
                <div className="inline-block text-lg font-semibold text-gray-400 cursor-not-allowed">
                  Full Project Coming Soon...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// --- End Project Card Component ---

// --- Main Component ---
function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Signature Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            A glimpse into the solutions we've crafted for our clients.
          </p>
        </div>
        <div className="space-y-28">
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;