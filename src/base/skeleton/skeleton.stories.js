import React from 'react';
import { storiesOf } from '@storybook/react';

import { text, number } from '@storybook/addon-knobs';
import Skeleton from './skeleton';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Skeleton
---
~~~js
import Skeleton from 'qasir/lib/base';
~~~

or

~~~js
import Skeleton from 'qasir/lib/base/skeleton';
~~~

Usage:
~~~js
<Skeleton />
~~~
`;

storiesOf('base|Skeleton', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <Skeleton
      width={text('width', '160px')}
      height={text('height', '16px')}
      radius={number('borderRadius', 4)}
    />
  ));
