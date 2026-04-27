import type { Config } from 'tailwindcss'
const animate = require('tailwindcss-animate')

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1280px' }
    },
    extend: {
      colors: {
        // SNS-friendly gradient accents (think Threads / Instagram / Linear)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        accent: {
          violet: '#7C3AED',
          pink: '#EC4899',
          cyan: '#06B6D4',
          amber: '#F59E0B'
        },
        steward: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          900: '#4C1D95'
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace']
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem'
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%,-40%) scale(1)' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out both',
        shimmer: 'shimmer 1.6s linear infinite'
      },
      backgroundImage: {
        'sns-gradient':
          'linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #F59E0B 100%)',
        'sns-gradient-cool':
          'linear-gradient(135deg, #06B6D4 0%, #7C3AED 100%)'
      }
    }
  },
  plugins: [animate]
}

export default config
