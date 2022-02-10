import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

const bookTheme = create({
  base: 'light',
  brandTitle: 'Kraken',
  appBg: '#22272E',
  appContentBg: '#fff',
  barSelectedColor: '#22272E',
  colorSecondary: '#1CD9AC',
  textColor: '#1CD9AC'
})

addons.setConfig({
  theme: bookTheme
})
