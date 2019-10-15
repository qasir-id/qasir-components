import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';

import Toast, { TOAST_VARIANT } from './toast';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Toast
---
~~~js
import Toast from 'qasir/lib/base;
~~~

or
~~~js
import Toast from 'qasir/lib/base/toast;
~~~

Usage
~~~js
<Toast>Children</Toast>
~~~
`;

storiesOf('base|Toast', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <Toast
      open={boolean('open', true)}
      variant={select('variant', TOAST_VARIANT, 'success')}
    >
      <span style={{ fontSize: 14 }}>
        {text('message', 'Hello, world! This is a toast message.')}
      </span>
    </Toast>
  ));
