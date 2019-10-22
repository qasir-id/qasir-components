import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import InfoBox, { INFO_BOX_VARIANT } from './info-box';

import Notification from '../svg-icon/svg/Notification';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Info Box
---
~~~js
import InfoBox from 'qasir/lib/base';
~~~

or

~~~js
import InfoBox from 'qasir/lib/base/info-box';
~~~

Examples
~~~js
<InfoBox {props} />
~~~
`;

storiesOf('base|Info Box ', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('With Knobs', () => (
    <InfoBox
      variant='alert'
      message={text('Message', 'This is the example of InfoBox component')}
      clickMessage={text('clickMessage', 'Click Me!')}
      onClick={() => alert('test')}
      icon={<Notification />}
    />
  ))
  .add('With Variants', () => (
    <div>
      {Object.values(INFO_BOX_VARIANT).map(variant => (
        <div key={variant} style={{ marginBottom: 15 }}>
          <InfoBox
            variant={variant}
            message='This is the example of InfoBox component'
            clickMessage='Click Me!'
            icon={<Notification />}
          />
          <br />
          <br />
        </div>
      ))}
    </div>
  ));
