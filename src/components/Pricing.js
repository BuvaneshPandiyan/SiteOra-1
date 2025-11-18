import React from 'react';

function Pricing() {
  const whatsappNumber = "917338816479"; // Your WhatsApp number

  const plans = [
    {
      name: "Starter Web",
      tagline: "Ideal for portfolios, contact pages, and rapid deployment.",
      price: "₹6,999", 
      period: "/project",
      additionalCost: "+ Domain Fee",
      buttonText: "Launch Now",
      features: [
        { 
          title: "4-Page Static Website (Maximum)",
          description: "Perfect for a simple Portfolio, Services, About, and Contact structure.",
          included: true 
        },
        { 
          title: "Basic Template-Based Design",
          description: "Simple, clean design based on a template. No custom design changes are included.",
          included: true 
        },
        { 
          title: "Responsive Across All Devices",
          description: "Guaranteed perfect display on mobile, tablet, and desktop.",
          included: true 
        },
        { 
          title: "Free SSL Certificate & Deployment",
          description: "Secure, encrypted connection and professional site launch included.",
          included: true 
        },
        { 
          title: "Basic SEO Setup",
          description: "Essential meta tags and titles for search engine recognition.",
          included: true 
        },
        { 
          title: "Contact Form Integration",
          description: "Sends inquiries directly to a specific WhatsApp number or Instagram account.",
          included: true 
        },
        { 
          title: "Floating Social Media Link (1 Icon)",
          description: "A single, fixed button linking directly to your primary social channel (WhatsApp or Instagram).",
          included: true 
        },
        { 
          title: "Zero Hosting Fees (Reliable Global Network)",
          description: "Your site is hosted on a high-speed global network at no extra cost.",
          included: true 
        },
        { 
          title: "1 Month Free Website Changes",
          description: "One month of free minor text/image corrections after site launch.",
          included: true 
        },
        { 
          title: "Annual Renewal Fee",
          description: "₹6,000 per year plus domain renewal fee for maintenance and support.",
          included: true
        },
        // --- Features Not Included (Struck Through) ---
        { 
          title: "Custom UI/UX Design & Revisions",
          included: false 
        },
        { 
          title: "Micro-Interactions & Animations",
          included: false 
        },
        { 
          title: "Advanced Analytics & Goal Tracking",
          included: false 
        },
        { 
          title: "Integrated Content Management System (CMS)",
          included: false 
        },
      ],
    },
    {
      name: "Professional Web",
      tagline: "Full creative control, dynamic features, and enhanced engagement.",
      price: "₹12,999",
      period: "/project",
      additionalCost: "+ Domain Fee",
      buttonText: "Elevate My Brand",
      isPopular: true,
      features: [
        // Features from Starter Plan (Everything Included)
        { 
          title: "Everything in Starter Plan",
          description: "Includes all features from the Starter Web package.",
          included: true 
        },
        // Included Features
        { 
          title: "Up to 10-Page Website",
          description: "Ample space for detailed services, gallery, blog preview, and client testimonials.",
          included: true 
        },
        { 
          title: "Complete Custom UI/UX Design",
          description: "Bespoke design created from scratch. Unlimited design revisions until approval.",
          included: true 
        },
        { 
          title: "Super-Cool Micro-Interactions & Animations",
          description: "Sleek floating effects, subtle entry animations, and dynamic transitions for a premium feel.",
          included: true 
        },
        { 
          title: "Floating Social Suite (WhatsApp, Insta, Call)",
          description: "Floating buttons for WhatsApp, Instagram, and direct calling across all pages.",
          included: true 
        },
        { 
          title: "Advanced SEO & Speed Optimization",
          description: "In-depth keyword research, competitive analysis, structure optimization, and top-tier page load speed.",
          included: true 
        },
        { 
          title: "Embedded Media Gallery (YouTube/Insta Reels)",
          description: "Seamlessly integrate your video content, live YouTube feeds, and Instagram Reels into the website.",
          included: true 
        },
        { 
          title: "Dedicated Contact Form (Email & WhatsApp Redirect)",
          description: "Contact form that sends notifications to your email and redirects to WhatsApp for immediate lead capture.",
          included: true 
        },
        { 
          title: "Advanced Booking/Appointment Integration",
          description: "Integration of free, powerful scheduling tools (like Calendly) tailored to your service model.",
          included: true 
        },
        { 
          title: "6 Months Free Minor Changes & Support",
          description: "Six months of free minor content/image corrections after site launch, plus lifetime support.",
          included: true 
        },
        { 
          title: "Basic Google Analytics Integration",
          description: "Setup of Google Analytics to track basic visitor data and traffic sources.",
          included: true 
        },
        // --- Features Not Included (Struck Through) ---
        { 
          title: "Advanced Conversion Rate Optimization (CRO)",
          included: false 
        },
        { 
          title: "Dedicated Content Editing Dashboard",
          included: false 
        },
        { 
          title: "Advanced Marketing Tool Integration",
          included: false 
        },
        { 
          title: "Integrated Content Management System (CMS)",
          included: false 
        },
      ],
    },
    {
      name: "Enterprise Portfolio",
      tagline: "The ultimate solution with self-management, premium performance, and unlimited scalability.",
      price: "₹18,999",
      period: "/project",
      additionalCost: "+ Domain Fee",
      buttonText: "Dominate My Niche",
      features: [
        // Features from Professional Plan (Everything Included)
        { 
          title: "Everything in Professional Plan",
          description: "Includes all features from the Professional Web package.",
          included: true 
        },
        // MODIFIED FEATURES BELOW
        { 
          title: "Unlimited Pages & Scalability",
          description: "No limits on the number of pages. The structure is built to scale indefinitely with your growing business.",
          included: true 
        },
        { 
          title: "Integrated CMS for Static Content",
          description: "Use a specialized headless CMS (like Netlify CMS or Sanity) for self-management of portfolio images, projects, and text content.",
          included: true 
        },
        { 
          title: "Dedicated Content Editing Dashboard",
          description: "A user-friendly dashboard for managing site content, complete with personalized training.",
          included: true 
        },
        { 
          title: "Advanced Marketing Automation Setup",
          description: "Integration with popular lead-capture tools like Mailchimp or Tally forms for automated email sequence triggers.",
          included: true 
        },
        { 
          title: "Custom High-Performance Hosting Setup",
          description: "Dedicated setup for maximum speed, performance, and 99.9% guaranteed up-time.",
          included: true 
        },
        { 
          title: "Advanced Conversion Rate Optimization (CRO)",
          description: "Strategic placement of CTAs, setup for user behavior tracking (tool cost separate), and funnel optimization.",
          included: true 
        },
        { 
          title: "Advanced Google Analytics 4 & Tag Manager",
          description: "Full setup for detailed event tracking, goal setting, custom audience definitions, and sophisticated reporting.",
          included: true 
        },
        { 
          title: "1 Year Free Minor Changes & Priority Support",
          description: "One full year of free minor content/image corrections, plus 24/7 priority support and dedicated communication channel.",
          included: true 
        },
        { 
          title: "Future-Proof Technology Stack & Code Ownership",
          description: "Built using the latest React stack, ensuring longevity, superior performance, and full source code ownership.",
          included: true 
        },
        { 
          title: "Advanced Security & Daily Backup (Files Only)",
          description: "Implementation of advanced security measures and automated daily file backups for all static assets.",
          included: true 
        },
        { 
          title: "Local SEO Setup (Google My Business)",
          description: "Optimization of your Google My Business profile for maximum local visibility.",
          included: true 
        },
      ],
    },
  ];

  // Function to generate the WhatsApp message
  const generateWhatsAppMessage = (plan) => {
    let message = `Hello! I'm interested in the ${plan.name} plan (starting from ${plan.price}).\n\nI'd like to get started and discuss my project requirements. Thank you!`;
    return encodeURIComponent(message);
  };

  // --- Pricing Card Component ---
  const PricingCard = ({ plan, whatsappNumber, generateWhatsAppMessage, animationDelay }) => (
    <div 
      className={`w-full bg-white rounded-2xl shadow-xl overflow-hidden border-2 transition-all duration-300 flex flex-col h-full group animate-slideInUp ${animationDelay}
        ${plan.isPopular 
          ? 'border-indigo-500 transform scale-[1.03] shadow-indigo-500/40' 
          : 'border-gray-200'}
        
        // General Hover Effect: Lift, stronger shadow, slight color change
        hover:shadow-2xl hover:shadow-indigo-500/20 hover:translate-y-[-4px]`}
    >
      <div className={`p-8 text-center rounded-t-xl ${plan.isPopular ? 'bg-gradient-to-r from-indigo-600 to-purple-700' : 'bg-white'}`}>
        {plan.isPopular && (
          // Dynamic glow animation for the popular badge
          <span className="inline-block px-4 py-1 text-xs font-bold uppercase rounded-full bg-yellow-400 text-gray-900 mb-3 tracking-widest animate-pulse shadow-md shadow-yellow-500/50">
            Most Popular
          </span>
        )}
        <h3 className="text-3xl font-extrabold mb-2 leading-tight text-gray-900">
          {plan.name}
        </h3>
        <p className={`mb-6 text-sm ${plan.isPopular ? 'text-indigo-200' : 'text-gray-500'}`}>
          {plan.tagline}
        </p>
        
        {/* ✅ FIX APPLIED HERE: Reduced font size for mobile and made the container flexible */}
        <div className="flex justify-center items-baseline flex-wrap"> 
          <div className="text-5xl sm:text-6xl font-extrabold leading-none mr-1">
            <span className={`${plan.isPopular ? 'text-white' : 'text-indigo-600'}`}>
              {plan.price}
            </span>
          </div>
          <div className="text-xl font-normal self-end mb-1">
            <span className={`${plan.isPopular ? 'text-indigo-200' : 'text-gray-500'}`}>
              {plan.period}
            </span>
          </div>
        </div>
        {/* End Fix */}

        <p className={`text-base mt-1 font-semibold ${plan.isPopular ? 'text-white' : 'text-indigo-600'}`}>
          {plan.additionalCost}
        </p>
      </div>
      
      {/* Min-h set for button alignment */}
      <div className="px-8 py-8 flex-1 min-h-[440px] text-gray-900"> 
        <ul className="space-y-4">
          {plan.features.map((feature, idx) => (
            // Feature hover effect: subtle text highlight
            <li key={idx} className="flex items-start text-sm transition-colors duration-200 group-hover:bg-gray-50/50 p-1 rounded-sm">
              <div className="flex-shrink-0">
                <i className={`fas ${feature.included ? 'fa-check-circle text-green-600' : 'fa-times-circle text-gray-400'} text-lg mr-3 mt-1`}></i>
              </div>
              <div className="flex-1">
                {/* Applied strikethrough class based on 'included' status */}
                <span className={`font-semibold ${!feature.included ? 'text-gray-500 line-through' : 'text-gray-800'}`}>{feature.title || feature.text}</span>
                {feature.description && <p className="text-xs text-gray-600 mt-0.5">{feature.description}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-8 bg-gray-50 border-t border-gray-100 flex-shrink-0">
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${generateWhatsAppMessage(plan)}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`block w-full text-center px-6 py-4 font-bold rounded-xl shadow-lg transition-all duration-300 
            ${plan.isPopular 
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-indigo-600/50 hover:shadow-indigo-600/70' 
              : 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700 hover:shadow-lg'}
            // Button Hover Effect: Scale up slightly for tactile feel
            hover:scale-[1.01] active:scale-[0.98]`}
        >
          {plan.buttonText}
        </a>
      </div>
    </div>
  );
  // --- End Pricing Card Component ---

  return (
    <section id="pricing" className="py-20 bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* CSS Keyframes for Entrance and Background Animation */}
      <style>{`
        /* Entrance Animation */
        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideInUp { animation: slideInUp 0.8s forwards; opacity: 0; }

        /* Background Blob Animation */
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30vw, -50px) scale(1.1); }
          66% { transform: translate(-20vw, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 15s infinite ease-in-out; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-8000 { animation-delay: 8s; }
      `}</style>
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-50px] left-[-100px] w-[600px] h-[600px] bg-indigo-500/10 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-[-50px] right-[-100px] w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-extrabold tracking-widest uppercase text-lg animate-slideInUp" style={{animationDelay: '0.1s'}}>Invest in Quality</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4 animate-slideInUp" style={{animationDelay: '0.3s'}}>Choose Your Path to Digital Excellence.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slideInUp" style={{animationDelay: '0.5s'}}>
            Find the perfect plan, whether you're launching a simple presence or aiming for full content mastery and premium support.
          </p>
        </div>
        
        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <PricingCard 
              key={plan.name} 
              plan={plan} 
              whatsappNumber={whatsappNumber} 
              generateWhatsAppMessage={generateWhatsAppMessage} 
              // Staggered animation delay for cards
              animationDelay={`animation-delay-${600 + index * 200}ms`}
            />
          ))}
        </div>
        
        <div className="mt-20 bg-indigo-50 rounded-2xl p-8 text-center border border-indigo-200 shadow-xl animate-slideInUp" style={{animationDelay: '1.2s'}}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Support & Renewals Details</h3>
          <ul className="text-gray-700 mb-6 max-w-4xl mx-auto list-disc list-inside space-y-2 text-left">
            <li>
              <span className="font-semibold text-indigo-700">Annual Renewal Fee (All Plans):</span> ₹6,000 per year (starting from the second year) to cover high-speed hosting, essential site maintenance, and basic SEO health checks.
            </li>
            <li>
              <span className="font-semibold text-indigo-700">Domain Fee:</span> This is a separate, variable cost. You can purchase and renew your domain through any provider you prefer, giving you full ownership and control.
            </li>
            <li>
              <span className="font-semibold text-indigo-700">Post-Free Changes Fee:</span> After the initial free change period (1 month for Starter, 6 months for Professional, 1 year for Enterprise), further minor content/image updates will be charged at a small, nominal fee per request.
            </li>
            <li>
              <span className="font-semibold text-indigo-700">Lifetime Support:</span> All plans include lifelong access to our documentation and basic support for critical site functioning (excluding content changes).
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
