/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#7f13ec',
				'background-light': '#f7f6f8',
				'background-dark': '#130b1a',
				'surface-dark': '#1f1429',
				'surface-light': '#2a1d35',
				'accent-purple': '#9d4edd',
			},
			fontFamily: {
				display: ['Spline Sans', 'sans-serif'],
				body: ['Noto Sans', 'sans-serif'],
			},
			borderRadius: {
				DEFAULT: '1rem',
				lg: '1.5rem',
				xl: '2rem',
				'2xl': '2.5rem',
				full: '9999px',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
