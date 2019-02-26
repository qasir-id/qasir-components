import React from 'react'
import NumericInput from '../NumericInput'
import PropTypes from 'prop-types'
import {Form} from 'antd'

const FormItem = Form.Item

class FormItemNumber extends React.Component {
    constructor(props) {
      super(props);
    }

    onChange = (value) => {
        if (this.props.handleOnChange) {
            return this.props.handleOnChange(value)
        }
    }

    render() {
        const { label, form, fieldName, defaultValue, validateCustom, message, limitCharacter, maxLength, disabled, autoComplete } = this.props

        let rules = []
        if(limitCharacter){
            rules = [
                { max: limitCharacter.max, message: limitCharacter.messageMax },
                { min: limitCharacter.min, message: limitCharacter.messageMin },
            ]
        }
        rules.push({ required: true, message: message })
    
        if(validateCustom){
            return (
                <FormItem label={label} validateStatus={validateCustom ? validateCustom.title : ""} help={validateCustom ? validateCustom.message : ""}>
                {form.getFieldDecorator(fieldName, {
                    initialValue: defaultValue,
                    rules: rules,
                })(<NumericInput autocomplete={autoComplete} maxLenght={maxLength} onChange={this.onChange} disabled={disabled} />)}
                </FormItem>
            )
        }else{
            return (
                <FormItem label={label}>
                {form.getFieldDecorator(fieldName, {
                    initialValue: defaultValue,
                    rules: rules
                })(<NumericInput autocomplete={autoComplete} maxLength={maxLength} onChange={this.onChange} disabled={disabled} />)}
                </FormItem>
            );
        }
    }
}

FormItemNumber.propTypes = {
    form: PropTypes.object,
    defaultValue: PropTypes.string,
    fieldName: PropTypes.string,
    label: PropTypes.string,
}

export default FormItemNumber