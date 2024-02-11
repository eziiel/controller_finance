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
      boxShadow: {
        blackOne: '0 0 50px 10px rgba(0, 0, 0, 0.5)',
        bigComponentBlack: '0 0 30px 10px rgba(0, 0, 0, 0.3)',
        bigComponentBlue: '0 0 30px 0.5px  rgba(0, 0, 255, 0.3)',
        bigComponentRed: '0 0 30px 0.5px  rgba(255, 0, 0, 0.3)',
        bigComponentGreen: '0 0 30px 0.5px   rgba(0, 255, 0, 0.3)',
        inset: 'inset 0 0 100px 10px  rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
