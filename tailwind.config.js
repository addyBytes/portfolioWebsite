/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        panel: 'var(--color-panel)',
        panelStrong: 'var(--color-panel-strong)',
        line: 'var(--color-line)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          soft: 'var(--color-accent-soft)',
          glow: 'var(--color-accent-glow)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px color-mix(in srgb, var(--color-accent) 18%, transparent), 0 20px 80px color-mix(in srgb, var(--color-accent) 14%, transparent)',
        glass: '0 20px 60px rgba(0, 0, 0, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(22px, -28px, 0) scale(1.06)' },
          '66%': { transform: 'translate3d(-18px, 18px, 0) scale(0.96)' },
        },
        revealUp: {
          from: { opacity: '0', transform: 'translate3d(0, 32px, 0)' },
          to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        lineDraw: {
          from: { transform: 'scaleY(0)' },
          to: { transform: 'scaleY(1)' },
        },
        cursorPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.15)', opacity: '0.9' },
        },
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
        blob: 'blob 18s ease-in-out infinite',
        revealUp: 'revealUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        lineDraw: 'lineDraw 1.3s cubic-bezier(0.16, 1, 0.3, 1) both',
        cursorPulse: 'cursorPulse 2.6s ease-in-out infinite',
      },
      backgroundImage: {
        'noise-grid':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};