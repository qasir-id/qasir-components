/* eslint-disable no-script-url */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { text, boolean } from '@storybook/addon-knobs';
import { Row, Col } from '../../base/grid';
import GridBoxList from './GridBoxList';
import GridBoxListSkeleton from './GridBoxList.skeleton';

const data = [
  {
    image: 'https://cf.shopee.co.id/file/2a6b7229695cdcfdd1e49b5e2e9e838a_tn',
    title: 'Indomie Goreng Rasa Rendang 85 gr, Isi 24 Indomie',
    priceAfter: 'Rp 36.000',
    badgeContent: '20%',
    href: 'javascript:;'
  },
  {
    image: '',
    title: 'Mie Indomie Rasa Rendang 1 Dus Isi 40 Buah Harga Murah',
    priceAfter: 'Rp 36.000',
    priceBefore: 'Rp 56.000',
    badgeContent: '20%',
    href: 'javascript:;'
  },
  {
    image: 'https://assets.klikindomaret.com/share/20049556/20049556_1.jpg',
    title: 'Indomie Goreng Rasa Rendang 85 gr, Isi 24',
    priceAfter: 'Rp 15.000',
    priceBefore: 'Rp 56.000',
    badgeContent: '20%',
    href: 'javascript:;'
  },
  {
    title: 'Indomie Goreng Rasa Rendang 85 gr, Isi 24',
    priceAfter: 'Rp 36.000',
    badgeContent: '20%',
    href: 'javascript:;',
    isEmpty: true
  },
  {
    image: 'https://cf.shopee.co.id/file/2a6b7229695cdcfdd1e49b5e2e9e838a_tn',
    title: 'Indomie Goreng Rasa Rendang 85 gr, Isi 24',
    priceAfter: 'Rp 36.000',
    priceBefore: 'Rp 56.000',
    badgeContent: '20%',
    href: 'javascript:;'
  },
  {
    image:
      'https://img20.jd.id/Indonesia/s800x800_/nHBfsgAACAAAAAYACqXm5gABl6Q.jpg',
    title: 'Jual MIE SEDAAP - Mie Instan Cup Goreng Carton 85gr x 12 pcs',
    priceAfter: 'Rp 1.800.000',
    // priceBefore: 'Rp 56.000',
    badgeContent: '20%',
    href: 'javascript:;'
  }
];
/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
GridBoxList
---
~~~js
import { GridBoxList, GridBoxListSkeleton } from 'qasir/lib/wholesale';
~~~

or

~~~js
import { GridBoxList, GridBoxListSkeleton } from 'qasir/lib/wholesale/GridBoxList';
~~~

Examples
~~~js
<GridBoxList
    image='https://cf.shopee.co.id/file/2a6b7229695cdcfdd1e49b5e2e9e838a_tn'
    title='Indomie Goreng Rasa Rendang 85 gr, Isi 24'
    priceAfter='Rp 36.000'
    priceBefore='Rp 56.000'
    badgeContent='20%'
    isEmpty={false}
    stockNullLabel='Stock Habis'
    href='http://google.com' 
    onClick={() => {}} 
/>
~~~
Skeleton
~~~js
<GridBoxListSkeleton />
~~~
`;

storiesOf('wholesale|GridBoxList', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <div style={{ background: '#AAA', height: '100vh', padding: '30px 0' }}>
      <div style={{ maxWidth: 200, margin: 'auto' }}>
        <GridBoxList
          image={text(
            'image',
            'https://cf.shopee.co.id/file/2a6b7229695cdcfdd1e49b5e2e9e838a_tn'
          )}
          title={text('title', 'Indomie Goreng Rasa Rendang 85 gr, Isi 24')}
          priceAfter={text('priceAfter', 'Rp 36.000')}
          priceBefore={text('priceBefore', 'Rp 56.000')}
          badgeContent={text('badgeContent', '20%')}
          isEmpty={boolean('isEmpty', false)}
          stockNullLabel={text('stockNullLabel', 'Stock Habis')}
          href={text('href', 'http://google.com')}
        />
      </div>
    </div>
  ))
  .add('skeleton', () => (
    <div style={{ background: '#AAA', height: '100vh', padding: '30px 0' }}>
      <div style={{ maxWidth: 200, margin: 'auto' }}>
        <GridBoxListSkeleton />
      </div>
    </div>
  ))
  .add('with grid', () => (
    <div style={{ background: '#AAA', height: '100vh', padding: '30px 0' }}>
      <div style={{ maxWidth: 480, margin: 'auto' }}>
        <Row>
          {data.map((props, index) => (
            <Col
              key={index}
              span={12}
              style={{
                borderBottom: '1px solid #EEF0F2',
                borderRight: '1px solid #EEF0F2'
              }}
            >
              <GridBoxList {...props} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  ));
