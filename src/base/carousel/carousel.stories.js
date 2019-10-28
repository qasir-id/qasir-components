import React from 'react';
import { storiesOf } from '@storybook/react';

import Carousel from './carousel';

const sliderSettings = {
  swipeToSlide: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};

const Card = {
  height: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgb(240, 240, 240)',
  margin: '10px',
  cursor: 'pointer'
};

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Carousel
---

This component extends from React Slick, for better documentation, you can open this link https://react-slick.neostack.com/docs/api/

~~~js
import Carousel from 'qasir/lib/base';
~~~

or

~~~js
import Carousel from 'qasir/lib/base/Carousel';
~~~

Examples
~~~js
<Carousel {...sliderSettings}>{children}</Carousel>
~~~
`;

storiesOf('base|Carousel', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <div style={{ padding: 20 }}>
      <Carousel {...sliderSettings}>
        {new Array(10).fill('').map((str, index) => (
          <div key={index}>
            <div style={Card}>
              <h1>{index}</h1>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  ));
