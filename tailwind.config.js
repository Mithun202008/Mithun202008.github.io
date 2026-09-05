/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          void: '#04070e',
          black: '#070a14',
          dark: '#0b101e',
          card: '#10172b',
          surface: '#15203b',
          border: '#1b2a4a',
          borderGlow: '#00ff8833',
          neon: '#00ff88',
          emerald: '#10b981',
          cyan: '#00f0ff',
          muted: '#627d98',
          text: '#e2e8f0',
          heading: '#f8fafc',
          amber: '#f59e0b',
          red: '#ef4444'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'neon-sm': '0 0 10px rgba(0, 255, 136, 0.25)',
        'neon-md': '0 0 20px rgba(0, 255, 136, 0.35)',
        'neon-lg': '0 0 35px rgba(0, 255, 136, 0.45)',
        'cyan-sm': '0 0 10px rgba(0, 240, 255, 0.25)',
        'cyan-md': '0 0 20px rgba(0, 240, 255, 0.35)',
        'card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'glitch': 'glitch 2s infinite',
        'radar': 'radar 4s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
