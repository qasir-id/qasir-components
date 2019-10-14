import React from 'react';
import { storiesOf } from '@storybook/react';

import { text, boolean } from '@storybook/addon-knobs';
import Select from './select';

const Option = [
  { label: 'One', value: 'one' },
  { label: 'Two', value: 'two' },
  { label: 'Three', value: 'three' }
];

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Selectbox
---
~~~js
import Select from 'qasir/lib/base;
~~~
or
~~~js
import Select from 'qasir/lib/base/select;
~~~

Usage
~~~js
<Select option={array} />
~~~
`;

storiesOf('form | Select', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <div style={{ maxWidth: 400 }}>
      <Select
        options={Option}
        label={text('text', 'Placeholder')}
        error={boolean('isError', false)}
        errorMessage={text('Error Message', 'Wajib diisi bosQue')}
      />
    </div>
  ));
