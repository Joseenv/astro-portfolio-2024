/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      responsive: ['clamp(3rem,-.057rem + 10.0714vw,10.25rem)']
    },
		extend: {
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
