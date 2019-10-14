import React from 'react';
import SvgIcon from '../svgicon';

function Menu(props) {
  return (
    <SvgIcon strokeWidth={0} {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M4 6C3.45 6 3 5.55 3 5C3 4.45 3.45 4 4 4H20C20.55 4 21 4.45 21 5C21 5.55 20.55 6 20 6H4ZM20 20H4C3.45 20 3 19.55 3 19C3 18.45 3.45 18 4 18H20C20.55 18 21 18.45 21 19C21 19.55 20.55 20 20 20Z" />
    </SvgIcon>
  );
}

export default Menu;
