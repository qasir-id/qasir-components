import React from 'react';
import { storiesOf } from '@storybook/react';

import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import RadioButton from './radio-button';

const LabelContent = (
  <>
    <h3 style={{ fontSize: 14, color: '#474955', margin: 0 }}>Mandiri</h3>
    <span style={{ fontSize: 12, color: '#474955', marginBottom: 0 }}>
      0140397
    </span>
  </>
);

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Radio Button
---
~~~js
import RadioButton from 'qasir/lib/base';
~~~
or
~~~js
import RadioButton from 'qasir/lib/base/radio-button';
~~~

Usage
~~~js
<RadioButton {...props}/>
~~~
`;

storiesOf('form|RadioButton', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <RadioButton
      className="some-class"
      name="bank"
      labelText={LabelContent}
      disabled={boolean('Disabled (disabled)', false)}
      hideLabel={boolean('Hide Label (hideLabel)', false)}
      onClick={action('radio')}
    />
  ));
