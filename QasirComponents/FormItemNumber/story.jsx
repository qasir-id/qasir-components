import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import FormItemNumber from './index';

const FormItem = Form.Item
class FormItemNumberExample extends React.Component {
  handleValueMobile(value){
    if (value.length >= 15) {
      const {checkMobileValidate} = this.props
      checkMobileValidate(value)
    }
  }
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
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItemNumber 
          form={form} 
          fieldName="mobile" 
          defaultValue={lead ? lead.mobile : ""} 
          label="Nomor Telepon"
          handleOnChange={this.handleValueMobile.bind(this)}
          validateCustom={errorMobile} 
          message="Nomor telepon wajib diisi"
          maxLength="15"
          minLength="10"
          limitCharacter={{max:15, messageMax:"Maksimal 15 Angka", min:10, messageMin:"Minimal 10 Angka"}}
          autoComplete="off"
        />
      </Form>
    )
  }
}
FormItemNumberExample = Form.create()(FormItemNumberExample);
export default FormItemNumberExample;