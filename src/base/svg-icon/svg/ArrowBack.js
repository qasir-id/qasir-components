import React from 'react';
import SvgIcon from '../svgicon';

function ArrowBack(props) {
  return (
    <SvgIcon strokeWidth={0} {...props} viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10C20 9.44771 19.5523 9 19 9H3.83L10.7104 2.11961C11.1019 1.72811 11.1004 1.09262 10.7075 0.702509C10.3166 0.314339 9.68494 0.315064 9.29539 0.704612L0.707106 9.29289C0.316582 9.68342 0.316583 10.3166 0.707107 10.7071L9.29477 19.2948C9.68426 19.6843 10.3157 19.6843 10.7052 19.2948C11.0945 18.9055 11.0947 18.2743 10.7057 17.8848L3.83 11H19C19.5523 11 20 10.5523 20 10Z"
      />
    </SvgIcon>
  );
}

export default ArrowBack;
