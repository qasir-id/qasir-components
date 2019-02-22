import React from 'react';
import { Button, Row, Col, Menu, Icon } from 'antd';
import { storiesOf } from '@storybook/react';

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const theme = {}
const selectedKeys = ''
const openKeys = '1'
const menuItems = ['coba', 'pertama']

storiesOf('Menu', module)
.add('default', () => 
	<div>
		<Menu mode="inline" className="menuLeft__navigation">
            <Menu.Item key="1" onClick={''}>Home</Menu.Item>
            <Menu.Item key="1" onClick={''}>Aktivitas</Menu.Item>
        </Menu>
    </div>
)
.add('vertical Collapse', () => 
	<div>
		<Menu mode="inline" className="menuLeft__navigation">
            <Menu.Item key="1" onClick={''}>Home</Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
        </Menu>
    </div>
)
.add('horizontal', () => 
	<div>
		<Menu mode="horizontal">
            <Menu.Item key="1" onClick={''}>Home</Menu.Item>
            <Menu.Item key="2" onClick={''}>Merchants</Menu.Item>
        </Menu>
    </div>
)
.add('horizontal group', () => 
	<div>
		<Menu mode="horizontal">
            <Menu.Item key="1" onClick={''}>Home</Menu.Item>
            <Menu.Item key="2" onClick={''}>Merchants</Menu.Item>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
        </Menu>
    </div>
);