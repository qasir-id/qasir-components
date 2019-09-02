import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../modifiers/colors';

const { red } = colors;

const Input = styled.input `
    border: 1px solid #000;
    z-index: 1;
    cursor: pointer;
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
        <Input type="checkbox" onChange={onChange} checked={checked} autoFocus={autoFocus} disabled={disabled} {...props}/>
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