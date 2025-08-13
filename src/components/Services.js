import React, { useEffect, useState, useRef } from 'react';

function Services() {
  const servicesData = [
    {
      icon: "fas fa-laptop-code",
      title: "Blazing-Fast Static Website Development",
      description: "Crafting visually stunning and highly optimized websites that load in an instant. Perfect for portfolios, landing pages, business brochures, and informational sites.",
      features: [
        "Future-Proof Static Architecture",
        "Pixel-Perfect Responsive Design",
        "Seamless UI/UX Integration",
        "Built for Speed (Core Web Vitals Optimized)",
      ],
    },
    {
      icon: "fas fa-globe-asia",
      title: "Domain & Hosting Package",
      description: "Secure your professional online identity with a custom domain name. We provide a complimentary SSL certificate and leverage platforms that eliminate monthly hosting fees.",
      features: [
        "Free Custom Domain (1st Year)",
        "Free SSL/HTTPS Security",
        "Zero Monthly Hosting Fees",
        "High-Performance Global CDN",
      ],
    },
    {
      icon: "fas fa-hand-holding-usd",
      title: "Annual Maintenance & SEO",
      description: "After development, an annual fee of ₹4000 covers your domain renewal and maintenance. This includes expert SEO to ensure your website ranks high on search engines.",
      features: [
        "Annual Fee: ₹4000",
        "Custom Domain Renewal Included",
        "Top-Tier SEO Optimization",
        "Ongoing Website Maintenance",
      ],
    },
    {
      icon: "fas fa-bullhorn",
      title: "Front-End SEO & Performance Optimization",
      description: "We implement best practices for on-page SEO, semantic HTML, and image optimization to give your site a strong foundation for search engine visibility.",
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
      description: "We specialize in creating engaging online presences designed purely for information dissemination and direct client contact, like landing pages and service showcases.",
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
      description: "We craft intuitive user interfaces and delightful user experiences. From wireframes to prototypes, we ensure your site reflects your brand's aesthetic.",
      features: [
        "Custom Brand Style Guides",
        "User-Centric Design Principles",
        "Interactive Wireframes & Mockups",
        "Accessibility & Usability Focus",
      ],
    },
  ];

  // --- State Hooks ---
  const [inView, setInView] = useState(false);
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);

  // --- Refs for Observers ---
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  // --- Effects for Animations & Interactions ---

  // Observer for the whole section fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer for the mobile carousel pagination
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleCardIndex(index);
          }
        });
      },
      {
        root: document.querySelector('.mobile-carousel-container'),
        threshold: 0.51,
      }
    );
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [servicesData.length]);

  return (
    <>
      <section
        id="services-section"
        ref={sectionRef}
        className={`py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden
          animate__animated ${inView ? 'animate__fadeIn' : 'opacity-0'}`}
      >
        <div className="absolute inset-0 animated-bg-gradient -z-10 motion-reduce:animate-none"></div>
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

          {/* --- Desktop & Tablet Grid View --- */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-xl border border-gray-100 p-8 relative overflow-hidden
                  transition-all duration-500 ease-in-out group
                  hover:shadow-2xl hover:border-blue-400 transform hover:scale-[1.03] hover:rotate-1
                  animate__animated ${inView ? 'animate__fadeInUp' : 'opacity-0'} motion-reduce:animate-none`}
                style={{ animationDelay: inView ? `${0.15 * index + 0.5}s` : '0s' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-500 ease-in-out group-hover:scale-150 -z-10"></div>
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl mb-8 shadow-lg
                    bg-gradient-to-br from-blue-500 to-indigo-600 transition-all duration-300 ease-in-out
                    group-hover:rotate-6 group-hover:scale-110 group-hover:from-indigo-600 group-hover:to-blue-600
                    motion-safe:animate-float motion-reduce:animate-none`}
                  style={{ animationDuration: '3s', animationDelay: `${0.1 * index}s` }}
                >
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4 leading-snug group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-opacity-90 tracking-normal">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-800">
                      <i className="fas fa-check-circle text-blue-500 mr-3 text-xl transition-transform duration-200 ease-in-out group-hover:translate-x-1"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* --- Mobile-Only Horizontal Scroll View --- */}
          <div className="sm:hidden">
            <div className="mobile-carousel-container flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-5 pb-5 -mx-4 px-4 scrollbar-hide">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  ref={addToRefs}
                  data-index={index}
                  className="flex-shrink-0 w-[90%] snap-center bg-white rounded-3xl shadow-xl border border-gray-100 p-8 relative overflow-hidden"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg bg-gradient-to-br from-blue-500 to-indigo-600">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-5 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-800 text-sm">
                        <i className="fas fa-check-circle text-blue-500 mr-2.5 text-lg"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Pagination Dots */}
            <div className="flex justify-center items-center mt-6 space-x-2">
              {servicesData.map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    visibleCardIndex === index ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Restored Original Custom Styles --- */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes pulseBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55); }
        .animate-float { animation: float 3s infinite ease-in-out; }
        .animated-bg-gradient {
          background: linear-gradient(135deg, #e0f7fa 0%, #d4eaf0 100%);
          background-size: 200% 200%;
          animation: pulseBackground 10s infinite ease-in-out;
        }
        .animation-delay-1000 { animation-delay: 2s; }
      `}</style>
    </>
  );
}

export default Services;
