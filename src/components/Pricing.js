import React from 'react';



function Pricing() {

  const whatsappNumber = "917338816479"; // Replace with your actual WhatsApp number, including country code



  const pricingPlans = [

    {

      name: "Starter",

      tagline: "Perfect for small businesses and personal brands",

      price: "₹1,499",

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

      price: "₹2,499",

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

      price: "Custom",

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



  // Function to generate a detailed WhatsApp message based on plan features

  const generateWhatsappMessage = (planName, features) => {

    let message = `Hello! I'm interested in the ${planName} plan. Here's what I understand is included:\n\n`;

    features.forEach(feature => {

      message += `- ${feature.text}: ${feature.included ? 'Included' : 'Not Included'}\n`;

    });

    message += `\nCould you please provide more details or discuss how this plan can meet my needs?`;

    return message;

  };



  const getWhatsappLink = (message) => {

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  };



  return (

    <>

      {/* Font Awesome for icons */}

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>

      {/* Tailwind CSS CDN */}

      <script src="https://cdn.tailwindcss.com"></script>

      {/* Animate.css CDN for more dynamic animations */}

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

      {/* Custom styles for animations and font */}

      <style>

        {`

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');



        body {

          font-family: 'Inter', sans-serif;

        }



        .gradient-bg {

          background: linear-gradient(to right, #6366F1, #8B5CF6); /* Indigo to Violet */

        }



        /* Enhanced Card hover animation */

        .pricing-card-hover:hover {

          transform: translateY(-10px) scale(1.05); /* More pronounced lift and scale */

          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* Stronger shadow */

        }



        /* Subtle continuous glow/shadow animation */

        .subtle-glow {

          animation: subtleGlow 3s ease-in-out infinite alternate;

        }



        @keyframes subtleGlow {

          0% {

            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

          }

          100% {

            box-shadow: 0 15px 20px -5px rgba(99, 102, 241, 0.3), 0 6px 8px -3px rgba(99, 102, 241, 0.1);

          }

        }



        /* Ensure animations apply on mobile without hover */

        @media (max-width: 767px) {

          .animate__animated {

            animation-duration: 1s; /* Ensure animations are not too long on mobile */

          }

          .animate__fadeInDown,

          .animate__bounceInUp {

            /* Ensure these animations run on initial load for mobile */

            opacity: 1;

            transform: none;

          }

          .subtle-glow {

            animation: subtleGlow 3s ease-in-out infinite alternate; /* Keep continuous glow */

          }

        }

        `}

      </style>



      <section id="pricing" className="py-16 bg-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <span className="text-indigo-600 font-medium animate__animated animate__fadeInDown">PRICING PLANS</span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 animate__animated animate__fadeInDown animate__delay-1s">Simple, Transparent Pricing</h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate__animated animate__fadeInDown animate__delay-2s">Choose the perfect plan for your business needs. No hidden fees, just great value.</p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {pricingPlans.map((plan, index) => (

              <div

                key={index}

                className={`

                  bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100

                  transition-all duration-300 pricing-card-hover

                  ${plan.popular ? 'shadow-2xl border-2 border-indigo-300 transform scale-105 z-10' : ''}

                  animate__animated animate__bounceInUp animate__delay-${3 + index}s

                  subtle-glow

                `}

              >

                {plan.popular && (

                  <div className="gradient-bg py-2 text-center">

                    <span className="text-white text-sm font-medium">MOST POPULAR</span>

                  </div>

                )}

                <div className="p-8 text-center">

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>

                  <p className="text-gray-600 mb-6">{plan.tagline}</p>

                  <div className="text-4xl font-bold text-indigo-600 mb-6">{plan.price}<span className="text-lg font-normal">{plan.period}</span></div>

                  <a

                    href={getWhatsappLink(generateWhatsappMessage(plan.name, plan.features))} // Dynamically generate message

                    target="_blank"

                    rel="noopener noreferrer"

                    className={`block px-6 py-3 font-medium rounded-lg hover:shadow-lg transition-all mb-8 ${plan.popular ? 'gradient-bg text-white' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}

                  >

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



          <div className="mt-12 bg-indigo-50 rounded-xl p-8 text-center animate__animated animate__bounceInUp animate__delay-6s">

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need something different?</h3>

            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">We offer fully customized solutions tailored to your specific requirements. Get in touch to discuss your project.</p>

            <a

              href={getWhatsappLink("Hello! I'm interested in a custom web development quote. Can we discuss my project requirements in detail?")} // Updated custom message

              target="_blank"

              rel="noopener noreferrer"

              className="inline-block px-8 py-3 gradient-bg text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"

            >

              Request Custom Quote

            </a>

          </div>

        </div>

      </section>

    </>

  );

}



export default Pricing;

