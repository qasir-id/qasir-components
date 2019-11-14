import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Image, { IMAGE_RADIUS, IMAGE_SIZE } from './image';
import exampleImg from './assets/images/defaultImage.png';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Image
---
~~~js
import Image from 'qasir/lib/base';
~~~

or

~~~js
import Image from 'qasir/lib/base/image';
~~~

Examples
~~~js
<Image {props} />
~~~
`;

storiesOf('base|Image', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('with knob', () => (
    <Image
      src={text('Image src', exampleImg)}
      imageRadius={select('Image Radius', IMAGE_RADIUS)}
      imageSize={select('Image Size', IMAGE_SIZE)}
    />
  ))
  .add('Image Radius', () => (
    <>
      {Object.values(IMAGE_RADIUS).map(imageRadius => (
        <div
          style={{
            marginRight: 30,
            display: 'inline-block',
            textAlign: 'center'
          }}
        >
          <Image
            key={imageRadius}
            src={text('Example Image', exampleImg)}
            imageRadius={imageRadius}
          />
          <p>
            <small>{imageRadius}</small>
          </p>
        </div>
      ))}
    </>
  ))
  .add('Image Size', () => (
    <>
      {Object.values(IMAGE_SIZE).map(imageSize => (
        <div
          style={{
            marginRight: 30,
            display: 'inline-block',
            textAlign: 'center'
          }}
        >
          <Image
            key={imageSize}
            src={text('Image src', exampleImg)}
            imageSize={imageSize}
          />
          <p>
            <small>{imageSize}</small>
          </p>
        </div>
      ))}
    </>
  ));
