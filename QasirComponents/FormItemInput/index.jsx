import React from 'react'
import PropTypes from 'prop-types'
import {Form, Input} from 'antd'

const FormItem = Form.Item

const FormItemInput = ({form, defaultValue, fieldName, label, onkeyup, message, limitCharacter,autoComplete}) => {

    let rules = []
    if(limitCharacter){
        rules = [
            { max: limitCharacter.max, message: limitCharacter.messageMax },
            { min: limitCharacter.min, message: limitCharacter.messageMin },
        ]
    }
    rules.push({ required: true, message: message })

    return (
        <FormItem label={label}>
            {form.getFieldDecorator(fieldName, {
                initialValue: defaultValue,
                rules: rules
            })(<Input autocomplete={autoComplete} size="default" onChange={onkeyup}/>)}
        </FormItem>
    )
}

FormItemInput.propTypes = {
    form: PropTypes.object,
    defaultValue: PropTypes.string,
    fieldName: PropTypes.string
}

export default FormItemInput