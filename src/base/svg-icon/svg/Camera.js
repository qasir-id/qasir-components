/* eslint-disable prefer-template */
import React from 'react';
import SvgIcon from '../svgicon';

function Camera(props) {
  return (
    <SvgIcon
      strokeWidth={0}
      {...props}
      viewBox={`0 0 ${props.width + 'px'} ${props.height + 'px'}`}
    >
      <path
        fillRule="evenodd"
        d="M18 22.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 3a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M7.5 9h21a4.5 4.5 0 0 1 4.5 4.5v12a4.5 4.5 0 0 1-4.5 4.5h-21A4.5 4.5 0 0 1 3 25.5v-12A4.5 4.5 0 0 1 7.5 9zm0 3A1.5 1.5 0 0 0 6 13.5v12A1.5 1.5 0 0 0 7.5 27h21a1.5 1.5 0 0 0 1.5-1.5v-12a1.5 1.5 0 0 0-1.5-1.5h-21zm.947-4.894A2 2 0 0 1 10.237 6h3.527a2 2 0 0 1 1.789 1.106L16.5 9h-9l.947-1.894zM9 16.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
}

export default Camera;
