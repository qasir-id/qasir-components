/* eslint-disable no-script-url */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { text, boolean } from '@storybook/addon-knobs';
import { Row, Col } from '../../base/grid';
import CardCategory from './CardCategory';
import CardCategorySkeleton from './CardCategory.skeleton';

const data = [
  {
    image: 'https://cdn.happyfresh.com/spree/taxon_display_images/display_images/b70192358c157ff7be19454be314591c9695d627-mini.jpg?1530517281',
    title: 'Makanan Kering',
    badgeContent: 'Sale',
    href: 'javascript:;'
  },
  {
    image: 'https://cdn.happyfresh.com/spree/taxon_display_images/display_images/e2505cd15a631c7f4f9e0f38505db69b8655e3db-mini.jpg?1530517238n',
    title: 'Produk Olahan Susu & Telur',
    href: 'javascript:;'
  },
  {
    image: 'https://cdn.happyfresh.com/spree/taxon_display_images/display_images/3f32dbb81eeeeba9edb50e923e3027546a21c1b6-mini.jpg?1530516760',
    title: 'Minuman',
    href: 'javascript:;'
  },
  {
    title: 'Teh',
    href: 'javascript:;'
  },
  {
    image: 'https://cdn.happyfresh.com/spree/images/attachments/9e387ecd6255d9aef19eff880bdaea3935d47af8-small.jpg?1497859239',
    title: 'Madu, Sirup & Sari Buah',
    href: 'javascript:;'
  },
  {
    image:
      'https://cdn.happyfresh.com/spree/images/attachments/17b150acb4315ff52c3120f5a3c8f186cd997028-small.jpg?1448886165',
    title: 'Air Mineral, Soda & Air Berkarbonasi',
    href: 'javascript:;'
  }
];
/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
CardCategory
---
~~~js
import { CardCategory, CardCategorySkeleton } from 'qasir/lib/wholesale';
~~~

or

~~~js
import { CardCategory, CardCategorySkeleton } from 'qasir/lib/wholesale/CardCategory';
~~~

Examples
~~~js
<CardCategory
    image='https://cf.shopee.co.id/file/2a6b7229695cdcfdd1e49b5e2e9e838a_tn'
    title='Indomie Goreng Rasa Rendang 85 gr, Isi 24'
    badgeContent='20%'
    isEmpty={false}
    stockNullLabel='Stock Habis'
    href='http://google.com' 
    onClick={() => {}} 
/>
~~~
Skeleton
~~~js
<CardCategorySkeleton />
~~~
`;

storiesOf('wholesale|CardCategory', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <div style={{ background: '#AAA', height: '100vh', padding: '30px 0' }}>
      <div style={{ maxWidth: 200, margin: 'auto' }}>
        <CardCategory
          image={text(
            'image',
            'https://cdn.happyfresh.com/spree/taxon_display_images/display_images/e2505cd15a631c7f4f9e0f38505db69b8655e3db-mini.jpg?1530517238n'
          )}
          title={text('title', 'Olahan Susu')}
          badgeContent={text('badgeContent', '')}
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
        <CardCategorySkeleton />
      </div>
    </div>
  ))
  .add('with grid', () => (
    <div style={{ background: '#AAA', height: '100vh', padding: '30px 0' }}>
      <div style={{ maxWidth: 360, margin: 'auto' }}>
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
              <CardCategory {...props} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  ));
