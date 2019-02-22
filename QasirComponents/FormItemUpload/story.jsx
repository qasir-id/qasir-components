import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import FormItemUpload from './index';

const FormItem = Form.Item
class FormItemUploadExample extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const { form, user } = this.props
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row >
            <Col span="20" offset={2}>
              <FormItemUpload
                imagePath={user != null ? user.image_path : ""}
                form={form}
                fieldName="image"
                defaultValue=""
                label="Foto User"
                />
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
FormItemUploadExample = Form.create()(FormItemUploadExample);
export default FormItemUploadExample;