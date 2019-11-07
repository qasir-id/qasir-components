import React from 'react';
import { storiesOf } from '@storybook/react';

import { text, select, boolean } from '@storybook/addon-knobs';
import Badge, { BADGE_VARIANT } from './badge';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Badge
---
~~~js
import Badge from 'qasir/lib/base';
~~~

or
~~~js
import Badge from 'qasir/lib/base/badge';
~~~

Usage
~~~js
<Badge />
~~~
`;

storiesOf('base|Badge', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('all variants', () => (
    <>
      <h3>Example with Text</h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {Object.values(BADGE_VARIANT).map(variant => (
          <div
            key={variant}
            style={{
              marginRight: 5
            }}
          >
            <Badge content={variant} status={variant} />
          </div>
        ))}
      </div>
      <h3>Example with Number</h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {Object.values(BADGE_VARIANT).map(variant => (
          <div
            key={variant}
            style={{
              marginRight: 5
            }}
          >
            <Badge content={5} />
          </div>
        ))}
      </div>

      <h3>Floating Example</h3>
      <div
        style={{
          width: 100,
          height: 100,
          background: '#EEE',
          borderRadius: 4,
          position: 'relative'
        }}
      >
        <Badge content={2} isFloating />
      </div>
    </>
  ))
  .add('with knobs', () => (
    <>
      <div
        style={{
          width: 100,
          height: 100,
          background: '#EEE',
          borderRadius: 4,
          position: 'relative'
        }}
      >
        <Badge
          content={text('content', 2)}
          status={select('status', BADGE_VARIANT, 'alert')}
          isFloating={boolean('isFloating', false)}
        />
      </div>
    </>
  ));
