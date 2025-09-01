import React, { useState } from 'react';

function Contact() {
  const [formSuccess, setFormSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Construct the casual message from form data
    const customerMessage = `
Hi there!

I'm ${formData.name}. I saw your website and wanted to get in touch.

My email is ${formData.email} and my phone number is ${formData.phone}.

I'm interested in ${formData.service ? formData.service.replace('-', ' ') : 'one of your services'}.

Here's a bit more about what I'm looking for:
${formData.message || 'No specific message provided.'}

Looking forward to hearing back!
    `.trim();

    // 2. Encode the message for a URL
    const encodedMessage = encodeURIComponent(customerMessage);

    // 3. Define the WhatsApp number
    const whatsappNumber = '7338816479'; // Your WhatsApp number

    // 4. Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // 5. Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Simulate form submission success and clear form
    setTimeout(() => {
      setFormSuccess(true);
      setFormData({ // Clear form fields by resetting state
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000); // Hide success message after 5 seconds
    }, 1000);
  };

  return (
    // Load Font Awesome for icons and Inter font
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <style>
        {`
        body {
          font-family: 'Inter', sans-serif;
        }
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .shadow-custom {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .hover-scale-105:hover {
            transform: scale(1.05);
        }
        .transition-all {
            transition: all 0.3s ease-in-out;
        }
        /* Custom animation for fade-in */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out forwards;
        }
        /* Custom animation for success message */
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeInScale 0.5s ease-out forwards;
        }
        `}
      </style>

      <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-indigo-100 min-h-screen flex items-center justify-center opacity-0 animate-fadeIn mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Left Column: Contact Info */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Get In Touch</h2>
              <p className="text-lg text-gray-700 mb-10">Have a project in mind or questions about our services? Fill out the form and we'll get back to you within 24 hours.</p>

              <div className="space-y-8">
                {/* Office Info Block */}
                <div className="flex items-start group transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl rounded-2xl p-5 bg-white">
                  <div className="flex-shrink-0 w-14 h-14 gradient-bg rounded-full flex items-center justify-center text-white text-xl shadow-md transition-transform duration-300 group-hover:rotate-6">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Our Office</h3>
                    <p className="text-gray-700">No. 1A 1st Avenue Park Street<br/>Arul Nagar, Chennai-600059</p>
                  </div>
                </div>

                {/* Email Info Block */}
                <div className="flex items-start group transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl rounded-2xl p-5 bg-white">
                  <div className="flex-shrink-0 w-14 h-14 gradient-bg rounded-full flex items-center justify-center text-white text-xl shadow-md transition-transform duration-300 group-hover:rotate-6">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-700">siteora@gmail.com<br/>support@siteora.com</p>
                  </div>
                </div>

                {/* Phone Info Block */}
                <div className="flex items-start group transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl rounded-2xl p-5 bg-white">
                  <div className="flex-shrink-0 w-14 h-14 gradient-bg rounded-full flex items-center justify-center text-white text-xl shadow-md transition-transform duration-300 group-hover:rotate-6">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-700">+91 7338816479<br/>24/7</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-5">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/yourprofile" target="_blank" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 hover-scale-105 transition-all shadow-sm">
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a href="https://twitter.com/yourprofile" target="_blank" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 hover-scale-105 transition-all shadow-sm">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="https://instagram.com/yourprofile" target="_blank" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 hover-scale-105 transition-all shadow-sm">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="https://linkedin.com/company/yourcompany" target="_blank" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 hover-scale-105 transition-all shadow-sm">
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-indigo-50 p-8 md:p-12 lg:p-16 rounded-r-3xl flex items-center justify-center">
              <form onSubmit={handleSubmit} className="space-y-7 w-full max-w-lg">
                <div>
                  <label htmlFor="name" className="block text-base font-medium text-gray-800 mb-2">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition-all shadow-sm" placeholder="John Doe" value={formData.name} onChange={handleChange} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-medium text-gray-800 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition-all shadow-sm" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-base font-medium text-gray-800 mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition-all shadow-sm" placeholder="(123) 456-7890" value={formData.phone} onChange={handleChange} />
                </div>

                <div>
                  <label htmlFor="service" className="block text-base font-medium text-gray-800 mb-2">Service Interested In</label>
                  <select id="service" name="service" className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition-all shadow-sm bg-white appearance-none" value={formData.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="seo">SEO & Marketing</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-medium text-gray-800 mb-2">Your Message</label>
                  <textarea id="message" name="message" rows="5" className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition-all shadow-sm" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange}></textarea>
                </div>

                <div>
                  <button type="submit" className="w-full px-8 py-4 gradient-bg text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover-scale-105 transition-all text-lg flex items-center justify-center">
                    Send Message <i className="fas fa-paper-plane ml-3"></i>
                  </button>
                </div>
              </form>

              {formSuccess && (
                <div id="formSuccess" className="mt-8 p-5 bg-green-100 text-green-800 rounded-xl shadow-md text-center text-lg font-medium animate-fade-in">
                  <i className="fas fa-check-circle mr-3 text-2xl"></i> Thank you! Your message has been sent successfully. Please complete the process in WhatsApp.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
