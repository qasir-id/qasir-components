import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import FormItemCheckbox from './index';

const FormItem = Form.Item
class FormItemCheckboxExample extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const { form, privileges } = this.props
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItemCheckbox 
          label="Hak Akses"
          form={form}
          defaultValue=''
          fieldName="priviliges_id"
          options={privileges}
          message="Hak akses wajib diisi"/>
      </Form>
    )
  }
}
FormItemCheckboxExample = Form.create()(FormItemCheckboxExample);
export default FormItemCheckboxExample;