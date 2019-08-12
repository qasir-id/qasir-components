import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTable = styled.table`

`;

const Table = ({
    children,
    className,
    bordered,
    striped,
    narrow,
    hoverable,
    fullwidth,
    tableContainer,
    ...props
});

Table.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    bordered: PropTypes.bool,
    striped: PropTypes.bool,
    narrow: PropTypes.bool,
    hoverable: PropTypes.bool,
    fullwidth: PropTypes.bool,
    tableContainer: PropTypes.bool
}

Table.defaultProps = {    
    children: null,
    className: undefined,
    bordered: false,
    striped: false,
    narrow: false,
    hoverable: false,
    fullwidth: false,
    tableContainer: false
}

export default Table;