import React from 'react'
import PropTypes from 'prop-types'
import ReactCodeInput from 'react-code-input'
import {Form} from 'antd'

const FormItem = Form.Item

const FormItemInputVerification = ({form, defaultValue, fieldName, label, onChange}) => {
    return (
        <FormItem label={label}>
            {form.getFieldDecorator(fieldName, {
                initialValue: defaultValue,
                rules: [
                    {
                        required: false,
                    }
                ]
            })(<ReactCodeInput type='number' fields={4} onChange={onChange} autoFocus />)}
        </FormItem>
    )
}

FormItemInputVerification.propTypes = {
    form: PropTypes.object,
    defaultValue: PropTypes.string,
    fieldName: PropTypes.string
}

export default FormItemInputVerification