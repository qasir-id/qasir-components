import React from 'react';
import { Button, Row, Col, Menu, Icon, Radio, Checkbox } from 'antd';
import { storiesOf } from '@storybook/react';
const RadioButton = Radio.Button
const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group
const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];
const plainOptions = ['Apple', 'Pear', 'Orange'];
storiesOf('Data Entry', module)
.add('radio style', () => 
	<div style={{marginLeft:'15px'}}>
		<RadioGroup onChange={''} defaultValue="a">
      <RadioButton value="a">Hangzhou</RadioButton>
      <RadioButton value="b">Shanghai</RadioButton>
      <RadioButton value="c">Beijing</RadioButton>
      <RadioButton value="d">Chengdu</RadioButton>
    </RadioGroup>
  </div>
)
.add('radio group', () => 
  <div style={{marginLeft:'15px'}}>
    <h3 className="ex-title">Radio group</h3>
    <RadioGroup onChange={''} value={1}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </RadioGroup> 
  </div>
)
.add('radio group vertical', () => 
  <div style={{marginLeft:'15px'}}>
    <h3 className="ex-title">Radio group vertical</h3>
    <RadioGroup onChange={''} value={1}>
      <Radio style={radioStyle} value={1}>A</Radio>
      <Radio style={radioStyle} value={2}>B</Radio>
      <Radio style={radioStyle} value={3}>C</Radio>
      <Radio style={radioStyle} value={4}>D</Radio>
    </RadioGroup> 
  </div>
)
.add('checkbox', () => 
	<div style={{marginLeft:'15px'}}>
    <h3 className="ex-title">Basic</h3>
    <Checkbox>Checkbox</Checkbox>
  </div>
)
.add('checkbox group', () => 
  <div style={{marginLeft:'15px'}}>
    <h3 className="ex-title">Group</h3>
    <CheckboxGroup options={plainOptions} defaultValue={['Apple']} />
    <br /><br />
    <CheckboxGroup options={options} defaultValue={['Pear']} />
    <br /><br />
    <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} />
  </div>
);