/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		themes: [ 
		  {
			mytheme: {
			
   "primary": "#EC407A",
			
   "secondary": "#1565C0",
			
   "accent": "#90CAF9",
			
   "neutral": "#EC407A",
			
   "base-100": "#fecdd3",

   "white": "#f1f5f9",
			},
		  },
	"black",
	"synthwave",
	"night"
		],
	darkTheme: "synthwave",
	  },
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
