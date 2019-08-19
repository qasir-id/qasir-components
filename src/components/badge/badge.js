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
        .attrs(({ disabled }) => ({ disabled: disabled }))`
    border: 1px solid #ef5656;
    border-radius: 32px;
    padding: ${ props => props.dot ? '4px' : '2px 4px' };
    margin: 0;
    font-size: 10px;
    font-weight: bold;
    color: #fff;
    background-color: ${ colors.red };
    display: inline-block;
    position: absolute;
    left: ${ props => props.dot ? 'calc(100% - 6px)' : 'calc(100% - 12px)' };
    top: ${ props => props.dot ? '-4px' : '-8px'};
    z-index: 9;
`;

const Badge = ({ count, dot }) => {
    return (
        <BadgeContainer>
            <StyledBadge dot={dot}>{ count > 99 ? '99+' : count }</StyledBadge>
        </BadgeContainer>);
}

Badge.propTypes = {
    color: PropTypes.string,
    count: PropTypes.number.isRequired,
    dot: PropTypes.bool
}

Badge.defaultProps = {
    color: colors.red,
    dot: false
}

export default Badge;
