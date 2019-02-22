import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import FormItemPassword from './index';

const FormItem = Form.Item
class FormItemPasswordExample extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const { form } = this.props
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row >
            <Col span="20" offset={2}>
              <FormItemPassword
                form={form} 
                defaultValue="" 
                fieldName="pin" 
                message="PIN wajib diisi"
                />
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
FormItemPasswordExample = Form.create()(FormItemPasswordExample);
export default FormItemPasswordExample;