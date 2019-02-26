import React from 'react'
import PropTypes from 'prop-types'
import {Form, Input} from 'antd'

const Search = Input.Search
const FormItem = Form.Item

const FormItemSearch = ({placeHolder, styleCss, onChange, onPressEnter}) => {
    return (
        <FormItem>
            <Search
                placeholder={placeHolder}
                style={styleCss}
                onChange={onChange}
                onPressEnter={onPressEnter}
            />
        </FormItem>
    )
}

FormItemSearch.propTypes = {
    placeHolder: PropTypes.string,
    styleCss: PropTypes.object
}

export default FormItemSearch