import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import Tab from './tab';
import TabItem from './tab-item';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Tabs
---
~~~js
import { Tab, TabItem } from 'qasir/lib/base';
~~~

or
~~~js
import { Tab, TabItem } from 'qasir/lib/base/tab';
~~~

Usage
~~~js
<Tab { ...props }>
  <TabItem title="tab title">{ children }</TabItem>
</Tab>
~~~
`;

storiesOf('base|Tab', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <div style={{ maxWidth: 768, margin: 'auto' }}>
      <Tab activeIndex={number('activeIndex', 1)}>
        <TabItem title="Product Item">
          <div style={{ padding: '15px 0' }}>
            Raw denim you probably haven't heard of them jean shorts Austin.
            Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
            butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
            qui irure terry richardson ex squid. Aliquip placeat salvia cillum
            iphone. Seitan aliquip quis cardigan american apparel, butcher
            voluptate nisi qui.
          </div>
        </TabItem>
        <TabItem title="Product Details">
          <div style={{ padding: '15px 0' }}>
            Food truck fixie locavore, accusamus mcsweeney's marfa nulla
            single-origin coffee squid. Exercitation +1 labore velit, blog
            sartorial PBR leggings next level wes anderson artisan four loko
            farm-to-table craft beer twee. Qui photo booth letterpress, commodo
            enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
            PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus
            mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente
            labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
            sustainable jean shorts beard ut DIY ethical culpa terry richardson
            biodiesel. Art party scenester stumptown, tumblr butcher vero sint
            qui sapiente accusamus tattooed echo park.
          </div>
        </TabItem>
        <TabItem title="Product Price">
          <div style={{ padding: '15px 0' }}>
            Food truck fixie locavore, accusamus mcsweeney's marfa nulla
            single-origin coffee squid. Exercitation +1 labore velit, blog
            sartorial PBR leggings next level wes anderson artisan four loko
            farm-to-table craft beer twee. Qui photo booth letterpress, commodo
            enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
            PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus
            mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente
            labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
            sustainable jean shorts beard ut DIY ethical culpa terry richardson
            biodiesel. Art party scenester stumptown, tumblr butcher vero sint
            qui sapiente accusamus tattooed echo park.
          </div>
        </TabItem>
      </Tab>
    </div>
  ));
