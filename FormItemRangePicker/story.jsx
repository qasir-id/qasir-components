import React from 'react';
import { Row, Col, DatePicker } from 'antd';
import FormItemRangePicker from './index';
class FormItemRangePickerExample extends React.Component {

  handleCalendarChange(dates) {
    const {changeFilterMerchant} = this.props
    let startDate = dates[0]
    if (dates instanceof Array && dates.length > 1) {
      let endDate = dates[1]
      changeFilterMerchant({
        'start_date': startDate.format("YYYY-MM-DD").toString(),
        'end_date': endDate.format("YYYY-MM-DD").toString(),
        'page': 1
      })
    } else {
      changeFilterMerchant({
        'start_date': startDate.format("YYYY-MM-DD").toString(),
        'end_date': startDate.format("YYYY-MM-DD").toString(),
        'page': 1
      })
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
    const { form } = this.props
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row gutter={24}>
            <Col span={24}>
              <FormItemRangePicker 
              styleCss={{ width: 250 }}
              onCalendarChange={this.handleCalendarChange.bind(this)}/>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
export default FormItemRangePickerExample;