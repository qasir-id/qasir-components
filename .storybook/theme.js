import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#e34224',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: '#f3f3f3',
  appBorderColor: '#e9e9e9',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Qasir',
  brandUrl: 'https://www.qasir.id',
  brandImage: 'https://www.qasir.id/images/revamp-new-img/red.svg',
});