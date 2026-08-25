/** @format */

import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary": "#9b6dd1",
				"background-light": "#f7f6f8",
				"background-dark": "#17131b",
				"surface-dark": "#211b27",
				"surface-light": "#302638",
				"accent-purple": "#c097e6",
			},
			fontFamily: {
				display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
				body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
				mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
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
