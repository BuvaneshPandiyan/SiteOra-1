import React from 'react';

function Pricing() {
  const whatsappNumber = "917338816479"; // Your WhatsApp number

  // The single, comprehensive pricing plan
  const mainPlan = {
    name: "Web Presence",
    tagline: "The complete package to launch your professional online identity.",
    price: "₹5,999",
    period: "/project",
    buttonText: "Get Started",
    features: [
      { 
        title: "Single-Page Application (SPA)",
        description: "Your website is built as a fast, modern SPA. This means instant page loads and a smooth, app-like experience for your visitors, which is far superior to traditional, clunky multi-page sites.",
        included: true 
      },
      { 
        title: "Responsive Design Across All Screens",
        description: "Your site will look and work perfectly on all devices, from mobile phones and tablets to laptops and large desktop monitors, ensuring a great user experience for everyone.",
        included: true 
      },
      { 
        title: "Advanced SEO for High Search Rankings",
        description: "We implement expert SEO strategies to make sure your website appears at the top of search results on Google, so customers can easily find you.",
        included: true 
      },
      { 
        title: "Free Domain for 1st Year",
        description: "Get a professional start with a custom domain name (e.g., www.yourbusiness.com) on us for the first year.",
        included: true 
      },
      { 
        title: "Contact Form with Automated Emails",
        description: "Powered by Formspree, this feature allows you to receive up to 50 free email notifications per month whenever a visitor fills out your contact form.",
        included: true 
      },
      { 
        title: "Free Booking Management System",
        description: "We'll integrate a free, powerful booking system that allows your clients to schedule appointments with you directly through your website.",
        included: true 
      },
      { 
        title: "6 Months of Free Website Changes",
        description: "Need to update text, images, or other content? We've got you covered with free changes for the first six months after your site goes live.",
        included: true 
      },
      { 
        title: "Zero Hosting Fees",
        description: "Your website is hosted on a reliable, high-performance global network at no extra cost to you.",
        included: true 
      },
      {
        title: "Annual Renewal Fee",
        description: "Just ₹4,000 per year after the first year to cover domain renewal, maintenance, and continued SEO.",
        included: true
      },
      { 
        title: "E-Commerce Functionality",
        description: "This plan is designed for informational and contact-based websites. Online store functionality is not included.",
        included: false 
      },
      { 
        title: "CMS Integration",
        description: "A Content Management System (CMS) for self-editing is not included in this package.",
        included: false 
      },
    ],
  };

  // Function to generate the WhatsApp message
  const generateWhatsAppMessage = (plan) => {
    let message = `Hello! I'm interested in the ${plan.name} plan (starting from ${plan.price}).\n\nI'm looking for a quote. Thank you!`;
    return encodeURIComponent(message);
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold tracking-wider uppercase">Our Pricing</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">One Plan, Everything You Need.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've simplified our pricing to offer one comprehensive package with all the essentials to get your business online successfully.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-indigo-500 transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-2">{mainPlan.name}</h3>
              <p className="text-indigo-200 mb-6">{mainPlan.tagline}</p>
              <div className="text-5xl font-bold text-white">
                {mainPlan.price}
                <span className="text-xl font-normal text-indigo-200">{mainPlan.period}</span>
              </div>
               <p className="text-sm text-indigo-200 mt-1">Starting From</p>
            </div>
            
            <div className="px-8 py-8">
              <ul className="space-y-5">
                {mainPlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0">
                      <i className={`fas ${feature.included ? 'fa-check-circle text-green-500' : 'fa-times-circle text-gray-400'} text-xl mr-3 mt-1`}></i>
                    </div>
                    <div>
                      <span className={`font-semibold ${!feature.included ? 'text-gray-500 line-through' : 'text-gray-800'}`}>{feature.title || feature.text}</span>
                      {feature.description && <p className="text-sm text-gray-600">{feature.description}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-gray-50 border-t">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${generateWhatsAppMessage(mainPlan)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-center px-6 py-4 font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {mainPlan.buttonText}
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-indigo-50 rounded-2xl p-8 text-center border border-indigo-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a More Customized Plan?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            If you're looking for a solution at a different price point, give us a call. We're happy to discuss your needs and see what we can do to create a plan that fits your budget.
          </p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'm interested in a custom website plan. Can we discuss my budget and requirements?")}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-indigo-200"
          >
            Request a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
