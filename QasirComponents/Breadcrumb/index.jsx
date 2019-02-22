import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'


const BreadCrumb = ({items}) => {
  return (
    <Breadcrumb separator=">">
      {items.map(item =>
        <Breadcrumb.Item href={item.link}>{item.title}</Breadcrumb.Item>
      )}
    </Breadcrumb>
  )
}

BreadCrumb.defaultProps = {
  items: []
}

BreadCrumb.propTypes = {
  items: PropTypes.array
}

export default BreadCrumb
