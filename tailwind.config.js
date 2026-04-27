/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// Luxury black and charcoal palette
				'luxury': {
					'black': '#000000',
					'dark': '#1a1a1a',
					'charcoal': '#2d2d2d',
					'gray-dark': '#3d3d3d',
					'gray-medium': '#999999',
					'gray-light': '#e8e8e8',
					'white': '#ffffff',
					'off-white': '#f5f5f5',
					'light': '#f0f0f0'
				},
				// Gold and silver accents
				'accent': {
					'gold': '#D4AF37',
					'gold-light': '#E8D4A0',
					'silver': '#C0C0C0',
					'platinum': '#E5E4E2'
				}
			},
			fontFamily: {
				// Playfair Display for elegant headings
				'display': ['Playfair Display', 'serif'],
				// Raleway for clean body text
				'sans': ['Raleway', 'sans-serif']
			},
			fontSize: {
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
				'5xl': '3rem',
				'6xl': '3.75rem'
			},
			spacing: {
				'18': '4.5rem',
				'20': '5rem',
				'24': '6rem',
				'28': '7rem',
				'32': '8rem'
			}
		}
	},
	plugins: []
};