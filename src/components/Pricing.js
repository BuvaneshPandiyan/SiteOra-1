import React from 'react';

function Pricing() {
  const pricingPlans = [
    {
      name: "Starter",
      tagline: "Perfect for small businesses and personal brands",
      price: "₹1,499", // Changed from $499
      period: "/project",
      buttonText: "Get Started",
      features: [
        { text: "10 Page Website", included: true },
        { text: "Responsive Design", included: true },
        { text: "Basic SEO", included: true },
        { text: "Contact Form", included: true },
        { text: "E-Commerce", included: false },
        { text: "CMS Integration", included: false },
      ],
      popular: false,
    },
    {
      name: "Business",
      tagline: "Ideal for growing businesses with more complex needs",
      price: "₹2,499", // Changed from $1,299
      period: "/project",
      buttonText: "Get Started",
      features: [
        { text: "Unlimited Pages", included: true },
        { text: "Advanced Design", included: true },
        { text: "SEO Optimized", included: true },
        { text: "CMS Integration", included: true },
        { text: "Basic E-Commerce", included: true },
        { text: "Custom Web Apps", included: false },
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      tagline: "Custom solutions for large businesses and organizations",
      price: "Custom", // Remains Custom
      period: "/quote",
      buttonText: "Get Started",
      features: [
        { text: "Unlimited Pages", included: true },
        { text: "Custom Design", included: true },
        { text: "Advanced SEO", included: true },
        { text: "Full E-Commerce", included: true },
        { text: "Web Applications", included: true },
        { text: "API Integrations", included: true },
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium">PRICING PLANS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose the perfect plan for your business needs. No hidden fees, just great value.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-indigo-300 transition-all duration-300 ${plan.popular ? 'shadow-2xl border-2 border-indigo-300 transform scale-105 z-10' : ''}`}>
              {plan.popular && (
                <div className="gradient-bg py-2 text-center">
                  <span className="text-white text-sm font-medium">MOST POPULAR</span>
                </div>
              )}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.tagline}</p>
                {/* Price display updated with Rupee symbol */}
                <div className="text-4xl font-bold text-indigo-600 mb-6">{plan.price}<span className="text-lg font-normal">{plan.period}</span></div>
                <a href="#contact" className={`block px-6 py-3 font-medium rounded-lg hover:shadow-lg transition-all mb-8 ${plan.popular ? 'gradient-bg text-white' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}>
                  {plan.buttonText}
                </a>
              </div>
              <div className="border-t border-gray-100 px-8 py-6 bg-gray-50">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center ${!feature.included ? 'text-gray-400' : ''}`}>
                      <i className={`fas ${feature.included ? 'fa-check text-green-500' : 'fa-times text-gray-300'} mr-3`}></i>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-indigo-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need something different?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">We offer fully customized solutions tailored to your specific requirements. Get in touch to discuss your project.</p>
          <a href="#contact" className="inline-block px-8 py-3 gradient-bg text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;