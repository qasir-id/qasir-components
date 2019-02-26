import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import FormItemHidden from './index';

const FormItem = Form.Item
class FormItemHiddenExample extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const { form, business_types, lead, resultMap, loading, errorMobile } = this.props
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row gutter={24}>
            <Col span={24}>
              <FormItemHidden 
                form={form} 
                fieldName="mobile" 
                defaultValue={lead ? lead.mobile : ""} 
                label="Nomor Telepon"
              />
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
FormItemHiddenExample = Form.create()(FormItemHiddenExample);
export default FormItemHiddenExample;