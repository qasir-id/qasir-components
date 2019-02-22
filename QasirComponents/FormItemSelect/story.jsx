import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import FormItemSelect from './index';

const FormItem = Form.Item
class FormItemSelectExample extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    let valueSelectInteraction = [
        {value: 1, label: 'Call'},
        {value: 2, label: 'Visit'},
        {value: 3, label: 'Complain'},
        {value: 4, label: 'Bug Report'},
        {value: 5, label: 'Activity'},
    ]
    const { user, form } = this.props
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row gutter={24}>
            <Col span={24}>
              <FormItemSelect 
                form={form} 
                defaultValue={4} 
                fieldName="interaction" 
                label="Pilih Jenis Interaksi"
                valueSelect={valueSelectInteraction}
                styleCss={{marginBottom:'0', paddingLeft:'20', paddingRight:'20'}}
                message="Jenis interaksi wajib diisi"/>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
FormItemSelectExample = Form.create()(FormItemSelectExample);
export default FormItemSelectExample;