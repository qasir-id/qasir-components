import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import FormItemCheckboxGroup from './index';

const FormItem = Form.Item
class FormItemCheckboxGroupExample extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    let privileges = ['Dashboard', 'Setting', 'Leads', 'Activity']
    const { group, form } = this.props
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row gutter={24}>
            <Col span={24}>
              <FormItemCheckboxGroup 
                label="Hak Akses"
                form={form}
                defaultValue={group ? group.list_privilege_id : []}
                fieldName="priviliges_id"
                options={privileges}
                message="Hak akses wajib diisi"/>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
FormItemCheckboxGroupExample = Form.create()(FormItemCheckboxGroupExample);
export default FormItemCheckboxGroupExample;