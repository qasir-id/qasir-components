import React from 'react'
import PropTypes from 'prop-types'
import {Form, Input} from 'antd'
import './style.scss'

const FormItem = Form.Item

const FormItemSearchClick = ({placeHolder, styleCss, onChange, onPressEnter, onClick}) => {
    return (
            <FormItem>
                <Input 
                    size="default" 
                    placeholder={placeHolder}
                    style={styleCss}
                    onChange={onChange}
                    onPressEnter={onPressEnter} 
                />
                <button
                    type="button"
                    className="icmn-search button--icon-search"
                    onClick={onClick}
                ></button>
            </FormItem>
    )
}

FormItemSearchClick.propTypes = {
    placeHolder: PropTypes.string,
    styleCss: PropTypes.object
}

export default FormItemSearchClick