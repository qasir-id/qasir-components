import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

import constants from '../../modifiers/constants';
import colors from '../../modifiers/colors';
import { button } from '../../modifiers/variables';

const { SIZES, ALIGN } = constants;
const { white, theme, black90 } = colors;

const StyledButton = styled.button.attrs(({ 
        disabled
    }) => ({    
        disabled: disabled           
    }))`    
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
    ${({ type }) => {
        return (
            (type == undefined || type == 'default') &&
            css`
                background-color: ${white};
                color: ${black90};
                border: 1px solid #EDECF3;
                &:hover {
                    border: 1px solid ${darken(0.1, '#EDECF3')};
                }
            `
        )
    }}  
    ${({ type }) => {
        return (
            type == 'primary' &&
            css`
                background-color: ${theme};
                color: ${white};
                border: none;
                &:hover {
                    background-color: ${darken(0.1, theme)};
                }
            `
        )
    }}
    ${({ type }) => {
        return (
            type == 'secondary' &&
            css`
                background-color: #F2F4F7;
                color: ${black90};
                border: none;
                &:hover {
                    background-color: ${darken(0.1, '#F2F4F7')};
                }
            `
        )
    }}    
    ${({ type }) => {
        return (
            type == 'link' &&
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
    disabled,
    onClick,
    href,
    ...props 
}) => {
    if (htmlType == 'button') {
        return (
            <StyledButton            
                type="button"
                className={className}
                htmlType={htmlType}        
                size={size}
                onClick={onClick}                                    
                {...props}
            >{children}</StyledButton>
        )
    }
    if (htmlType == 'a') {
        return (
            <StyledButtonLink            
                className={className}
                htmlType={htmlType}   
                size={size}       
                onClick={onClick}  
                href={href}
                role="button"
                {...props}
            >{children}</StyledButtonLink>
        )
    }    
    // if (htmlType == 'input') {
    //     return (
    //         <StyledButtonInput            
    //             className={className}
    //             htmlType={htmlType}   
    //             size={size}       
    //             onClick={onClick}  
    //             {...props}
    //         >{children}</StyledButtonInput>
    //     )
    // }    
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    type: PropTypes.string,    
    htmlType: PropTypes.oneOfType([
        PropTypes.oneOf(['a', 'button', 'span']),
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
    type: 'md',
    htmlType: 'button',
    size: undefined,
    href: undefined,
    disabled: false,
    onClick: () => null
}

export default Button;