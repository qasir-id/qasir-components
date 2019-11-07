import React from 'react';
import { storiesOf } from '@storybook/react';

import Textarea from './textarea';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Textarea
---
~~~js
import Textarea from 'qasir/lib/base';
~~~
or
~~~js
import Textarea from 'qasir/lib/base/textarea';
~~~

Usage
~~~js
<Textarea {...props}/>
`;

storiesOf('form|Textarea', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <div style={{ padding: 40 }}>
      <div style={{ maxWidth: 300 }}>
        <h5>Default</h5>
        <Textarea label="Message" />

        <h5>Character Count</h5>
        <Textarea label="Message" maxLength={140} showCharacterCount />
        <h5>Error</h5>
        <Textarea label="Message" error />

        <h5>Disabled</h5>
        <Textarea label="Message" isDisabled />
      </div>
    </div>
  ));
