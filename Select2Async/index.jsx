import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import PropTypes from 'prop-types'
import {Form} from 'antd'

const FormItem = Form.Item

class Select2Async extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
         inputValue: ''
    };

    filterSelective (inputValue) {
        return this.props.valueList(inputValue)
    }

    loadOptions(inputValue, callback){
        setTimeout(() => {
          callback(this.filterSelective(inputValue));
        }, 100);
    };

    render() {
    const { label, form, fieldName, defaultValue, disabled, message, onchange} = this.props
        return (
            <FormItem label={label}>
            {form.getFieldDecorator(fieldName, {
                initialValue: defaultValue,
                rules: [
                    {
                        required: true,
                        message: message,
                    }
                ]
            })(<AsyncSelect onChange={onchange} defaultValue={defaultValue} loadOptions={this.loadOptions.bind(this)} isDisabled={disabled} />)}
            </FormItem>
        );
    }
}

Select2Async.propTypes = {
    form: PropTypes.object,
    defaultValue: PropTypes.object,
    fieldName: PropTypes.string
}

export default Select2Async