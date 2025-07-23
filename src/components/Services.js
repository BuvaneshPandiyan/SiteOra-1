import React from 'react';

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

  return (
    <>
      {/* Integrated CSS Styles */}
      <style jsx>{`
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
          0% { opacity: 0.5; }
          50% { opacity: 0.7; }
          100% { opacity: 0.5; }
        }

        @keyframes bounceIn {
          0%, 20%, 40%, 60%, 80%, 100% {
            -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
          }
          0% {
            opacity: 0;
            -webkit-transform: scale3d(.3, .3, .3);
            transform: scale3d(.3, .3, .3);
          }
          20% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1);
            transform: scale3d(1.1, 1.1, 1.1);
          }
          40% {
            -webkit-transform: scale3d(.9, .9, .9);
            transform: scale3d(.9, .9, .9);
          }
          60% {
            opacity: 1;
            -webkit-transform: scale3d(1.03, 1.03, 1.03);
            transform: scale3d(1.03, 1.03, 1.03);
          }
          80% {
            -webkit-transform: scale3d(.97, .97, .97);
            transform: scale3d(.97, .97, .97);
          }
          100% {
            opacity: 1;
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }
        }

        /* --- Section Background --- */
        .animated-bg-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          animation: pulseBackground 8s infinite ease-in-out;
        }

        /* --- Service Card Styles --- */
        .service-card {
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smooth transition */
          animation: fadeInSlideUp 0.8s ease-out forwards;
          opacity: 0; /* Hidden initially for animation */
        }

        .service-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(79, 70, 229, 0.3), /* Deeper shadow */
                      0 0 0 8px rgba(79, 70, 229, 0.1); /* More pronounced glow */
          z-index: 10; /* Bring card to front on hover */
        }

        /* --- Icon Container Styles --- */
        .icon-container {
          background: linear-gradient(45deg, #4f46e5, #a855f7); /* Vibrant gradient */
          transition: transform 0.4s ease-out, background 0.4s ease-out;
        }

        .service-card:hover .icon-container {
          transform: rotate(10deg) scale(1.1); /* More pronounced rotation and scale */
          background: linear-gradient(45deg, #a855f7, #4f46e5); /* Gradient shift on hover */
        }

        /* --- Checkmark Icons --- */
        .feature-icon {
            transition: transform 0.2s ease-in-out;
        }

        .service-card:hover .feature-icon {
            transform: translateX(5px); /* Slide checkmark on hover */
        }

        /* --- Initial Load Animation Delays for Header --- */
        .animate-delay-100 { animation-delay: 0.1s; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; } /* New delay for initial load */

        /* --- Responsive Adjustments for Mobile Screens --- */

        /* Target screens up to 767px wide (typical small/medium mobile) */
        @media (max-width: 767px) {
          .py-16 {
            padding-top: 3rem; /* Reduce top padding */
            padding-bottom: 3rem; /* Reduce bottom padding */
          }

          .text-4xl {
            font-size: 2.5rem; /* Slightly smaller heading on mobile */
          }

          .md\\:text-5xl {
            font-size: 3rem; /* Ensure it scales down if it's the base size */
          }

          .text-xl {
            font-size: 1.125rem; /* Smaller paragraph text */
          }

          .service-card {
            padding: 1.5rem; /* Adjust card padding for smaller screens */
          }

          .service-card:hover {
            transform: translateY(-5px) scale(1.01); /* Less aggressive hover effect on mobile */
            box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2), /* Smaller shadow */
                        0 0 0 4px rgba(79, 70, 229, 0.05); /* Smaller glow */
          }

          .icon-container {
            width: 4rem; /* Smaller icon container */
            height: 4rem;
            font-size: 1.5rem; /* Smaller icon size */
            margin-bottom: 1rem; /* Adjust margin */
          }

          .service-card:hover .icon-container {
            transform: rotate(5deg) scale(1.05); /* Less pronounced rotation and scale */
          }

          .text-2xl {
            font-size: 1.75rem; /* Smaller service title */
          }

          .text-gray-700 {
            font-size: 0.95rem; /* Slightly smaller description text */
          }

          .space-y-3 > li {
            font-size: 0.9rem; /* Smaller feature text */
          }
        }

        /* Target screens up to 480px wide (very small mobile) */
        @media (max-width: 480px) {
          .py-16 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .text-4xl {
            font-size: 2rem;
          }

          .md\\:text-5xl {
            font-size: 2.5rem;
          }

          .text-xl {
            font-size: 1rem;
          }

          .icon-container {
            width: 3.5rem;
            height: 3.5rem;
            font-size: 1.25rem;
          }

          .text-2xl {
            font-size: 1.5rem;
          }

          .text-gray-700, .space-y-3 > li {
            font-size: 0.875rem;
          }

          /* Ensure horizontal padding is appropriate for very small screens */
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
            <span className="text-indigo-600 font-semibold uppercase tracking-wide animate-fade-in-up">OUR SERVICES</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4 leading-tight animate-fade-in-up animate-delay-100">
              Elevate Your Online Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              We deliver modern, high-performance web solutions designed to make your business shine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg service-card"
                style={{ animationDelay: `${0.15 * index + 0.3}s` }} // Staggered animation with more pronounced delay
              >
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-6 shadow-md icon-container">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 leading-snug">{service.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
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
