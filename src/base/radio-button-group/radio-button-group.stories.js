import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { select } from '@storybook/addon-knobs';
import RadioButtonGroup from './radio-button-group';
import RadioButton from '../radio-button';

const LabelContent = (
  <>
    <h3 style={{ fontSize: 14, color: '#474955', margin: 0 }}>Mandiri</h3>
    <span style={{ fontSize: 12, color: '#474955', marginBottom: 0 }}>
      0140397
    </span>
  </>
);

const values = {
  standard: 'standard',
  'default-selected': 'default-selected',
  disabled: 'disabled'
};

const props = {
  group: () => ({
    name: 'radio-button-group',
    valueSelected: select(
      'Value of the selected button (valueSelected in <RadioButtonGroup>)',
      values,
      'default-selected'
    ),
    onChange: action('onChange')
  }),
  radio: () => ({
    className: 'some-class',
    labelText: LabelContent
  })
};

const radioProps = props.radio();

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Radio Button Group
---
The example below shows a Radio Button Group component with a default selected Radio Button.
Although you can set the checked prop on the Radio Button, when using the Radio Button component
as a child of the Radio Button Group, either set the defaultSelected or valueSelected which will
automatically set the selected prop on the corresponding Radio Button component.

Use defaultSelected when you want a radio button to be selected initially, but don't need to set it
at a later time. If you do need to set it dynamically at a later time, then use the valueSelected property instead.

~~~js
import RadioButtonGroup from 'qasir/lib/base;
~~~
or
~~~js
import RadioButtonGroup from 'qasir/lib/base/radio-button-group;
~~~

Usage
~~~js
<RadioButtonGroup {...props}>
    <RadioButton {...childprops}/>
</RadioButtonGroup>
~~~
`;

storiesOf('form | RadioButtonGroup', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <RadioButtonGroup
      defaultSelected="default-selected"
      legend="Group Legend"
      {...props.group()}
    >
      <RadioButton value="standard" id="radio-1" {...radioProps} />
      <RadioButton value="default-selected" id="radio-2" {...radioProps} />
      <RadioButton value="disabled" id="radio-3" {...radioProps} disabled />
    </RadioButtonGroup>
  ));
