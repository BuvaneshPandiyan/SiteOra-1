import React, { useEffect, useRef, useCallback } from 'react';

// Main React component for the Privacy Policy page
const PrivacyPolicy = () => { // Changed component name from App to PrivacyPolicy
    // Ref to hold all the sections that need animation
    const sectionRefs = useRef([]);

    // Callback function to add a ref to the array
    const setRef = useCallback((el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    }, []);

    useEffect(() => {
        // Define possible initial transforms for a varied "all sides" effect
        const initialTransforms = [
            'translateY(30px)',   // From bottom
            'translateY(-30px)',  // From top
            'translateX(30px)',   // From right
            'translateX(-30px)'   // From left
        ];

        // Function to set a random initial transform for an element
        const setRandomInitialTransform = (element) => {
            if (element) {
                const randomIndex = Math.floor(Math.random() * initialTransforms.length);
                element.style.transform = initialTransforms[randomIndex];
            }
        };

        // Apply initial transforms to all sections on mount
        sectionRefs.current.forEach(setRandomInitialTransform);

        // Intersection Observer Callback
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add 'is-visible' class when element enters viewport
                    entry.target.classList.add('is-visible');
                } else {
                    // Remove 'is-visible' and reset transform when element leaves viewport
                    // This allows re-animation when scrolling back into view (bottom to top)
                    entry.target.classList.remove('is-visible');
                    setRandomInitialTransform(entry.target);
                }
            });
        };

        // Create a new Intersection Observer instance
        // rootMargin: '-100px 0px' means the callback will be invoked when the element
        // is 100px from the bottom or top of the viewport.
        const observer = new IntersectionObserver(observerCallback, {
            rootMargin: '-100px 0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        // Observe each section
        sectionRefs.current.forEach(section => {
            if (section) {
                observer.observe(section);
            }
        });

        // Cleanup function for the effect
        // Disconnect the observer when the component unmounts
        return () => {
            sectionRefs.current.forEach(section => {
                if (section) {
                    observer.unobserve(section);
                }
            });
            observer.disconnect();
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 text-gray-800">
            <style>
                {`
                /* Custom font for better readability */
                body {
                    font-family: 'Inter', sans-serif;
                }
                /* Styles for scroll animation */
                .fade-section {
                    opacity: 0;
                    /* Initial transform will be set dynamically by JavaScript for varied entry */
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }

                .fade-section.is-visible {
                    opacity: 1;
                    /* Overrides the dynamic transform to bring element to its natural position */
                    transform: translate(0, 0) !important;
                }
                `}
            </style>
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl mx-auto">
                {/* Privacy Policy Title */}
                <h1 ref={setRef} className="text-4xl font-extrabold text-center text-indigo-700 mb-8 fade-section">
                    Privacy Policy
                </h1>
                {/* Introduction Paragraph */}
                <p ref={setRef} className="text-lg text-center text-gray-600 mb-10 fade-section">
                    Welcome to Siteora! Your privacy is critically important to us. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to protect it.
                </p>

                {/* Information We Collect Section */}
                <section ref={setRef} className="mb-10 fade-section">
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">1. Information We Collect</h2>
                    <p className="mb-3">
                        We collect various types of information to provide and improve our services to you.
                    </p>
                    <ul className="list-disc list-inside ml-4 text-gray-700">
                        <li className="mb-2">
                            <strong>Personal Information:</strong> This includes information that can be used to identify you, such as your name, email address, phone number, and billing information when you register for an account, make a purchase, or contact us.
                        </li>
                        <li className="mb-2">
                            <strong>Usage Data:</strong> We automatically collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
                        </li>
                        <li className="mb-2">
                            <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </li>
                    </ul>
                </section>

                {/* How We Use Your Information Section */}
                <section ref={setRef} className="mb-10 fade-section">
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">2. How We Use Your Information</h2>
                    <p className="mb-3">
                        Siteora uses the collected data for various purposes:
                    </p>
                    <ul className="list-disc list-inside ml-4 text-gray-700">
                        <li className="mb-2">To provide and maintain our Service</li>
                        <li className="mb-2">To notify you about changes to our Service</li>
                        <li className="mb-2">To allow you to participate in interactive features of our Service when you choose to do so</li>
                        <li className="mb-2">To provide customer support</li>
                        <li className="mb-2">To gather analysis or valuable information so that we can improve our Service</li>
                        <li className="mb-2">To monitor the usage of our Service</li>
                        <li className="mb-2">To detect, prevent and address technical issues</li>
                        <li className="mb-2">To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information</li>
                    </ul>
                </section>

                {/* Data Retention Section */}
                <section ref={setRef} className="mb-10 fade-section">
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">3. Data Retention</h2>
                    <p className="mb-3">
                        Siteora will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                    </p>
                    <p className="mb-3">
                        Siteora will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.
                    </p>
                </section>

                {/* Data Security Section */}
                <section ref={setRef} className="mb-10 fade-section">
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">4. Data Security</h2>
                    <p className="mb-3">
                        The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
                    </p>
                </section>

                {/* Your Data Protection Rights */}
                <section ref={setRef} className="mb-10 fade-section">
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">5. Your Data Protection Rights</h2>
                    <p className="mb-3">
                        Depending on your location, you may have certain data protection rights. Siteora aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
                    </p>
                    <p className="mb-3">
                        If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.
                    </p>
                    <p className="mb-3">
                        In certain circumstances, you have the following data protection rights:
                    </p>
                    <ul className="list-disc list-inside ml-4 text-gray-700">
                        <li className="mb-2">
                            <strong>The right to access</strong>, update or to delete the information we have on you.
                        </li>
                        <li className="mb-2">
                            <strong>The right of rectification.</strong> You have the right to have your information rectified if that information is inaccurate or incomplete.
                        </li>
                        <li className="mb-2">
                            <strong>The right to object.</strong> You have the right to object to our processing of your Personal Data.
                        </li>
                        <li className="mb-2">
                            <strong>The right of restriction.</strong> You have the right to request that we restrict the processing of your personal information.
                        </li>
                        <li className="mb-2">
                            <strong>The right to data portability.</strong> You have the right to be provided with a copy of the Personal Data we have on you in a structured, machine-readable and commonly used format.
                        </li>
                        <li className="mb-2">
                            <strong>The right to withdraw consent.</strong> You also have the right to withdraw your consent at any time where Siteora relied on your consent to process your personal information.
                        </li>
                    </ul>
                </section>

                {/* Service Providers */}
                <section ref={setRef} className="mb-10 fade-section">
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">6. Service Providers</h2>
                    <p className="mb-3">
                        We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
                    </p>
                    <p className="mb-3">
                        These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                    </p>
                </section>

                {/* Children's Privacy */}
                <section ref={setRef} className="mb-10 fade-section">
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">7. Children's Privacy</h2>
                    <p className="mb-3">
                        Our Service does not address anyone under the age of 18 ("Children").
                    </p>
                    <p className="mb-3">
                        We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                    </p>
                </section>

                {/* Third-Party Links Section */}
                <section ref={setRef} className="mb-10 fade-section">
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">8. Third-Party Links</h2>
                    <p className="mb-3">
                        Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.
                    </p>
                </section>

                {/* Changes to This Privacy Policy Section */}
                <section ref={setRef} className="mb-10 fade-section">
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">9. Changes to This Privacy Policy</h2>
                    <p className="mb-3">
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                </section>

                {/* Contact Us Section */}
                <section ref={setRef} className="fade-section">
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">10. Contact Us</h2>
                    <p className="mb-3">
                        If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <ul className="list-disc list-inside ml-4 text-gray-700">
                        <li className="mb-2">By email: <a href="mailto:privacy@siteora.com" className="text-blue-600 hover:underline">privacy@siteora.com</a></li>
                        <li className="mb-2">By visiting this page on our website: <a href="https://www.siteora.com/contact" target="_blank" className="text-blue-600 hover:underline">www.siteora.com/contact</a></li>
                    </ul>
                </section>

                {/* Last Updated */}
                <p ref={setRef} className="text-sm text-gray-500 text-right mt-10 fade-section">
                    Last updated: July 28, 2025
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy; // Changed export from App to PrivacyPolicy
