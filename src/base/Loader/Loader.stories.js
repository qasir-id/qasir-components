/* eslint-disable react/display-name */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Loader, { LOADER_COLOR, LOADER_TYPE, LOADER_SIZE } from '../loader/loader';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Loader
---
~~~js
import Text from '@qui/lib/base/';
~~~

or

~~~js
import Text from '@qui/lib/base/loader';
~~~

Examples
~~~js
<Loader />
~~~
`;

storiesOf('base|Loader', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('all loaders', () => (
    <div>
      <h3>Variants</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        {Object.values(LOADER_TYPE).map((type) => (
          <div key={type} style={{ marginRight: 30 }}>
            <Loader type={type} />
          </div>
        ))}
      </div>
      <h3>Color</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        {Object.values(LOADER_COLOR).map((color) => (
          <div key={color} style={{ marginRight: 30 }}>
            <Loader color={color} />
          </div>
        ))}
      </div>
      <h3>Size</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        {Object.values(LOADER_SIZE).map((size) => (
          <div key={size} style={{ marginRight: 30 }}>
            <Loader size={size} />
          </div>
        ))}
      </div>
    </div>
  ));
