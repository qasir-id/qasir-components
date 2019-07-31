import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button.attrs(({ disabled }) => ({    
        disabled: disabled       
    }))`
    border-radius: 5px;
    background-color: ${props => (props.secondary ? 'red' : '#a1cdf1')};
    color: #fff;
    padding: 10px 15px;
    font-size: ${props => {
        if (props.big) return '20px'
        return '16px'
    }};
    outline: none;
    border: none;
    cursor: pointer;
    margin: 15px;
    border: 2px solid ${props => (props.secondary ? '#F7A072' : '#a1cdf1')};
    ${props => {
        return (
            props.inverse &&
            css`
                background-color: #fff;
                color: #a1cdf1;
            `
        )
    }}
`

const Button = ({     
    disabled,
    htmlType = 'button', 
    secondary, 
    big, 
    inverse, 
    ...props 
}) => {
    return (
        <StyledButton
            // disabled={disabled}
            // htmlType={htmlType}
            secondary={secondary}
            big={big}
            inverse={inverse}
            {...props}
        />
    )
}

Button.propTypes = {
    disabled: PropTypes.bool,
    htmlType: PropTypes.string
}

export default Button;