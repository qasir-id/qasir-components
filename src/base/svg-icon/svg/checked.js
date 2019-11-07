import React from 'react';
import SvgIcon from '../svgicon';

function Checked(props) {
  return (
    <SvgIcon strokeWidth={0} {...props}>
      <path
        fillRule="evenodd"
        clipCule="evenodd"
        d="M1 12C1 5.928 5.928 1 12 1C18.072 1 23 5.928 23 12C23 18.072 18.072 23 12 23C5.928 23 1 18.072 1 12ZM5.70549 12.7056L9.29289 16.293C9.68342 16.6835 10.3166 16.6835 10.7071 16.293L18.295 8.70508C18.6848 8.31532 18.6859 7.68373 18.2975 7.29259C17.9072 6.89949 17.2717 6.89836 16.88 7.29008L10 14.1701L7.11549 11.2936C6.7257 10.9049 6.09474 10.9053 5.70549 11.2946C5.31586 11.6842 5.31586 12.3159 5.70549 12.7056Z"
      />
    </SvgIcon>
  );
}

export default Checked;
