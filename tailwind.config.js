/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          dark: '#B8960F',
        },
        black: {
          DEFAULT: '#111111',
          pure: '#000000',
        },
        gray: {
          light: '#F5F5F5',
          mid: '#E5E5E5',
          dark: '#333333',
        },
        cardBg: '#FFFFFF',
        customBorder: '#DDDDDD',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        barlow: ['"Barlow"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        premium: '0 24px 80px rgba(0, 0, 0, 0.15)',
        card: '0 10px 30px rgba(0, 0, 0, 0.05)',
        glow: '0 0 15px rgba(212, 175, 55, 0.3)',
      }
    },
  },
  plugins: [],
}
