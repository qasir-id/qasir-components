import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import Switcher from './switcher';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Switcher
---
`;

storiesOf('form|Switcher', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <Switcher
      labelA={text('Label for untoggled state (labelA)', 'Off')}
      labelB={text('Label for toggled state (labelB)', 'On')}
      hideLabel={boolean('Hide Label (hideLabel)', false)}
      onChange={action('onChange')}
      onToggle={action('onToggle')}
    />
  ));
