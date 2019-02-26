import React from 'react';
import { Button, Row, Col, Tabs } from 'antd';
import { storiesOf } from '@storybook/react';

const TabPane = Tabs.TabPane;
storiesOf('Tabs', module)
.add('default', () => 
	<Tabs defaultActiveKey="1">
	    <TabPane tab="Merchants" key="1">
	        Content of Tab Pane Merchants
	        <br/>
	    </TabPane>
	    <TabPane tab="Leads" key="2">
	        Content of Tab Pane Leads
	        <br/>
	    </TabPane>
	</Tabs>
)
.add('card', () => 
	<Tabs defaultActiveKey="1" type="card">
	    <TabPane tab="Merchants" key="1">
	        Content of Tab Pane Merchants
	        <br/>
	    </TabPane>
	    <TabPane tab="Leads" key="2">
	        Content of Tab Pane Leads
	        <br/>
	    </TabPane>
	</Tabs>
);