/** @format */

import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary": "#8f5cc7",
				"background-light": "#f7f6f8",
				"background-dark": "#120d17",
				"surface-dark": "#1d1724",
				"surface-light": "#2a2231",
				"accent-purple": "#b28ad8",
			},
			fontFamily: {
				display: ["Spline Sans", "sans-serif"],
				body: ["Noto Sans", "sans-serif"],
			},
			borderRadius: {
				"DEFAULT": "1rem",
				"lg": "1.5rem",
				"xl": "2rem",
				"2xl": "2.5rem",
				"full": "9999px",
			},
		},
	},
	plugins: [typography],
};
