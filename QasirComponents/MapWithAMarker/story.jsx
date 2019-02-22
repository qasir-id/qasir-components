import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import MapWithAMarker from './index';

class MapWithAMarkerExample extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const { form, latlong } = this.props
    const API_KEY_MAPS = 'AIzaSyAdQL6siQiw1chC5aFuWmMP_CoidghZVGI'
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row >
            <Col span="20" offset={2}>
              <MapWithAMarker
                googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+ API_KEY_MAPS +"&v=3.exp&libraries=geometry,drawing,places"}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100px`, width: `208px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                latlong={latlong}
              />
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
MapWithAMarkerExample = Form.create()(MapWithAMarkerExample);
export default MapWithAMarkerExample;