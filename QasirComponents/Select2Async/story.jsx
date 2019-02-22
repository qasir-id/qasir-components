import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import Select2Async from './index';

const FormItem = Form.Item
class Select2AsyncExample extends React.Component {
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
            <Col span="22" offset={2}>
              <Select2Async
                form={form} 
                defaultValue="" 
                fieldName="select2async"
                label="select 2 async"
                />
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
Select2AsyncExample = Form.create()(Select2AsyncExample);
export default Select2AsyncExample;