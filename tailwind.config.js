/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dbe7ff',
          200: '#bdd2ff',
          300: '#90b3ff',
          400: '#5d8aff',
          500: '#3a66f5',
          600: '#2546de',
          700: '#1d36b3',
          800: '#1a2e8c',
          900: '#0b1a4a',
          950: '#060f2e',
        },
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        gold: {
          400: '#facc15',
          500: '#eab308',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(11, 26, 74, 0.18)',
        glow: '0 20px 60px -20px rgba(58, 102, 245, 0.45)',
        card: '0 4px 24px -8px rgba(11, 26, 74, 0.12)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0b1a4a 0%, #1d36b3 45%, #6d28d9 100%)',
        'cta-gradient': 'linear-gradient(135deg, #3a66f5 0%, #8b5cf6 60%, #22d3ee 100%)',
        'soft-radial': 'radial-gradient(1200px 600px at 80% -10%, rgba(58,102,245,0.18), transparent 60%), radial-gradient(900px 500px at -10% 30%, rgba(139,92,246,0.18), transparent 60%)',
      },
      animation: {
        'float-slow': 'float 14s ease-in-out infinite',
        'float-slower': 'float 22s ease-in-out infinite',
        'gradient-x': 'gradientX 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-24px) translateX(12px)' },
        },
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
