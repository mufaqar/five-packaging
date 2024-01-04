import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        title_Clr: "#0B0B0B",
        txt_Clr: "#666666",
        primary: "#C13112",
        secondary: "#6B0600",
        darkBlue: "#003049",
        lightBlue: "#669BBC",
      }
    },
  },
  plugins: [],
}
export default config
