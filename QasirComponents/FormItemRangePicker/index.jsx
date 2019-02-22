import React from 'react'
import PropTypes from 'prop-types'
import {Form, DatePicker} from 'antd'

const {RangePicker} = DatePicker
const FormItem = Form.Item

const FormItemRangePicker = ({styleCss, onCalendarChange, onChange, onOk}) => {
    return (
        <FormItem>
            <RangePicker 
                style={styleCss}
                onCalendarChange={onCalendarChange}
                onChange={onChange}
                onOk={onOk}
            />
        </FormItem>
    )
}

FormItemRangePicker.propTypes = {
    styleCss: PropTypes.object
}

export default FormItemRangePicker