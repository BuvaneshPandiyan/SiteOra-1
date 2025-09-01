import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const comparisonData = {
  headers: ['Feature', 'SiteOra', 'Typical Agency', 'DIY Builder'],
  rows: [
    { feature: 'Upfront Cost', values: ['Affordable Project Rate', 'High Retainer', 'Low Monthly Fee'] },
    { feature: 'Hidden Monthly Fees', values: ['Zero', 'Yes', 'Yes'] },
    { feature: 'Performance & Speed', values: ['Excellent ✓', 'Varies', 'Poor ✗'] },
    { feature: 'Truly Custom Design', values: ['Yes ✓', 'Yes ✓', 'Limited ✗'] },
    { feature: 'Expert SEO Included', values: ['Yes ✓', 'Extra Cost', 'DIY ✗'] },
    { feature: 'Direct Founder Contact', values: ['Yes ✓', 'No ✗', 'Forums ✗'] },
    { feature: 'Long-Term Support', values: ['Partnership', 'Billable Hours', 'Community Support'] },
    { feature: 'Launch Time', values: ['Fast', 'Slow', 'Varies'] },
  ],
};

function ComparisonTable() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  // --- State and logic for 3D tilt effect ---
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // --- State for mobile swiper ---
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentCard = cardRef.current;
    if (!currentCard) return;
    const isTouchDevice = 'ontouchstart' in window;

    const handleMouseMove = (e) => {
      const rect = currentCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (y - centerY) / centerY * -5;
      const tiltY = (x - centerX) / centerX * 5;
      setTilt({ x: tiltX, y: tiltY });
    };
    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

    if (!isTouchDevice) {
        currentCard.addEventListener('mousemove', handleMouseMove);
        currentCard.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (!isTouchDevice && currentCard) {
          currentCard.removeEventListener('mousemove', handleMouseMove);
          currentCard.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            The Smarter Choice For Your Business
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            See how our unique model provides superior value compared to traditional agencies and DIY platforms.
          </p>
        </div>

        {/* --- DESKTOP: Upgraded 3D Table Card --- */}
        <div 
          ref={cardRef}
          className={`hidden md:block transition-all duration-1000 ease-out ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transformStyle: 'preserve-3d',
            transform: `perspective(1500px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          }}
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-100/70">
                <tr>
                  {comparisonData.headers.map((header) => (
                    <th key={header} className={`p-6 text-sm font-bold text-gray-800 uppercase tracking-wider ${header === 'SiteOra' ? 'bg-indigo-50 text-indigo-700' : ''}`}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonData.rows.map((row, rowIndex) => (
                  <tr 
                    key={row.feature} 
                    className={`transition-opacity duration-500 ease-out ${inView ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${rowIndex * 100}ms` }}
                  >
                    <td className="p-6 font-semibold text-gray-900">{row.feature}</td>
                    {row.values.map((value, valueIndex) => (
                      <td key={valueIndex} className={`p-6 ${valueIndex === 0 ? 'bg-indigo-50 font-bold text-indigo-700' : 'text-gray-600'}`}>
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- MOBILE: Super Cool Swipeable Cards --- */}
        <div className="md:hidden">
          <div className="relative w-full max-w-sm mx-auto h-80">
            {comparisonData.rows.map((row, index) => {
              const offset = index - activeIndex;
              const isVisible = Math.abs(offset) <= 2;
              const style = {
                transform: `translateX(${offset * 100}%) scale(${1 - Math.abs(offset) * 0.1})`,
                opacity: isVisible ? 1 : 0,
                zIndex: comparisonData.rows.length - Math.abs(offset),
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              };
              return (
                <div key={row.feature} className="absolute w-full h-full" style={style}>
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 h-full flex flex-col p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{row.feature}</h3>
                    <div className="flex-grow space-y-3">
                      <div className="flex justify-between items-center bg-indigo-50 p-3 rounded-lg">
                        <span className="font-semibold text-indigo-700">SiteOra</span>
                        <span className="font-bold text-indigo-700">{row.values[0]}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Agency</span>
                        <span className="text-gray-700">{row.values[1]}</span>
                      </div>
                       <div className="flex justify-between items-center">
                        <span className="text-gray-500">DIY Builder</span>
                        <span className="text-gray-700">{row.values[2]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {comparisonData.rows.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${activeIndex === index ? 'bg-indigo-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default ComparisonTable;
