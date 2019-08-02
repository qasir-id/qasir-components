import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import theme from './theme';

// Addons components
addDecorator(withA11y);

// Option defaults.
addParameters({
  options: {    
    theme: theme,
  }
});

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
