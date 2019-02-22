import React from 'react'
import PropTypes from 'prop-types'
import {Form} from 'antd'

const FormItem = Form.Item

const FormItemHidden = ({form, defaultValue, fieldName, label}) => {
    return (
        <FormItem label={label}>
            {form.getFieldDecorator(fieldName, {
                initialValue: defaultValue,
                rules: [
                    {
                        required: false,
                        message: 'Please input'
                    }
                ]
            })(<input type="hidden"/>)}
        </FormItem>
    )
}

FormItemHidden.propTypes = {
    form: PropTypes.object,
    defaultValue: PropTypes.string,
    fieldName: PropTypes.string
}

export default FormItemHidden