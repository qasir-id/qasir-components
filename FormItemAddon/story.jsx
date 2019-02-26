import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import FormItemAddon from './index';

const FormItem = Form.Item
class FormItemAddonExample extends React.Component {
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
        <FormItemAddon 
          form={form} 
          defaultValue= "" 
          fieldName="business_name" 
          label="Nama Usaha" 
          message="Nama usaha wajib diisi"
          limitCharacter={{max:17, messageMax:"Maksimal 17 Karakter", min:5, messageMin:"Minimal 5 Karakter"}}
          autoComplete="off"
        />
      </Form>
    )
  }
}
FormItemAddonExample = Form.create()(FormItemAddonExample);
export default FormItemAddonExample;