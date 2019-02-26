import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import NumericInput from './index';

class NumericInputExample extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange = (value) => {
    if (this.props.handleOnChange) {
      return this.props.handleOnChange(value)
    }
  }
  render() {
    const { label, form, maxLength, disabled, autoComplete } = this.props
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row >
            <Col span="20" offset={2}>
              <NumericInput
                autocomplete={autoComplete} maxLenght={maxLength} onChange={this.onChange} disabled={disabled}
              />
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
NumericInputExample = Form.create()(NumericInputExample);
export default NumericInputExample;