import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'

const FormItem = Form.Item
const FormItemPassword = ({form, initialValue ,fieldName}) => {
    return (
        <FormItem label="Password">
        {form.getFieldDecorator(fieldName, {
          initialValue: initialValue,
          rules: [{ required: true, message: 'Please input your password' }],
        })(<Input size="default" type="password" />)}
        </FormItem>
    )
}

FormItemPassword.propTypes = {
    form: PropTypes.object,
    initialValue: PropTypes.string,
    fieldName: PropTypes.string
}


export default FormItemPassword