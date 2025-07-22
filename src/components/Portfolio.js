import React, { useRef, useEffect, useState } from 'react';

function Portfolio() {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "E-Commerce Solutions",
      category: "Fashion & Retail",
      description: "We craft intuitive and high-converting e-commerce platforms, designed with seamless user experiences and robust backend systems to maximize your online sales and customer satisfaction."
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Content & Publishing Platforms",
      category: "Media & Publishing",
      description: "Our platforms enable effortless content creation and distribution, featuring dynamic layouts, powerful SEO tools, and engaging reader experiences to amplify your message and reach."
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Corporate Web Presence",
      category: "Business Services",
      description: "Building professional, responsive, and secure corporate websites that reflect your brand's integrity and values, providing a strong digital foundation for your business operations."
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "SaaS Application Development",
      category: "Technology",
      description: "Developing scalable and secure SaaS applications with user-centric design and robust architecture, ensuring your software delivers exceptional value and performance to your users."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Hospitality & Food Platforms",
      category: "Food & Beverage",
      description: "Creating visually appealing and highly functional websites for restaurants and hospitality, focusing on easy navigation, online ordering, and engaging visual menus to attract and retain customers."
    },
    {
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Travel & Tourism Portals",
      category: "Tourism",
      description: "Designing comprehensive travel portals with intuitive booking systems, rich destination content, and personalized user journeys to make travel planning effortless and enjoyable for your clients."
    },
  ];

  return (
    <>
      <style jsx>{`
        .gradient-bg {
          background: linear-gradient(to right, #6366f1, #4f46e5); /* Tailwind indigo-600 to indigo-700 */
        }

        /* Base styles for portfolio item */
        .portfolio-item {
          position: relative;
          overflow: hidden;
          border-radius: 0.75rem; /* rounded-xl */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
          transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out; /* Smooth transition for transform and shadow */
        }

        /* Image styling */
        .portfolio-item img {
          width: 100%;
          height: 16rem; /* h-64 */
          object-fit: cover;
          transition: transform 0.5s ease-in-out; /* Smooth transition for image zoom */
        }

        /* Overlay content styling */
        .portfolio-item .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #6366f1, transparent); /* from-indigo-600 to-transparent */
          opacity: 0; /* Initially hidden */
          display: flex;
          align-items: flex-end;
          padding: 1.5rem; /* p-6 */
          transition: opacity 0.4s ease-in-out; /* Smooth transition for overlay */
        }

        .portfolio-item .overlay-content {
          transform: translateY(20px); /* Start content slightly lower */
          transition: transform 0.4s ease-in-out; /* Smooth transition for content reveal */
        }

        /* Desktop Hover Effects */
        @media (hover: hover) {
          .portfolio-item:hover {
            transform: translateY(-10px) scale(1.02); /* Lifts and slightly scales the card */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* More pronounced shadow */
          }

          .portfolio-item:hover img {
            transform: scale(1.15); /* Slightly more zoom on image */
          }

          .portfolio-item:hover .overlay {
            opacity: 1; /* Show overlay on hover */
          }

          .portfolio-item:hover .overlay-content {
            transform: translateY(0); /* Animate content to its natural position */
          }
        }

        /* Mobile "Automatic Reveal on Scroll" (when element enters viewport) */
        @media (hover: none) {
          .portfolio-item.in-viewport .overlay {
            opacity: 1; /* Always show overlay if in viewport on touch devices */
          }

          .portfolio-item.in-viewport .overlay-content {
            transform: translateY(0); /* Always show content if in viewport on touch devices */
          }
        }
      `}</style>

      <section id="portfolio" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-medium">OUR APPROACH</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Crafting Your Digital Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover how our commitment to innovation, quality, and partnership will bring your vision to life and drive impactful results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <PortfolioItem key={index} item={item} />
            ))}
          </div>

          <div className="text-center">
            <a href="#contact" className="inline-block px-8 py-3 gradient-bg text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Let's Build Your Vision
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// New component for individual portfolio items to manage Intersection Observer
const PortfolioItem = ({ item }) => {
  const itemRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      {
        root: null, // viewport as root
        rootMargin: '0px',
        threshold: 0.4, // Trigger when 40% of the item is visible
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`portfolio-item ${isInViewport ? 'in-viewport' : ''}`}
    >
      <img
        src={item.image}
        alt={`Illustration of ${item.title}`}
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/cccccc/333333?text=Image+Unavailable"; }} // Fallback image
      />
      <div className="overlay">
        <div className="overlay-content">
          <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
          <p className="text-indigo-200 text-sm mb-2">{item.category}</p>
          <p className="text-white text-sm">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;