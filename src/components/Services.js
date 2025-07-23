import React, { useEffect, useRef, useState } from 'react';

// Make sure to include Font Awesome in your public/index.html or equivalent:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
// And Animate.css:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

function Services() {
  const servicesData = [
    {
      icon: "fas fa-laptop-code",
      title: "Blazing-Fast Static Website Development",
      description: "Crafting visually stunning and highly optimized websites that load in an instant. Perfect for portfolios, landing pages, business brochures, and informational sites. No backend hassle, just pure front-end power.",
      features: [
        "Future-Proof Static Architecture",
        "Pixel-Perfect Responsive Design",
        "Seamless UI/UX Integration",
        "Built for Speed (Core Web Vitals Optimized)",
      ],
    },
    {
      icon: "fas fa-cloud-upload-alt",
      title: "FREE Hosting with Netlify/Vercel (Subdomain)",
      description: "Your website gets deployed on industry-leading platforms like Netlify or Vercel's generous free tiers. This means **zero hosting fees forever**! Your site will live on a reliable, blazing-fast global network, accessible via a subdomain(e.g.,`yourproject.netlify.app` or `yourproject.vercel.app`).",
      features: [
        "Zero Monthly Hosting Costs",
        "Automatic SSL/HTTPS Security",
        "Global Content Delivery Network (CDN)",
        "Continuous Deployment from Git",
      ],
    },
    {
      icon: "fas fa-wallet",
      title: "Transparent One-Time Payment",
      description: "Get your complete, professional website with a simple, upfront **one-time payment**. No hidden fees, no recurring subscriptions from us for the development work. This covers design, development, and initial setup.",
      features: [
        "Clear, Upfront Pricing",
        "No Recurring Development Fees",
        "Exceptional Value for Static Sites",
        "Focus on Your Business, Not Bills",
      ],
    },
    {
      icon: "fas fa-bullhorn",
      title: "Front-End SEO & Performance Optimization",
      description: "Ensure your website is discoverable and performs exceptionally. We implement best practices for on-page SEO, semantic HTML, and image optimization to give your site a strong foundation for search engine visibility and a smooth user experience.",
      features: [
        "Keyword-Optimized Content Structure",
        "Lightning-Fast Page Load Times",
        "Search Engine Friendly Markup",
        "Google Core Web Vitals Focus",
      ],
    },
    {
      icon: "fas fa-handshake",
      title: "Direct Contact & Information Websites",
      description: "We specialize in creating engaging online presences designed purely for information dissemination and direct client contact. Think captivating landing pages, detailed service showcases, and elegant online brochures.",
      features: [
        "Interactive Forms (via third-party services)",
        "Clear Call-to-Action Design",
        "Integrated Social Media Feeds",
        "Easy-to-Navigate Information Architecture",
      ],
    },
    {
      icon: "fas fa-palette",
      title: "Branded UI/UX Design & Prototyping",
      description: "More than just code, we craft intuitive user interfaces and delightful user experiences. From wireframes to interactive prototypes, we ensure your site is not just functional, but a joy to use and perfectly reflects your brand's aesthetic.",
      features: [
        "Custom Brand Style Guides",
        "User-Centric Design Principles",
        "Interactive Wireframes & Mockups",
        "Accessibility & Usability Focus",
      ],
    },
  ];

  // Ref to hold all service card elements
  const serviceCardRefs = useRef([]);
  // State to track which cards have been animated
  const [animatedCards, setAnimatedCards] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedCards[entry.target.id]) {
            // Add the animation class when element is in view and not yet animated
            entry.target.classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-0s'); // Reset delay for immediate animation
            setAnimatedCards(prev => ({ ...prev, [entry.target.id]: true }));
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2, // Trigger when 20% of the item is visible
      }
    );

    // Observe each service card
    serviceCardRefs.current.forEach((cardRef, index) => {
      if (cardRef) {
        // Assign a unique ID to each card for tracking animation state
        cardRef.id = `service-card-${index}`;
        observer.observe(cardRef);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [animatedCards]); // Re-run effect if animatedCards state changes (though unobserve handles most cases)

  return (
    <>
      {/* Tailwind CSS CDN - Ensure this is loaded in your main HTML file or configured in your project */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Inter Font - Ensure this is loaded in your main HTML file or configured in your project */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />

      {/* Integrated CSS Styles */}
      <style jsx>{`
        /* Apply Inter font globally */
        body {
          font-family: 'Inter', sans-serif;
        }

        /* --- General Animations --- */
        @keyframes fadeInSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        /* --- Section Background --- */
        .animated-bg-gradient {
          background: linear-gradient(135deg, #667eea, #764ba2, #4f46e5, #a855f7);
          background-size: 400% 400%;
          animation: pulseBackground 15s infinite ease-in-out;
        }

        /* --- Service Card Styles (Outer Container) --- */
        .service-card {
          position: relative;
          overflow: hidden; /* Crucial for the slide-in/out effect */
          min-height: 380px; /* Adjusted min-height to accommodate content and transitions */
          border-radius: 0.75rem; /* Matches rounded-xl */
          box-shadow: 0 10px 20px rgba(0,0,0,0.1); /* Initial shadow */
          background-color: white; /* Default background */
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smooth transition for lift/shadow */
          /* Initially hidden for IntersectionObserver animation */
          opacity: 0;
          transform: translateY(30px);
          border: 2px solid transparent; /* For the subtle border glow */
          background-clip: padding-box;
        }

        .service-card:hover {
          transform: translateY(-15px) scale(1.03); /* More pronounced lift and scale */
          box-shadow: 0 25px 50px rgba(79, 70, 229, 0.4), /* Deeper, more vibrant shadow */
                      0 0 0 10px rgba(79, 70, 229, 0.15); /* More pronounced, slightly larger glow */
          z-index: 10; /* Bring card to front on hover */
          border-color: #4f46e5; /* Highlight border on hover */
        }

        /* Add a subtle inner shadow/border effect on hover */
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 0.75rem; /* Matches rounded-xl */
          padding: 2px; /* Controls the thickness of the inner border */
          background: linear-gradient(45deg, #4f46e5, #a855f7);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover::before {
          opacity: 1;
        }

        /* --- Card Content Containers --- */
        .card-front-content, .card-back-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 2rem; /* Consistent padding */
          box-sizing: border-box;
          transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .card-back-content {
          opacity: 0;
          transform: translateY(100%); /* Start from bottom */
          background: linear-gradient(135deg, #f0f4f8, #e0e7ff); /* Lighter gradient for back */
          color: #333;
          justify-content: flex-start; /* Align features to the top */
          padding-top: 3rem; /* More padding at top for features */
        }

        .service-card:hover .card-front-content {
          opacity: 0;
          transform: translateY(-100%); /* Slide up and out */
        }

        .service-card:hover .card-back-content {
          opacity: 1;
          transform: translateY(0); /* Slide in */
        }

        /* --- Icon Container Styles --- */
        .icon-container {
          background: linear-gradient(45deg, #4f46e5, #a855f7); /* Vibrant gradient */
          transition: transform 0.4s ease-out, background 0.4s ease-out, box-shadow 0.4s ease-out;
          box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2); /* Initial shadow */
          position: relative;
          overflow: hidden; /* For the shine effect */
        }

        /* Shine effect for icon container */
        .icon-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
          transform: translateX(-100%);
          transition: transform 0.6s ease-out;
        }

        .service-card:hover .icon-container::after {
          transform: translateX(100%);
        }

        /* --- Checkmark Icons --- */
        .feature-icon {
          transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
        }

        .card-back-content .space-y-3 li {
            text-align: left; /* Align list items to the left */
            width: 100%; /* Ensure list items take full width */
        }

        /* --- Initial Load Animation for Header (using animate.css classes) --- */
        .animate-fade-in-up {
          animation-name: fadeInUp; /* from animate.css */
          animation-duration: 1s;
          animation-fill-mode: both;
        }
        .animate-delay-100 { animation-delay: 0.1s; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; }

        /* Staggered animation for service cards (handled by JS, but base style here) */
        .service-card.animate__animated {
          animation-duration: 1s;
          animation-fill-mode: both;
        }

        /* --- Responsive Adjustments --- */
        @media (max-width: 767px) {
          .py-16 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .text-4xl { font-size: 2.5rem; }
          .md\\:text-5xl { font-size: 3rem; }
          .text-xl { font-size: 1.125rem; }
          .service-card { min-height: 350px; padding: 0; } /* Adjust min-height, remove padding from outer card */
          .card-front-content, .card-back-content { padding: 1.5rem; } /* Adjust inner content padding */
          .service-card:hover {
            transform: translateY(-5px) scale(1.01);
            box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2),
                        0 0 0 4px rgba(79, 70, 229, 0.05);
          }
          .icon-container {
            width: 4rem;
            height: 4rem;
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
          .text-2xl { font-size: 1.75rem; }
          .text-gray-700 { font-size: 0.95rem; }
          .space-y-3 > li { font-size: 0.9rem; }
        }

        @media (max-width: 480px) {
          .py-16 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .text-4xl { font-size: 2rem; }
          .md\\:text-5xl { font-size: 2.5rem; }
          .text-xl { font-size: 1rem; }
          .icon-container {
            width: 3.5rem;
            height: 3.5rem;
            font-size: 1.25rem;
          }
          .text-2xl { font-size: 1.5rem; }
          .text-gray-700, .space-y-3 > li { font-size: 0.875rem; }
          .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>

      <section id="services" className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Subtle Background Overlay with animation */}
        <div className="absolute inset-0 animated-bg-gradient -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-semibold uppercase tracking-wide animate__animated animate__fadeInUp animate__delay-0s">OUR SERVICES</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4 leading-tight animate__animated animate__fadeInUp animate__delay-100">
              Elevate Your Online Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-200">
              We deliver modern, high-performance web solutions designed to make your business shine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                // Assign ref to each card for IntersectionObserver
                ref={el => serviceCardRefs.current[index] = el}
                className="service-card" // This is the main container for the reveal effect
              >
                {/* Front content */}
                <div className="card-front-content">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-6 shadow-md icon-container">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 leading-snug">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>

                {/* Back content (features) */}
                <div className="card-back-content">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-800">
                        <i className="fas fa-check-circle text-indigo-500 mr-3 text-lg feature-icon"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
