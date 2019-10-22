import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import EmptyState from './empty-state';
import Button from '../button';

import ImgDefault from './assets/images/default.png';
import ImgDefaultHd from './assets/images/default@2x.png';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Empty State
---
~~~js
import EmptyState from 'qasir/lib/base';
~~~

or

~~~js
import EmptyState from 'qasir/lib/base/empty-state';
~~~

Examples
~~~js
<EmptyState {props} />
~~~
`;

storiesOf('base|Empty State', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('With Knobs', () => (
    <EmptyState
      img2x={text('Image Retina', ImgDefaultHd)}
      img={text('Image Default', ImgDefault)}
      title={text('Title', 'Troli Kamu Masih Kosong')}
      subtitle={text(
        'Subtitle',
        'Yuk, isi troli kamu supaya troli kamu ga sedih lagi :)'
      )}
    />
  ))
  .add('With Other Component', () => (
    <EmptyState
      img2x={text('Image Retina', ImgDefaultHd)}
      img={text('Image Default', ImgDefault)}
      title={text('Title', 'Troli Kamu Masih Kosong')}
      subtitle={text(
        'Subtitle',
        'Yuk, isi troli kamu supaya troli kamu ga sedih lagi :)'
      )}
      otherComponent={<Button>test</Button>}
    />
  ));
