import React from 'react'
import PropTypes from 'prop-types'
import {Form, DatePicker} from 'antd'

const FormItem = Form.Item

const FormItemDatePicker = ({form, defaultValue, fieldName, label, onkeyup, message}) => {
    return (
        <FormItem label={label}>
            {form.getFieldDecorator(fieldName, {
                initialValue: defaultValue,
                rules: [
                    {
                        required: true,
                        message: message
                    }
                ]
            })(<DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="Select Time"
                label="Waktu"
                style={{marginBottom:'0'}}
            />)}
        </FormItem>
    )
}

FormItemDatePicker.propTypes = {
    form: PropTypes.object,
    defaultValue: PropTypes.string,
    fieldName: PropTypes.string
}

export default FormItemDatePicker