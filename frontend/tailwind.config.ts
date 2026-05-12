import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',
        success: '#16A34A',
        danger: '#DC2626',
        background: '#F8F9FA',
      },
      borderRadius: {
        'card': '10px',
        'input': '8px',
        'badge': '6px',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
