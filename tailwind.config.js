module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  variants: {},
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    themes: [
      {
        tz: {
          primary: '#f80',
          secondary: '#777',
          accent: '#ffffff',
          neutral: '#ffffff',
          'base-100': '#ffffff',
          info: '#ffffff',
          success: '#00FF88',
          warning: '#fefb01',
          error: '#FF0800',
        },
      },
    ],
  },
};
