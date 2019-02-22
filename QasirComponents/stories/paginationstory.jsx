import React from 'react';
import { Button, Row, Col, Pagination } from 'antd';
import { storiesOf } from '@storybook/react';
function setFilterChange (index) {
	return index
}
function changePage(page) {
    this
        .props
        .setFilterChange({'page': page})
}
function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>;
  } else if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}
storiesOf('Pagination', module)
.add('default', () => 
	<div>
		<Pagination
	        onChange={changePage.bind(this)}
	        defaultCurrent={1}
	        current={1}
	        total={30}
	    />
    </div>
)
.add('jumper', () => 
	<div>
		<Pagination
	        onChange={changePage.bind(this)}
	        defaultCurrent={1}
	        current={7}
	        total={140}
	    />
    </div>
)
.add('render', () => 
	<div>
		<Pagination
	        onChange={changePage.bind(this)}
	        defaultCurrent={1}
	        current={3}
	        total={140}
	        itemRender={itemRender}
	    />
    </div>
);