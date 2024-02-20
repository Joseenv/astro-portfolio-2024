/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
      dark: '#080807',
      light: '#D1D1C7',
      textSecundary: '#6B645C',
      titleLightText: '#D1D1C7',
      titleDarkText: '#393632',
      subtitleDarkText: '#DDDDD5',
      titleAccentDark: '#BFBFB1',
      availableWork: '#A29E9A',
      cards: '#E1E1DB',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      titleResponsive: ['clamp(3rem,-.057rem + 10.0714vw,10.25rem)']
    },
		extend: {
      lineHeight: {
        'base': '130%',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    }
	},
	plugins: [],
}
