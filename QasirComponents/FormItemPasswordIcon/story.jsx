import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import FormItemPasswordIcon from './index';

const FormItem = Form.Item
class FormItemPasswordIconExample extends React.Component {
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
              <FormItemPasswordIcon
                required= "true"
                form={form} 
                defaultValue="" 
                fieldName="pin" 
                label="Pin 6 Angka"
                message="PIN wajib diisi"
                />
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
FormItemPasswordIconExample = Form.create()(FormItemPasswordIconExample);
export default FormItemPasswordIconExample;