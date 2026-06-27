import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 45px rgba(59,130,246,0.18)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(59,130,246,0.22), transparent 40%), radial-gradient(circle at bottom right, rgba(139,92,246,0.18), transparent 30%)',
        'glass-panel': 'linear-gradient(135deg, rgba(15,23,42,0.55), rgba(30,41,59,0.6))',
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      backgroundColor: {
        panel: 'rgba(15,23,42,0.72)',
      },
      borderColor: {
        panel: 'rgba(148,163,184,0.24)',
      },
    },
  },
  plugins: [],
};

export default config;
