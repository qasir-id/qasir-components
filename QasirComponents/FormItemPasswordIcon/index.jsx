import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'
import NumericInput from '../NumericInput'

const FormItem = Form.Item


class FormItemPasswordIcon extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        type: 'password',
        value: ''
      }
      this.showHide = this.showHide.bind(this);
    }

    showHide(e){
      e.preventDefault();
      e.stopPropagation();
      this.setState({
        type: this.state.type === 'input' ? 'password' : 'input'
      })
    }

    render(){
      const { label, form, fieldName, initialValue, required, message} = this.props
      let rules = [
        { max: 6, message: 'Maksimal 6 angka' },
        { min: 6, message: 'Minimal 6 angka' },
      ]
      if (required) {
        rules.push({ required: true, message: message })
      }
      return(
          <div>
          <FormItem label={label}>
              {form.getFieldDecorator(fieldName, {
              initialValue: initialValue,
              rules: rules,
              })(<NumericInput type={this.state.type} />)}
          </FormItem>
          <span className={this.state.type === 'input' ? 'fa fa-fw fa-eye' : 'fa fa-eye-slash'} onClick={this.showHide}></span>
          </div>
      )
    }
  }

  FormItemPasswordIcon.propTypes = {
    form: PropTypes.object,
    initialValue: PropTypes.string,
    fieldName: PropTypes.string
}

export default FormItemPasswordIcon