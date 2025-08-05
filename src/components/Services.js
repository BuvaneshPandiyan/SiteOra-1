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
      icon: "fas fa-globe-asia",
      title: "Domain & Hosting Package",
      description: "Secure your professional online identity with a custom domain name, free for the first year. We provide a complimentary SSL certificate for security and leverage powerful platforms that eliminate monthly hosting fees.",
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
      description: "After the initial development, an annual fee of ₹4000 covers your domain renewal and ongoing maintenance. This also includes expert SEO to ensure your website ranks high on search engines, making it easily discoverable by your audience.",
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
  // State for the active card index in the mobile stack
  const [activeIndex, setActiveIndex] = useState(0);
  // State for swipe/drag gestures
  const [startPos, setStartPos] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('services-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
          setInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // --- Combined Swipe/Drag Handlers ---
  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setStartPos(clientX);
  };

  const handleDragMove = (clientX) => {
    if (!isDragging || startPos === null) return;
    setDragOffset(clientX - startPos);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    // Lowered the swipe distance threshold for a much smoother feel
    const minSwipeDistance = 40; 

    if (dragOffset > minSwipeDistance) {
      setActiveIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
    } else if (dragOffset < -minSwipeDistance) {
      setActiveIndex((prev) => (prev + 1) % servicesData.length);
    }

    // Reset drag state
    setIsDragging(false);
    setStartPos(null);
    setDragOffset(0);
  };

  // Touch Events
  const handleTouchStart = (e) => handleDragStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => handleDragMove(e.targetTouches[0].clientX);
  const handleTouchEnd = () => handleDragEnd();

  // Mouse Events
  const handleMouseDown = (e) => handleDragStart(e.clientX);
  const handleMouseMove = (e) => handleDragMove(e.clientX);
  const handleMouseUp = () => handleDragEnd();
  const handleMouseLeave = () => handleDragEnd(); // End drag if mouse leaves the area


  return (
    <>
      <section
        id="services-section"
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
                <h3
                  className={`text-2xl font-extrabold text-gray-900 mb-4 leading-snug group-hover:text-blue-700 transition-colors duration-300
                    animate__animated ${inView ? 'animate__bounceIn' : 'opacity-0'} motion-safe:animate-text-jiggle motion-reduce:animate-none`}
                  style={{ animationDelay: inView ? `${0.15 * index + 0.8}s` : '0s' }}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-gray-700 mb-6 leading-relaxed text-opacity-90 tracking-normal
                    animate__animated ${inView ? 'animate__fadeInLeft' : 'opacity-0'} motion-safe:animate-text-breathe motion-reduce:animate-none`}
                  style={{ animationDelay: inView ? `${0.15 * index + 1.0}s` : '0s' }}
                >
                  {service.description}
                </p>
                <ul
                  className={`space-y-3
                    animate__animated ${inView ? 'animate__fadeInUp' : 'opacity-0'} motion-reduce:animate-none`}
                  style={{ animationDelay: inView ? `${0.15 * index + 1.2}s` : '0s' }}
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

          {/* --- Mobile-Only Stacked Card View with Swipe --- */}
          <div className="sm:hidden">
            <div
              className="relative h-[550px] mt-8 card-stack-container cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              {servicesData.map((service, index) => {
                const isTopCard = index === activeIndex;
                const stackPosition = index - activeIndex;

                let style = {
                  zIndex: servicesData.length - index,
                  transition: 'all 0.4s ease-out',
                };

                if (stackPosition < 0) {
                  style.transform = 'translateX(-120%) rotate(-15deg)';
                  style.opacity = 0;
                } else if (isTopCard) {
                  style.transform = `translateX(${dragOffset}px) rotate(${dragOffset / 20}deg) scale(1.03)`;
                  if (isDragging) {
                    style.transition = 'none';
                  }
                } else {
                  style.transform = `translateX(${stackPosition * 15}px) translateY(${stackPosition * -15}px) rotate(${stackPosition * 4}deg) scale(${1 - stackPosition * 0.05})`;
                  style.opacity = stackPosition > 3 ? 0 : 1;
                  style.visibility = stackPosition > 3 ? 'hidden' : 'visible';
                }
                
                return (
                  <div
                    key={index}
                    className={`absolute inset-x-0 top-0 bg-white rounded-3xl shadow-xl border p-8 overflow-hidden transition-all duration-500
                      ${isTopCard ? 'border-blue-400 shadow-2xl' : 'border-gray-100'}
                    `}
                    style={style}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 transition-opacity duration-500 rounded-3xl -z-10 ${isTopCard ? 'opacity-100' : 'opacity-0'}`}></div>
                    <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full transition-all duration-500 ease-in-out -z-10 ${isTopCard ? 'opacity-50 scale-150' : 'opacity-0'}`}></div>
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg bg-gradient-to-br from-blue-500 to-indigo-600 transition-all duration-300 ease-in-out
                        ${isTopCard ? 'rotate-6 scale-110 from-indigo-600 to-blue-600' : ''}
                      `}
                    >
                      <i className={service.icon}></i>
                    </div>
                    <h3 className={`text-xl font-extrabold text-gray-900 mb-3 leading-snug transition-colors duration-300
                      ${isTopCard ? 'text-blue-700' : ''}
                    `}>
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-5 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-800 text-sm">
                          <i
                            className={`fas fa-check-circle text-blue-500 mr-2 transition-transform duration-200 ease-in-out
                              ${isTopCard ? 'translate-x-1' : ''}
                            `}
                          ></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center mt-8 space-x-2">
                {servicesData.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            activeIndex === index ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                        }`}
                    ></div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
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
      `}</style>
    </>
  );
}

export default Services;
