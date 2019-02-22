import React from 'react';
import PropTypes from 'prop-types'
import {Form} from 'antd'
import { Select } from 'antd';

const Option = Select.Option;
const FormItem = Form.Item

class FormItemSelect2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    const { label, form, fieldName, defaultValue, disabled, message, onchange, onsearch, data} = this.props
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
            })(
            <Select
                showSearch
                labelInValue={defaultValue ? true : false}
                defaultValue={defaultValue}
                filterOption={false}
                notFoundContent="ketik tiga huruf"
                onSearch={onsearch}
                onChange={onchange}
                disabled={disabled}
            >
                {data.map(d => <Option key={d.id}>{d.label}</Option>)}
            </Select>
            )}
            </FormItem>
        );
    }
}

FormItemSelect2.propTypes = {
    form: PropTypes.object,
    defaultValue: PropTypes.object,
    fieldName: PropTypes.string
}

export default FormItemSelect2