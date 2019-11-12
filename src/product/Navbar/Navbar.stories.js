/* eslint-disable no-alert */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import Navbar from './Navbar';
import Report from '../../base/svg-icon/svg/Report';
import Notification from '../../base/svg-icon/svg/Notification';

const Additional = (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <div style={{ marginRight: 15 }}>
      <Report />
    </div>
    <div>
      <Notification />
    </div>
  </div>
);

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Navbar
---
~~~js
import Navbar from 'qasir/lib/product';
~~~

or

~~~js
import Navbar from 'qasir/lib/product/Navbar';
~~~

Examples
~~~js
<Navbar {...props} />
~~~
`;

storiesOf('product|Navbar', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('preview with knobs', () => (
    <Navbar
      imageSrc={text('imageSrc', '')}
      className={text('className', '')}
      title={text('title', 'Profile')}
      useLeftIcon={boolean('useLeftIcon', true)}
      onClick={() => alert('triggered')}
    />
  ))
  .add('with right content', () => (
    <Navbar
      title={'Profile'}
      onClick={() => alert('triggered')}
      rightContent={Additional}
    />
  ));
