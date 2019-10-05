import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import theme from './theme';

// Addons components
addDecorator(withA11y);
addDecorator(withKnobs);

addDecorator(
  withInfo({
    header: false,
    // inline: true, 
  })
);

// Option defaults.
addParameters({
  options: {    
    theme: theme,
  }
});

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
