import React from 'react'
import PropTypes from 'prop-types'
import { Badge as BadgeAntd } from 'antd'

const Badge = ({valueCount, styleCss}) => {
  return (
    <BadgeAntd count={valueCount} style={styleCss}/>    
  )
}

Badge.propTypes = {
    valueCount: PropTypes.string,
    styleCss: PropTypes.object
}

export default Badge
