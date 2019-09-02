import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../modifiers/colors';

const { red } = colors;

const Wapper = styled.label`
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,0.65);
    font-size: 14px;
    line-height: 1.5;
    list-style: none;
    display: inline-block;
    line-height: unset;
    cursor: pointer;
`;

const Span = styled.span `
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,0.65);
    font-size: 14px;
    line-height: 1.5;
    list-style: none;
    position: relative;
    top: -0.09em;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    cursor: pointer;
`;

const Label = styled.span `
    padding-right: 8px;
    padding-left: 8px;
`;
const SpanInner = styled.span `
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    background-color: ${props => props.checked == true ? "#1890ff" : "#fff" };
    border: 1px solid ${props => props.checked == true ? "#1890ff" : "#d9d9d9"};
    border-radius: 2px;
    border-collapse: separate;
    -webkit-transition: all .3s;
    transition: all .3s;
    ${Wapper}:hover &{
        border-color: #1890ff;
    }
    ${Wapper}:focus &{
        border-color: #1890ff; 
    }
    ${props => props.checked === true} {
        &:after {
            position: absolute;
            display: table;
            border: 2px solid #fff;
            border-top: 0;
            border-left: 0;
            -webkit-transform: rotate(45deg) scale(1) translate(-50%, -50%);
            -ms-transform: rotate(45deg) scale(1) translate(-50%, -50%);
            transform: rotate(45deg) scale(1) translate(-50%, -50%);
            opacity: 1;
            -webkit-transition: all .2s cubic-bezier(.12, .4, .29, 1.46) .1s;
            transition: all .2s cubic-bezier(.12, .4, .29, 1.46) .1s;
        }
    }
    &:after {
        position: absolute;
        top: 50%;
        left: 21%;
        display: table;
        width: 5.71428571px;
        height: 9.14285714px;
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
        -webkit-transform: rotate(45deg) scale(0) translate(-50%, -50%);
        -ms-transform: rotate(45deg) scale(0) translate(-50%, -50%);
        transform: rotate(45deg) scale(0) translate(-50%, -50%);
        opacity: 0;
        -webkit-transition: all .1s cubic-bezier(.71, -0.46, .88, .6),opacity .1s;
        transition: all .1s cubic-bezier(.71, -0.46, .88, .6),opacity .1s;
        content: ' ';
    }
`;

const Input = styled.input `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
`;

const Checkbox = ({
    children,
    autoFocus,
    checked,
    disabled,
    onChange,
    ...props
}) => {
    return (
        <Wapper>
            <Span>
                <Input type="checkbox" onChange={onChange} checked={checked} autoFocus={autoFocus} disabled={disabled} {...props}/>
                <SpanInner checked={checked}></SpanInner>
            </Span>
            <Label>{children}</Label>
        </Wapper>
    );
}

Checkbox.propTypes = {
    children: null,
    autoFocus: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
}

Checkbox.defaultProps = {    
    children: null,
    autoFocus: false,
    checked: false,
    disabled: false,
    onChange: () => null
}

export default Checkbox;