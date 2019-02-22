import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import FormItemTextarea from './index';

const FormItem = Form.Item
class FormItemTextareaExample extends React.Component {
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
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItemTextarea 
          form={form}
          fieldName="description"
          defaultValue=''
          label="Deskripsi"
          autoSize={{
          minRows: 4,
          maxRows: 6 }}
        />
      </Form>
    )
  }
}
FormItemTextareaExample = Form.create()(FormItemTextareaExample);
export default FormItemTextareaExample;