import React from 'react'
import PropTypes from 'prop-types'
import {Form, Input} from 'antd'

const FormItem = Form.Item

class FormItemEmail extends React.Component {

    handleValuechange = (value) => {
        if (this.props.handleOnChange) {
            return this.props.handleOnChange(value.target.value)
        }
    }

    render(){
        const { form, defaultValue, fieldName, label, validateCustom, message, required, autoComplete} = this.props

        if (validateCustom) {
              return (
                <FormItem label={label} validateStatus={validateCustom ? validateCustom.title : ""} help={validateCustom ? validateCustom.message : ""}>
                    {form.getFieldDecorator(fieldName, {
                        initialValue: defaultValue,
                        rules: [
                            {
                                type: 'email',
                                message: "Format E-Mail salah"
                            }, {
                                required: required,
                                message: message
                            }
                        ],
                    })(<Input autocomplete={autoComplete} size="default" onChange={this.handleValuechange}/>)}
                </FormItem>
                )
        } else {
          return (
                <FormItem label={label}>
                    {form.getFieldDecorator(fieldName, {
                        initialValue: defaultValue,
                        rules: [
                            {
                                type: 'email',
                                message: "Format E-Mail salah"
                            }, {
                                required: required,
                                message: message
                            }
                        ],
                    })(<Input autocomplete={autoComplete} size="default" onChange={this.handleValuechange}/>)}
                </FormItem>
            )
        }
    }
}

FormItemEmail.propTypes = {
    form: PropTypes.object,
    defaultValue: PropTypes.string,
    fieldName: PropTypes.string
}

export default FormItemEmail