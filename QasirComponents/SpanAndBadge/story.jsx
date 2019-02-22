import React from 'react';
import { Form, Icon, Input } from 'antd';
import SpanAndBadge from './index';

const FormItem = Form.Item
class SpanAndBadgeExample extends React.Component {
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
              <SpanAndBadge
                form={form} 
                textValue="badgeandspan" 
                valueSpan= {1}
                valueCount= {4}
                label="select 2 async"
                />
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
SpanAndBadgeExample = Form.create()(SpanAndBadgeExample);
export default SpanAndBadgeExample;