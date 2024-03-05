import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

import color, { colorBase, colorTheme, settingBase } from './config/color'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      ...colors,
      ...colorTheme,
      day: 'rgba(112, 221, 231, <alpha-value>)'
    }
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase(colorBase)
      addBase(settingBase)
    })
  ],
}
export default config
