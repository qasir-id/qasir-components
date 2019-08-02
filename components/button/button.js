import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

const StyledButton = styled.button.attrs(({ disabled }) => ({    
        disabled: disabled       
    }))`    
    border-radius: 4px;
    outline: none;    
    cursor: pointer;
    height: ${({ size }) => {
        if (size == 'sm') {
            return '28px';
        } else if (size == 'md') {
            return '36px';
        } else if (size == 'lg') {
            return '48px';
        } else if (size == 'xl') {
            return '60px';
        }
        return '36px';     
    }};    
    font-size: 14px;        
    padding: 0 14px;
    display: inline-flex;
    align-items: center;
    justify-content: ${({ textAlign }) => {
        if (textAlign == 'left') {
            return 'left';
        } else if (textAlign == 'center') {
            return 'center';
        } else if (textAlign == 'right') {
            return 'right';
        } 
        return 'left';     
    }};   
    ${({ btnType }) => {
        return (
            btnType == undefined &&
            css`
                background-color: #ffffff;
                color: #474955;
                border: 1px solid #EDECF3;
                &:hover {
                    border: 1px solid ${darken(0.1, '#EDECF3')};
                }
            `
        )
    }}  
    ${({ btnType }) => {
        return (
            btnType == 'primary' &&
            css`
                background-color: #F04B32;
                color: #ffffff;
                border: none;
                &:hover {
                    background-color: ${darken(0.1, '#F04B32')};
                }
            `
        )
    }}
    ${({ btnType }) => {
        return (
            btnType == 'secondary' &&
            css`
                background-color: #F2F4F7;
                color: #474955;
                border: none;
                &:hover {
                    background-color: ${darken(0.1, '#F2F4F7')};
                }
            `
        )
    }}    
    ${({ btnType }) => {
        return (
            btnType == 'link' &&
            css`
                background-color: #ffffff;
                color: #007bff;
                border: none;
                &:hover {
                    text-decoration: underline;
                }
            `
        )
    }}    
`;
const StyledButtonLink = styled.a`
    border-radius: 5px;    
`;

const Button = ({     
    disabled,
    htmlType = 'button',  
    size = 'md',   
    ...props 
}) => {
    if (htmlType == 'button') {
        return (
            <StyledButton            
                type="button"
                htmlType={htmlType}        
                size={size}                                    
                {...props}
            />
        )
    }
    if (htmlType == 'a') {
        return (
            <StyledButtonLink            
                htmlType={htmlType}   
                size={size}         
                {...props}
            />
        )
    }    
}

Button.propTypes = {
    disabled: PropTypes.bool,
    htmlType: PropTypes.string,
    size: PropTypes.string,
    textAlign: PropTypes.string
}

export default Button;