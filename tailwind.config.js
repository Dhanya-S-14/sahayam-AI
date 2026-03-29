/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A1F44',
          50: '#E8EDF5',
          100: '#C5D3E8',
          200: '#9FB6D9',
          300: '#7899C9',
          400: '#5281BC',
          500: '#2F6FAF',
          600: '#1A5080',
          700: '#0A1F44',
          800: '#071633',
          900: '#030D1A',
        },
        accent: {
          DEFAULT: '#00C2FF',
          light: '#4DD3FF',
          dark: '#0099CC',
        },
        highlight: {
          DEFAULT: '#FFD166',
          light: '#FFE299',
          dark: '#E6B84D',
        },
      },
      boxShadow: {
        'card': '0 4px 20px rgba(10, 31, 68, 0.08)',
        'card-hover': '0 8px 30px rgba(10, 31, 68, 0.12)',
        'glow-cyan': '0 0 20px rgba(0, 194, 255, 0.3)',
        'glow-yellow': '0 0 20px rgba(255, 209, 102, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
