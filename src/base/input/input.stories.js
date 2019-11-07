import React from 'react';
import { storiesOf } from '@storybook/react';

import Report from '../svg-icon/svg/Report';
import Notification from '../svg-icon/svg/Notification';
import * as v from '../../shared/constants/variables';
import Input from './input';
import Loader from '../loader';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Input
---
~~~js
import Input from 'qasir/lib/base';
~~~
or
~~~js
import Input from 'qasir/lib/base/input';
~~~

Usage
~~~js
<Input />
~~~
`;

storiesOf('Form | Input', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <div style={{ maxWidth: 300 }}>
      <h2>All Variants</h2>

      <h5>Material</h5>
      <Input label="Your Name" />

      <h5>Normal</h5>
      <Input
        label="Your Name"
        variant="normal"
      />

      <h5>Number</h5>
      <Input label="Input your number" type="number" />

      <h2 style={{ marginTop: 60 }}>Error State</h2>
      <Input label="Error State" error />

      <h2 style={{ marginTop: 60 }}>Input Addon</h2>
      <h5>Prefix</h5>
      <Input
        label="Search"
        variant="normal"
        prefix={(
          <Report
            width={18}
            height={18}
            style={{ position: 'relative', top: 2 }}
          />
        )}
      />
      <h5>Suffix</h5>
      <Input
        label="Search"
        variant="normal"
        suffix={(
          <Report
            width={18}
            height={18}
            style={{ position: 'relative', top: 2 }}
          />
        )}
      />

      <h5>Prefix + Suffix</h5>
      <Input
        label="Search"
        variant="normal"
        error
        prefix={(
          <Notification
            width={18}
            height={18}
            style={{ position: 'relative', top: 2 }}
            fill={v.color.red}
          />
        )}
        suffix={<Loader size="sm" />}
      />
    </div>
  ));
