import React from 'react';
import { storiesOf } from '@storybook/react';

import InputPassword from './input-password';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Input Password
---
~~~js
import InputPassword from 'qasir/lib/base';
~~~
or
~~~js
import InputPassword from 'qasir/lib/base/input-password';
~~~

Usage
~~~js
<InputPassword {...props} />
~~~
`;

storiesOf('form|Input Password', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <div style={{ width: 300 }}>
      <InputPassword label="Your Password" value="QaSiRqiUqiU2019!" />
    </div>
  ));
