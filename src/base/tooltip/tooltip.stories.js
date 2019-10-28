import React from 'react';
import { storiesOf } from '@storybook/react';

import { select } from '@storybook/addon-knobs';
import Tooltip, { TOOLTIP_POSITION } from './tooltip';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Label
---
~~~js
import Tooltip from 'qasir/lib/base;
~~~

or
~~~js
import Tooltip from 'qasir/lib/base/tooltip;
~~~

Usage
~~~js
<Tooltip />
~~~
`;

storiesOf('base|Tooltip', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('With Knobs', () => (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Tooltip
        text="tooltip"
        textTooltip="ini adalah isi tooltip-nya."
        position={select('position', TOOLTIP_POSITION, 'right')}
      />
    </div>
  ))
  .add('With Variants', () => (
    <div>
      <h3>Position</h3>
      {Object.values(TOOLTIP_POSITION).map(position => (
        <div
          key={position}
          style={{
            paddingRight: 30,
            marginBottom: 30,
            display: 'inline-block'
          }}
        >
          <Tooltip
            text={position}
            textTooltip="ini adalah isi tooltip-nya."
            position={position}
          />
          <br />
        </div>
      ))}
    </div>
  ));
