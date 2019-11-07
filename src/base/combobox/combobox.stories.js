import React from 'react';
import { storiesOf } from '@storybook/react';
import Combobox from './combobox';

const options = [
  { name: 'Vixal 800 ml', value: '01' },
  { name: 'Rinso Matic 1.6 ml', value: '02' },
  { name: 'Selsun Shampo 120 ml', value: '03' },
  { name: 'Kapur bagus isi 5 pcs', value: '04' },
  {
    type: 'group',
    name: 'Minuman',
    items: [
      { name: 'Coca-Cola Cans 8 x 200mL', value: 'cola' },
      { name: 'Coca-Cola Drink Cans 375mL 24 Pack', value: 'cola 2' },
      { name: 'Coca-Cola Diet Cans 8 x 200mL', value: 'cola 3' },
      { name: 'Coca-Cola No Sugar Cans 375mL 30 Pack', value: 'cola 4' },
      { name: 'Coca-Cola Diet Cans 8 x 200mL', value: 'cola 5' }
    ]
  }
];

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Component
---
`;

storiesOf('base|Combobox', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <div style={{ width: 767, padding: '30px' }}>
      <Combobox
        options={options}
        placeholder="Cari Produk"
        name="produk"
        label="Nama Produk"
        height={100}
      />
    </div>
  ));
