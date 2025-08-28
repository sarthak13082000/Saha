import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2647',
          50: '#E6EEF6',
          100: '#CCDEED',
          200: '#99BEDB',
          300: '#669DCA',
          400: '#337CB8',
          500: '#0A5BA7',
          600: '#0A4A86',
          700: '#0A3970',
          800: '#0A2E5C',
          900: '#0A2647'
        }
      }
    }
  },
  plugins: []
}

export default config
