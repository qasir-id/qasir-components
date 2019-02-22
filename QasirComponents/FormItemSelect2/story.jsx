import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import FormItemSelect2 from './index';

const FormItem = Form.Item
class FormItemSelect2Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        valueMerchant: []
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
  handleMerchant = (query) => {
    const {getListMerchant} = this.props
    if (query.length >= 3) {
      const payload = {
        query: query,
      }
      getListMerchant(payload)
    }
  }
  render() {
    let valueMerchant = [
      {value: 1, label: 'Call'},
      {value: 2, label: 'Visit'},
      {value: 3, label: 'Complain'},
      {value: 4, label: 'Bug Report'},
      {value: 5, label: 'Activity'},
    ]
    const { activity, form, relation } = this.props
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row gutter={24}>
            <Col span={24}>
              <FormItemSelect2 
                form={form}
                label="Merchant"
                defaultValue={valueMerchant ? {value: valueMerchant.id, label: valueMerchant.label} : valueMerchant ? {value: valueMerchant.value, label: valueMerchant.label} : null}
                fieldName="relation_id"
                onsearch={this.handleMerchant.bind(this)}
                disabled= {relation ? true : false}
                message="Merchant wajib diisi"
                data={this.state.valueMerchant ? this.state.valueMerchant : []}/>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
FormItemSelect2Example = Form.create()(FormItemSelect2Example);
export default FormItemSelect2Example;