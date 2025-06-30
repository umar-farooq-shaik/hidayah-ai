
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#10B981', // Emerald green
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#FBBF24', // Deep gold
					foreground: '#1F2937'
				},
				accent: {
					DEFAULT: '#F9F5F1', // Soft beige
					foreground: '#1F2937'
				},
				slate: {
					DEFAULT: '#1F2937', // Dark slate gray
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#F3F4F6',
					foreground: '#6B7280'
				},
				destructive: {
					DEFAULT: '#EF4444',
					foreground: '#FFFFFF'
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#1F2937'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#1F2937'
				}
			},
			fontFamily: {
				'cairo': ['Cairo', 'serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'inter': ['Inter', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'typing': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.1)' },
					'50%': { boxShadow: '0 8px 25px -3px rgba(16, 185, 129, 0.3)' }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'typing': 'typing 2s steps(40, end)',
				'glow': 'glow 2s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
