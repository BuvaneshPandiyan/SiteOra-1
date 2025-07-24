/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        zoomIn: 'zoomIn 0.3s ease-out forwards',
        slideInLeft: 'slideInLeft 0.7s ease-out forwards', // Ensure these are also defined if not already
        slideInRight: 'slideInRight 0.7s ease-out forwards',
        
      },
    },
  },
  plugins: [],
}