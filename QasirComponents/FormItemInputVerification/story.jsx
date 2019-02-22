import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import FormItemInputVerification from './index';
import '../stories/style.scss'

const FormItem = Form.Item
class FormItemInputVerificationExample extends React.Component {
  handleStoreVerification(value){
    if(value.length === 4){
      const {user, storeVerification} = this.props
      let payload = {
        user_id: user.id,
        authkey: parseInt(value)
      }
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
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row >
            <Col span="20" offset={2}>
              <FormItemInputVerification 
                form={form} 
                fieldName="code" 
                defaultValue=""
                label="verifikasi"
                onChange={this.handleStoreVerification.bind(this)}
                style="width:40px;"
              />
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
FormItemInputVerificationExample = Form.create()(FormItemInputVerificationExample);
export default FormItemInputVerificationExample;