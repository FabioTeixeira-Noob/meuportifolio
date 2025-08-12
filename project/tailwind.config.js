/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // Dark blue background
          light: '#1e293b',
          dark: '#0a1120',
        },
        accent: {
          DEFAULT: '#f97316', // Orange from logo
          light: '#fb923c',
          dark: '#ea580c',
        },
        text: {
          DEFAULT: '#f8fafc', // Light text
          secondary: '#cbd5e1',
          muted: '#94a3b8',
        },
        success: '#22c55e',
        warning: '#eab308',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'typewriter': 'typewriter 2s steps(40) forwards',
        'typewriter-cursor': 'typewriter-cursor 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'typewriter-cursor': {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#f97316' },
        },
      },
    },
  },
  plugins: [],
};