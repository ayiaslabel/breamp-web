import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#03F0FE',
      },
      fontFamily: {
        roboto: ['var(--roboto)'],
        robotoMono: ['var(--roboto-mono)'],
        audiowide: ['var(--audiowide)'],
        dsdigital: ['var(--digital)'],
        timmana: ['var(--timmana)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        bounce: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '100%': {
            transform: 'translateY(-10px)',
          },
        },
        flicker: {
          '0%': {
            opacity: '0.75',
          },
          '100%': {
            opacity: '1',
          },
        },
        spin: {
          to: {
            transform: 'rotate(180deg)',
          },
        },
        wepinFadeOut: {
          '0%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      animation: {
        bounce: 'bounce .5s linear infinite alternate',
        flicker1: 'flicker .7s linear infinite alternate',
        flicker2: 'flicker .7s .2s linear infinite alternate',
        flicker3: 'flicker .7s .4s linear infinite alternate',
        spin: 'spin 4s ease-in-out infinite alternate',
        wepinFadeOut: 'wepinFadeOut 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
