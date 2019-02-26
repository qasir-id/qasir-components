import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import FormItemDatePicker from './index';

const FormItem = Form.Item
class FormItemDatePickerExample extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const { activity, form } = this.props
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row gutter={24}>
            <Col span={24}>
              <FormItemDatePicker 
                form={form} 
                defaultValue={activity ? moment(activity.schedule_time, dateFormat) : null}
                fieldName="schedule_time" 
                label="Waktu"
                message="Waktu wajib diisi"/>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
FormItemDatePickerExample = Form.create()(FormItemDatePickerExample);
export default FormItemDatePickerExample;