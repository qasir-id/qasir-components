import React from 'react'
import PropTypes from 'prop-types'
import {Form, Input, Checkbox} from 'antd'

const FormItem = Form.Item
class FormItemCheckbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: props.defaultValue,
        }
    }

    onChange = (e) => {
        this.setState({
          checked: e.target.checked,
        });
      }

    componentWillReceiveProps(nextProps){
        if (nextProps.defaultValue != this.props.defaultValue){
            this.setState({checked:nextProps.defaultValue});
        }
    }

    render(){
    const {form, defaultValue, fieldName, label} = this.props
        return (
            <FormItem>
                {form.getFieldDecorator(fieldName, {
                    initialValue: defaultValue,
                    rules: [
                        {
                            required: true,
                            message: 'Please input'
                        }
                    ]
                })(
                <Checkbox 
                    style={{fontWeight: 'normal',fontFamily:'Roboto'}} 
                    checked={this.state.checked}
                    disabled={this.props.disabled}
                    onChange={this.onChange}
                    >{label}</Checkbox>
                )}
            </FormItem>
        )
    }
}

FormItemCheckbox.propTypes = {
    form: PropTypes.object,
    fieldName: PropTypes.string,
    checked: PropTypes.bool,
    checkBoxLabel: PropTypes.string
}

export default FormItemCheckbox