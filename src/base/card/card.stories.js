import React from 'react';
import { storiesOf } from '@storybook/react';

import { select } from '@storybook/addon-knobs';
import Card, { CARD_ELEVATION } from './card';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Card
---
~~~js
import Card from 'qasir/lib/base';
~~~

or

~~~js
import Card from 'qasir/lib/base/card';
~~~

Examples
~~~js
<Card {...props}>Children</Card>
~~~
`;

storiesOf('base|Card', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('all variations', () => (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          background: '#f7f9fa',
          padding: 20,
          textAlign: 'center'
        }}
      >
        {Object.values(CARD_ELEVATION).map(elevation => (
          <div key={elevation} style={{ width: 100, marginRight: 15 }}>
            <p>
              <small>{elevation}</small>
            </p>
            <Card
              elevation={elevation}
              style={{
                width: 100,
                height: 60
              }}
            />
          </div>
        ))}
      </div>
    </div>
  ))
  .add('with knob', () => (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          background: '#f7f9fa',
          padding: 20,
          textAlign: 'center'
        }}
      >
        <Card
          elevation={select('elevation', CARD_ELEVATION, 'container')}
          style={{
            width: 100
          }}
        >
          <small>This is card</small>
        </Card>
      </div>
    </div>
  ));
