import React from 'react';
import { storiesOf } from '@storybook/react';

// import { text, boolean } from '@storybook/addon-knobs';
import Select from './select';

const Option = Select;

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Selectbox
---
This component extended from antd select, to view more details of props please visit antd select documentation

~~~js
import Select from 'qasir/lib/base';
~~~
or
~~~js
import Select from 'qasir/lib/base/select';
~~~

Usage
~~~js
const Option = Select;

<Select>
  <Option>option</Option>
</Select>
~~~
`;

storiesOf('form | Select', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <div style={{ maxWidth: 400 }}>
      <h3>Default Select</h3>
      <Select placeholder="Select a person">
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>

      <h3>MultiSelect</h3>
      <Select placeholder="Select a person" mode="multiple">
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled">Disabled</Option>
        <Option value="Yiminghe">yiminghe</Option>
        <Option value="jakarta">Jakarta</Option>
        <Option value="bandung">Bandung</Option>
        <Option value="aceh">Aceh</Option>
        <Option value="surabaya">Surabaya</Option>
      </Select>
    </div>
  ));
