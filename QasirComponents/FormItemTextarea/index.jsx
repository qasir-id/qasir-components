import React from 'react'
import PropTypes from 'prop-types'
import {Form, Input} from 'antd'

const FormItem = Form.Item
const { TextArea } = Input

const FormItemTextarea = ({form, defaultValue, fieldName, label, autoSize, disabled, required, message}) => {
    return (
        <FormItem label={label}>
            {form.getFieldDecorator(fieldName, {
                initialValue: defaultValue,
                rules: [
                    {
                        required: required,
                        message: message
                    }
                ]
            })(<TextArea autosize={autoSize} disabled={disabled} />)}
        </FormItem>
    )
}

FormItemTextarea.propTypes = {
    form: PropTypes.object,
    defaultValue: PropTypes.string,
    fieldName: PropTypes.string,
    autoSize: PropTypes.object
}

export default FormItemTextarea