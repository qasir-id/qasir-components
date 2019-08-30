import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

import CONSTANTS from '../../modifiers/constants';
import colors from '../../modifiers/colors';
import { button } from '../../modifiers/variables';

const { SIZES, ALIGN } = CONSTANTS;
const { white, theme, black } = colors;

const StyledButton = styled.button.attrs(props => console.log(props))`    
    background-color: ${white};
    color: ${black};
    border: 1px solid #EDECF3;        
    border-radius: 4px;
    outline: none;    
    cursor: pointer;
    height: ${({ size }) => {      
        const { SMALL, MEDIUM, LARGE, EXTRALARGE } = SIZES;  
        switch (size) {
            case SMALL:
                return button.small;              
            case MEDIUM:
                return button.medium;  
            case LARGE:
                return button.large;   
            case EXTRALARGE:
                return button.extralarge;                  
            default: 
                return button.medium; 
        }
    }};    
    font-size: 14px;        
    padding: 0 14px;
    display: inline-flex;    
    justify-content: ${({ textAlign }) => {      
        const { LEFT, CENTER, RIGHT } = ALIGN;  
        switch (textAlign) {
            case LEFT:
                return LEFT;              
            case CENTER:
                return CENTER;  
            case RIGHT:
                return RIGHT;                           
            default: 
                return LEFT; 
        }        
    }};       
    &:hover {
        border: 1px solid ${darken(0.1, '#EDECF3')};
    }
    ${({ primary }) => {
        return (
            primary &&
            css`
                background-color: ${theme};
                color: ${white};
                border: 1px solid ${theme};
                &:hover {
                    background-color: ${darken(0.1, theme)};
                }
            `
        )
    }}
    ${({ secondary }) => {
        return (
            secondary &&
            css`
                background-color: #F2F4F7;
                color: ${black};
                border: 1px solid #F2F4F7;
                &:hover {
                    background-color: ${darken(0.1, '#F2F4F7')};
                }
            `
        )
    }}    
    ${({ link }) => {
        return (
            link &&
            css`
                background-color: ${white};
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

const StyledButtonInput = styled.input`
    border-radius: 5px;    
`;

const Button = ({     
    children,
    className,
    htmlType,          
    size,               
    ...props 
}) => {    
    return (
        <StyledButton            
            type="button"            
            htmlType={htmlType}        
            size={size}                                             
            {...props}
        >{children}</StyledButton>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    type: PropTypes.string,    
    htmlType: PropTypes.oneOfType([
        PropTypes.oneOf(['a', 'button', 'input']),
        PropTypes.func,
    ]),            
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    href: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func    
}

Button.defaultProps = {    
    children: null,
    className: undefined,
    style: undefined,
    type: 'button',
    htmlType: 'button',
    size: undefined,
    href: undefined,
    disabled: false,
    onClick: () => null
}

export default Button;