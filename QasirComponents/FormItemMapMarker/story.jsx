import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import FormItemMapMarker from './index';

const FormItem = Form.Item
class FormItemMapMarkerExample extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const { form, business_types, lead, resultMap, loading, errorMobile} = this.props
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row >
            <Col span="20" offset={2}>
              <FormItemMapMarker
                  label="Peta Koordinat"
                  latlong={resultMap ? { lat: parseFloat(resultMap.latitude), lng: parseFloat(resultMap.longitude) } : { lat: -6.270042, lng: 106.80789 }}
              />
              <p>{resultMap ? resultMap.map_address : null}</p>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
FormItemMapMarkerExample = Form.create()(FormItemMapMarkerExample);
export default FormItemMapMarkerExample;