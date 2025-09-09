import React, { useState } from 'react';

// Sub-component for the interactive FAQ section (styled with original colors)
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4"
      >
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <svg
          className={`w-6 h-6 text-indigo-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-gray-600">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};


function Contact() {
  const [formSuccess, setFormSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const whatsappNumber = '7338816479'; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const customerMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}

*Service of Interest:* ${formData.service ? formData.service.replace('-', ' ') : 'Not specified'}

*Message:*
${formData.message || 'No specific message provided.'}
    `.trim();

    const encodedMessage = encodeURIComponent(customerMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setFormSuccess(true);
      setFormData({
        name: '', email: '', phone: '', service: '', message: ''
      });
      setTimeout(() => setFormSuccess(false), 5000);
    }, 1000);
  };
  
  const whatsappContactUrl = `https://wa.me/${whatsappNumber}`;


  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>
        {`
        body {
          font-family: 'Inter', sans-serif;
        }
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .hover-scale-105:hover {
          transform: scale(1.05);
        }
        .transition-all {
          transition: all 0.3s ease-in-out;
        }
        /* Custom Animations */
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeInScale 0.5s ease-out forwards; }

        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-400 { animation-delay: 0.4s; }
        .animate-delay-600 { animation-delay: 0.6s; }
        .animate-delay-800 { animation-delay: 0.8s; }

        /* Social Icon Hover Effects */
        .social-link i {
          transition: all 0.3s ease;
        }
        .social-link-instagram:hover i {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .social-link-whatsapp:hover i {
          color: #25D366;
        }
        `}
      </style>

      <section id="contact" className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-16 opacity-0 animate-fade-in-down">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Let's Build Something <span className="text-indigo-600">Amazing</span> Together
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
              Have a question, a project idea, or just want to say hi? We'd love to hear from you.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden opacity-0 animate-fade-in-up animate-delay-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <p className="text-gray-600 mb-10">Fill out the form or use our details below to connect with us.</p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                      <div className="flex-shrink-0 w-14 h-14 gradient-bg rounded-full flex items-center justify-center text-white text-xl shadow-md">
                          <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="ml-5">
                          <h3 className="text-xl font-semibold text-gray-900">Our Office</h3>
                          <p className="text-gray-700">No. 1A 1st Avenue Park Street<br/>Arul Nagar, Chennai-600059</p>
                      </div>
                  </div>
                  <div className="flex items-start">
                      <div className="flex-shrink-0 w-14 h-14 gradient-bg rounded-full flex items-center justify-center text-white text-xl shadow-md">
                          <i className="fas fa-envelope"></i>
                      </div>
                      <div className="ml-5">
                          <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                          <p className="text-gray-700">siteora@gmail.com</p>
                      </div>
                  </div>
                  <div className="flex items-start">
                      <div className="flex-shrink-0 w-14 h-14 gradient-bg rounded-full flex items-center justify-center text-white text-xl shadow-md">
                          <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="ml-5">
                          <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                          <p className="text-gray-700">+91 {whatsappNumber}</p>
                      </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-5">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://instagram.com/siteoraofficial" target="_blank" rel="noopener noreferrer" className="social-link social-link-instagram w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-indigo-600 hover:bg-gray-200 hover-scale-105 transition-all shadow-sm">
                      <i className="fab fa-instagram text-2xl"></i>
                    </a>
                    <a href={whatsappContactUrl} target="_blank" rel="noopener noreferrer" className="social-link social-link-whatsapp w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-indigo-600 hover:bg-gray-200 hover-scale-105 transition-all shadow-sm">
                      <i className="fab fa-whatsapp text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 p-8 md:p-12 lg:p-16">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" name="name" required className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition-all shadow-sm" placeholder="Full Name" value={formData.name} onChange={handleChange} />
                  <input type="email" name="email" required className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition-all shadow-sm" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                  <input type="tel" name="phone" className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition-all shadow-sm" placeholder="Phone Number (Optional)" value={formData.phone} onChange={handleChange} />
                  <select name="service" className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition-all shadow-sm appearance-none" value={formData.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="seo">SEO & Marketing</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea name="message" rows="5" className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition-all shadow-sm" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange}></textarea>
                  <button type="submit" className="w-full px-8 py-4 gradient-bg text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover-scale-105 transition-all text-lg flex items-center justify-center">
                    Send via WhatsApp <i className="fab fa-whatsapp ml-3 text-2xl"></i>
                  </button>
                  {formSuccess && (
                    <div className="p-4 bg-green-100 text-green-800 rounded-xl shadow-md text-center font-medium animate-fade-in">
                      <i className="fas fa-check-circle mr-2"></i> Redirecting to WhatsApp...
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
          
          <div className="mt-24 opacity-0 animate-fade-in-up animate-delay-600">
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8">
              <AccordionItem title="What is the average turnaround time for a new website?">
                The timeline for a new website can vary greatly depending on the complexity, features required, and content availability. A basic marketing site might take 4-6 weeks, while a complex e-commerce platform could take 3-6 months. We provide a detailed project timeline after our initial discovery call.
              </AccordionItem>
              <AccordionItem title="Do you offer support and maintenance after the project is complete?">
                Absolutely! We offer various monthly support and maintenance packages to ensure your website remains secure, updated, and performing optimally. We can also provide on-demand support as needed.
              </AccordionItem>
              <AccordionItem title="Can you help with SEO and digital marketing?">
                Yes, our services extend beyond development. We have a dedicated team for SEO, content marketing, and PPC campaigns to help drive traffic and grow your online presence after your site goes live.
              </AccordionItem>
               <AccordionItem title="How does the payment process work?">
                We typically structure payments in milestones. A standard project begins with a 40% upfront deposit, followed by milestone payments (e.g., after design approval, after development completion), and the final payment upon launch.
              </AccordionItem>
            </div>
          </div>

           <div className="mt-24 opacity-0 animate-fade-in-up animate-delay-800">
             <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10">Our Location</h2>
             <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                {/* -- DEFINITIVE MAP URL FIX USING A GOOGLE PLACE ID -- */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.680045293291!2d80.13458631482293!3d13.05624799079973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52610e206b023d%3A0x26553258872161f3!2sArul%20Nagar%2C%20Koyambedu%2C%20Chennai%2C%20Tamil%20Nadu%20600107%2C%20India!5e0!3m2!1sen!2sus!4v1662586337142!5m2!1sen!2sus3"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
             </div>
           </div>

        </div>
      </section>
    </>
  );
}

export default Contact;
