import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../modifiers/colors';

const { black } = colors;

const StyledTable = styled.table`
    width: 100%;
    margin-bottom: 1rem;
    color: ${black};
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
    columns,
    dataSource,
    ...props
}) => {
    return (
        <StyledTable>
            {children}
        </StyledTable>
    );
}

Table.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    bordered: PropTypes.bool,
    striped: PropTypes.bool,
    narrow: PropTypes.bool,
    hoverable: PropTypes.bool,
    fullwidth: PropTypes.bool,
    tableContainer: PropTypes.bool,
    columns: PropTypes.array,
    dataSource: PropTypes.array,
    style: PropTypes.shape({})
}

Table.defaultProps = {    
    children: null,
    className: undefined,
    bordered: false,
    striped: false,
    narrow: false,
    hoverable: false,
    fullwidth: false,
    tableContainer: false,
    columns: null,
    dataSource: null,
    style: undefined
}

export default Table;