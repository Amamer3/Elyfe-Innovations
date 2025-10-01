const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./mdx-components.tsx",
		"content/**/*.mdx",
	],

	theme: {
		extend: {
            colors: {
                primary: {
                    DEFAULT: '#32DBAB', // rgb(50,219,171)
                    dark: '#51E0B8', // dark mode variant of primary (slightly lighter for improved contrast)
                },
                secondary: {
                    DEFAULT: '#00C4EE', // rgb(0,196,238)
                    dark: '#26CDF1', // dark mode variant of secondary (slightly lighter for improved contrast)
                },
            },
			typography: {
				DEFAULT: {
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
			fontFamily: {
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
				display: ["var(--font-calsans)"],
				heading: ["var(--font-space-grotesk)"],
				mono: ["var(--font-jetbrains-mono)", ...defaultTheme.fontFamily.mono],
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"fade-in": "fade-in 3s ease-in-out forwards",
				"fade-in-up": "fade-in-up 0.6s ease-out forwards",
				"fade-in-down": "fade-in-down 0.6s ease-out forwards",
				"fade-in-left": "fade-in-left 0.6s ease-out forwards",
				"fade-in-right": "fade-in-right 0.6s ease-out forwards",
				"scale-in": "scale-in 0.5s ease-out forwards",
				"slide-up": "slide-up 0.8s ease-out forwards",
				"slide-down": "slide-down 0.8s ease-out forwards",
				"bounce-in": "bounce-in 0.8s ease-out forwards",
				"float": "float 3s ease-in-out infinite",
				"pulse-slow": "pulse 3s ease-in-out infinite",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 3s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-in-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(30px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"fade-in-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-30px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"fade-in-left": {
					"0%": {
						opacity: "0",
						transform: "translateX(-30px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"fade-in-right": {
					"0%": {
						opacity: "0",
						transform: "translateX(30px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"scale-in": {
					"0%": {
						opacity: "0",
						transform: "scale(0.9)",
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)",
					},
				},
				"slide-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(100px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"slide-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-100px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"bounce-in": {
					"0%": {
						opacity: "0",
						transform: "scale(0.3)",
					},
					"50%": {
						opacity: "1",
						transform: "scale(1.05)",
					},
					"70%": {
						transform: "scale(0.9)",
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)",
					},
				},
				"float": {
					"0%, 100%": {
						transform: "translateY(0px)",
					},
					"50%": {
						transform: "translateY(-10px)",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						"line-height": "100%",
						opacity: "100%",
					},
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-debug-screens"),
	],
};
