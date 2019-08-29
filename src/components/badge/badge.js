import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

import CONSTANTS from '../../modifiers/constants';
import colors from '../../modifiers/colors';
// import { button } from '../../modifiers/variables';

const BadgeContainer = styled.div`
    position: relative;
`;

const StyledBadge = styled.div
        .attrs(({ disabled }) => ({ 
            disabled: disabled,
            className: 'qasir-badge'
        }))`
    border          : 1px solid #fff;
    border-radius   : 32px;
    padding         : ${ props => props.dot ? '4px' : '2px 4px' };
    margin          : 0;
    font-size       : 10px;
    font-weight     : bold;
    color           : #fff;
    background-color: ${ props => props.color ? props.color : colors.red };
    display         : inline-block;
    position        : absolute;
    left            : ${ props => props.dot ? 'calc(100% - 6px)' : 'calc(100% - 12px)' };
    top             : ${ props => props.dot ? '-4px' : '-8px'};
    z-index         : 9;
`;

export const Badge = ({ count, dot, color, showWhenZero }) => {
    return (
        <BadgeContainer>
            { (showWhenZero || count > 0) &&
                <StyledBadge dot={dot} color={color}>{ !dot && ( count > 99 ? '99+' : count ) }</StyledBadge>
            }
        </BadgeContainer>);
}

Badge.propTypes = {
    count: PropTypes.number,
    color: PropTypes.string,
    dot: PropTypes.bool,
    showWhenZero: PropTypes.bool,
}

Badge.defaultProps = {
    count: 0,
    color: colors.red,
    dot: false,
    showWhenZero: false,
}

export default Badge;
