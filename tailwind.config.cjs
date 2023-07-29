/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		themes: [ 
		  {
			mytheme: {
			
   "primary": "#1565C0",
			
   "secondary": "#EC407A",
			
   "accent": "#26A694",
			
   "neutral": "#191D24",
			
   "base-100": "#90CAF9",
			},
		  },
	"synthwave",
		],
	  },
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
