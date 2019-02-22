import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import FormItemUploadMultiple from './index';

const FormItem = Form.Item
class FormItemUploadMultipleExample extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const { form, user, activity } = this.props
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row >
            <Col span="20" offset={2}>
              <FormItemUploadMultiple
                form={form} 
                defaultValue="" 
                fieldName="images"
                fileImages={activity ? activity.images : []}
                label="upload multiple"
                />
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
FormItemUploadMultipleExample = Form.create()(FormItemUploadMultipleExample);
export default FormItemUploadMultipleExample;