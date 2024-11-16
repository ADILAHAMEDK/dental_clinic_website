/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Gray: 'rgba(106, 106, 106, 1)',
        Gray2: 'rgba(134, 134, 134, 1)',
        gray3:'rgba(92, 93, 97, 1)',
        gray4:'rgba(158, 158, 158, 1)',
        gray5:'rgba(131, 131, 131, 1)',
        yellow: 'rgba(254, 165, 0, 1)',
        yellowStar: 'rgba(252, 213, 3, 1)',
        orange:'rgba(245, 130, 32, 1)',
        orange2:'rgba(245, 130, 32, 1)',
        blue:'rgba(255, 255, 255, 0.7)',
        black:'rgba(35, 31, 32, 1)',
        blue2:'rgba(1, 16, 22, 1)',
        borderR:'rgba(225, 225, 225, 1)',
        card:'rgba(230, 230, 230, 1)',
        border:'rgba(35, 62, 72, 1)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, rgba(10, 122, 191, 1), rgba(255, 255, 255, 0.7))',
        'gradient-linear': 'linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.01))',
      },
      
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

