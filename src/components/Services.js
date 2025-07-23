import React, { useEffect, useState } from 'react';

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

  // State to track if the component has been scrolled into view
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('services-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        // Trigger animation when the section is 70% in view
        if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
          setInView(true);
        } else {
          setInView(false); // Reset if scrolled out of view
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Ensure Animate.css and Font Awesome are linked in your public/index.html or equivalent:
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" xintegrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEbMoFmJAyDG0f/z0+G+s/vHwWw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      */}
      <section
        id="services-section"
        className={`py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden
          animate__animated ${inView ? 'animate__fadeIn' : 'opacity-0'}`}
      >
        {/* Subtle Background Overlay with animation */}
        <div className="absolute inset-0 animated-bg-gradient -z-10 motion-reduce:animate-none"></div>
        {/* Animated background blobs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob motion-reduce:animate-none"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-1000 motion-reduce:animate-none"></div>
        <div className="absolute top-1/4 left-1/3 w-56 h-56 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-1000 motion-reduce:animate-none"></div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <span
              className={`text-blue-600 font-extrabold uppercase tracking-widest block mb-3 text-lg md:text-xl
                animate__animated ${inView ? 'animate__fadeInUp' : 'opacity-0'} motion-safe:animate-text-float-subtle motion-reduce:animate-none`}
            >
              OUR SERVICES
            </span>
            <h2
              className={`text-4xl md:text-6xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight drop-shadow-lg
                animate__animated ${inView ? 'animate__fadeInRight' : 'opacity-0'} animate__delay-0s motion-safe:animate-text-wave motion-reduce:animate-none`}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-text-glow motion-reduce:animate-none">Elevate Your</span> Online Presence
            </h2>
            <p
              className={`text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto
                animate__animated ${inView ? 'animate__fadeIn' : 'opacity-0'} animate__delay-1s motion-safe:animate-text-pulse motion-reduce:animate-none`}
            >
              We deliver modern, high-performance web solutions designed to make your business shine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-xl border border-gray-100 p-8 relative overflow-hidden
                  transition-all duration-500 ease-in-out group
                  hover:shadow-2xl hover:border-blue-400 transform hover:scale-[1.03] hover:rotate-1
                  animate__animated ${inView ? 'animate__fadeInUp' : 'opacity-0'} motion-reduce:animate-none`}
                style={{ animationDelay: inView ? `${0.15 * index + 0.5}s` : '0s' }} // Staggered animation
              >
                {/* Animated background circle on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-500 ease-in-out group-hover:scale-150 -z-10"></div>


                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl mb-8 shadow-lg
                    bg-gradient-to-br from-blue-500 to-indigo-600 transition-all duration-300 ease-in-out
                    group-hover:rotate-6 group-hover:scale-110 group-hover:from-indigo-600 group-hover:to-blue-600
                    motion-safe:animate-float motion-reduce:animate-none`}
                  style={{ animationDuration: '3s', animationDelay: `${0.1 * index}s` }} // Adjust float speed and stagger
                >
                  <i className={service.icon}></i>
                </div>
                <h3
                  className={`text-2xl font-extrabold text-gray-900 mb-4 leading-snug group-hover:text-blue-700 transition-colors duration-300
                    animate__animated ${inView ? 'animate__bounceIn' : 'opacity-0'} motion-safe:animate-text-jiggle motion-reduce:animate-none`}
                  style={{ animationDelay: inView ? `${0.15 * index + 0.8}s` : '0s' }} // Staggered delay for title
                >
                  {service.title}
                </h3>
                <p
                  className={`text-gray-700 mb-6 leading-relaxed text-opacity-90 tracking-normal
                    animate__animated ${inView ? 'animate__fadeInLeft' : 'opacity-0'} motion-safe:animate-text-breathe motion-reduce:animate-none`}
                  style={{ animationDelay: inView ? `${0.15 * index + 1.0}s` : '0s' }} // Staggered delay for description
                >
                  {service.description}
                </p>
                <ul
                  className={`space-y-3
                    animate__animated ${inView ? 'animate__fadeInUp' : 'opacity-0'} motion-reduce:animate-none`}
                  style={{ animationDelay: inView ? `${0.15 * index + 1.2}s` : '0s' }} // Staggered delay for features
                >
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-800">
                      <i
                        className={`fas fa-check-circle text-blue-500 mr-3 text-xl transition-transform duration-200 ease-in-out
                          group-hover:translate-x-1 motion-safe:animate-checkmark-pulse motion-reduce:animate-none`}
                      ></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated CSS Styles for animations */}
      <style jsx>{`
        /* --- General Animations --- */
        @keyframes pulseBackground {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(2deg);
          }
        }

        /* New continuous text animations */
        @keyframes text-float-subtle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes text-wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(0.5deg);
          }
          75% {
            transform: rotate(-0.5deg);
          }
        }

        @keyframes text-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.005);
            opacity: 0.95;
          }
        }

        @keyframes text-jiggle {
          0%, 100% {
            transform: translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateX(1px) rotate(0.2deg);
          }
          75% {
            transform: translateX(-1px) rotate(-0.2deg);
          }
        }

        @keyframes text-breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.002);
          }
        }

        @keyframes checkmark-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        /* Animated Blobs */
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Text Glow for 'Elevate Your' */
        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(100, 116, 139, 0.3), 0 0 10px rgba(129, 140, 248, 0.2);
          }
          50% {
            text-shadow: 0 0 15px rgba(100, 116, 139, 0.6), 0 0 25px rgba(129, 140, 248, 0.4);
          }
        }


        .animate-float {
          animation: float 3s infinite ease-in-out;
        }

        .animate-text-float-subtle {
          animation: text-float-subtle 3s infinite ease-in-out;
        }

        .animate-text-wave {
          animation: text-wave 5s infinite ease-in-out;
        }

        .animate-text-pulse {
          animation: text-pulse 4s infinite ease-in-out;
        }

        .animate-text-jiggle {
          animation: text-jiggle 2s infinite ease-in-out;
        }

        .animate-text-breathe {
          animation: text-breathe 3s infinite ease-in-out;
        }

        .animate-checkmark-pulse {
          animation: checkmark-pulse 1.5s infinite ease-in-out;
        }

        /* --- Section Background --- */
        .animated-bg-gradient {
          background: linear-gradient(135deg, #e0f7fa 0%, #d4eaf0 100%); /* Very light, calming blue gradient */
          background-size: 200% 200%; /* Make background larger for movement */
          animation: pulseBackground 10s infinite ease-in-out; /* Slower, smoother pulse */
        }
        .motion-reduce .animated-bg-gradient {
          animation: none; /* Disable animation for reduced motion */
        }
      `}</style>
    </>
  );
}

export default Services;
