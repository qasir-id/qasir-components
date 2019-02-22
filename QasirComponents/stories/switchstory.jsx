import React from 'react';
import { Button, Row, Col, Icon, Switch } from 'antd';
import { storiesOf } from '@storybook/react';
const state = {
  disabled: true,
}
const toggle = {
  disabled: true,
}
storiesOf('Switch', module)
.add('default', () => 
	<div>
    <h3 className="ex-title">Basic</h3>
    <Switch defaultChecked />
  </div>
)
.add('disable', () => 
	<div>
    <Switch disabled={state.disabled} defaultChecked />
    <br /><br/>
    <Button type="primary" onClick={toggle}>Toggle disabled</Button>
  </div>
)
.add('loading', () => 
  <div>
    <Switch loading defaultChecked />
    <Switch className="ml20" size="small" loading />
  </div>
);