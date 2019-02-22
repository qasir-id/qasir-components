import React from 'react'
import PropTypes from 'prop-types'
import {Form, Input} from 'antd'

const FormItem = Form.Item

class FormItemAddon extends React.Component {

    onChange = (value) => {
        if (this.props.handleOnChange) {
            return this.props.handleOnChange(value.target.value)
        }
    }

    render(){
       const {form, fieldName, label, validateCustom, message, defaultValue, autoComplete} = this.props
        if (validateCustom) {
            return (
                <FormItem label={label} validateStatus={validateCustom ? validateCustom.title : ""} help={validateCustom ? validateCustom.message : ""}>
                    {form.getFieldDecorator(fieldName, {
                        initialValue: defaultValue,
                        rules: [
                            {
                                required: true,
                                message: message
                            }
                        ]
                    })(<Input autocomplete={autoComplete} addonAfter="qasir.id" onChange={this.onChange} />)}
                </FormItem>
            )
        }else{
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
                    })(<Input autocomplete={autoComplete} addonAfter="qasir.id" onChange={this.onChange} />)}
                </FormItem>
            )
        }
    }
}

FormItemAddon.propTypes = {
    form: PropTypes.object,
    defaultValue: PropTypes.string,
    fieldName: PropTypes.string
}

export default FormItemAddon