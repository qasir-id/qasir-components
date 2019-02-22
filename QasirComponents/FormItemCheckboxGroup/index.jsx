import React from 'react'
import PropTypes from 'prop-types'
import {Form,  Checkbox} from 'antd'

const FormItem = Form.Item
const CheckboxGroup = Checkbox.Group

const FormItemCheckboxGroup = ({form, defaultValue, fieldName, label, onChange, options, message}) => {
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
            })(
            <CheckboxGroup options={options} defaultValue={defaultValue} onChange={onChange} />
            )}
        </FormItem>
    )
}

FormItemCheckboxGroup.propTypes = {
    form: PropTypes.object,
    fieldName: PropTypes.string,
    defaultValue: PropTypes.array,
    checked: PropTypes.bool,
    options: PropTypes.array
}

export default FormItemCheckboxGroup