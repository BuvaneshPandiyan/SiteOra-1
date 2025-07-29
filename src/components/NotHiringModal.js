import React from 'react';

const NotHiringModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70 p-4 sm:p-6">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full text-center transform scale-95 opacity-0 animate-scale-in">
        {/* Modal Header */}
        <div className="flex justify-center items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
        </div>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Oh oh!</h2>
        <p className="text-gray-600 mb-8">
          We are currently not hiring. Please check back later for new opportunities!
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Got it!
        </button>
      </div>

      {/* Custom Tailwind Animation for Modal */}
      <style>
        {`
        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
        `}
      </style>
    </div>
  );
};

export default NotHiringModal;
