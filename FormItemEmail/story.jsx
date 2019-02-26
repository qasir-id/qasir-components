import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import FormItemEmail from './index';

const FormItem = Form.Item
class FormItemEmailExample extends React.Component {
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
          <Row gutter={24}>
            <Col span={24}>
              <FormItemEmail 
                form={form} 
                defaultValue="" 
                fieldName="username" 
                label="email" 
                message="Username wajib diisi"
                required="true"
                autoComplete="on"/>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
FormItemEmailExample = Form.create()(FormItemEmailExample);
export default FormItemEmailExample;