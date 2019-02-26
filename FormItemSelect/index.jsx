import React from 'react'
import PropTypes from 'prop-types'
import {Form, Select} from 'antd'

const FormItem = Form.Item
const Option = Select.Option

const FormItemSelect = ({form, defaultValue, fieldName, styleCss,label, valueSelect, placeholder, onChange, message}) => {
    return (
        <FormItem label={label}>
            {form.getFieldDecorator(fieldName, {
            initialValue: defaultValue,
            rules: [
              { required: true, message: message },
            ],
          })(
            <Select style={styleCss} defaultValue={defaultValue} placeholder={placeholder} onChange={onChange}>
              {valueSelect ? valueSelect.map((item, index) => (<Option key={index} value={item.value}>{item.label}</Option>)) : (<Option key="" value="">""</Option>)}
            </Select>
          )}
        </FormItem>
    )
}

FormItemSelect.propTypes = {
    fieldName: PropTypes.required,
    fieldName: PropTypes.string,
    styleCss: PropTypes.object,
    defaultValue: PropTypes.string,
    valueSelect: PropTypes.array
}

export default FormItemSelect