import React from 'react';
import { Button, Row, Col, Icon, Dropdown, Menu } from 'antd';
import { storiesOf } from '@storybook/react';
import './style.scss'
function handleBack () {
  this.props.history.goBack()
}
const href="http://localhost:6007/?selectedKind=Form&selectedStory=item%20input&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel"
function menu(record) {
    return (
        <Menu>
            <Menu.Item key="1" onClick={''}>Ubah Aktivitas</Menu.Item>
            <Menu.Item key="2" onClick={''}>Detail Aktivitas</Menu.Item>
        </Menu>
    )
}
storiesOf('Button', module)
.add('gray', () => 
  <div>
    <Row gutter={24}>
      <Col span={24}>
        <Button className='button-gray' onClick={handleBack} >Batal</Button>
      </Col>
    </Row>
  </div>
)
.add('orange', () => 
  <Button className='button-orange' htmlType="submit">Simpan</Button>
)
.add('none border', () => 
  <button className="utils__title--btn-export" onClick={''}>
      <span className="font-size-14 text-success" style={{borderRight:'none'}}><i className="icmn-upload3"></i> Export Data ke Excel</span>
  </button>
)
.add('dropdown action', () => 
  <Dropdown overlay={menu('record')}>
      <Button style={{color:"#e34225", borderColor: "#e34225", fontWeight: "500"}}>
          Actions
          <Icon type="down"/>
      </Button>
  </Dropdown>
)
.add('custom', () => 
  <ul>
    <li className="range-button custom-button-filter"> <a href={href} onClick={''}>Reset</a></li>
    <li className="range-button custom-button-filter"> <a href="" onClick={''}>Apply</a></li>
  </ul>
);