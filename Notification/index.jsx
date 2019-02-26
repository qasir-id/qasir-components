import React from 'react'
import PropTypes from 'prop-types'
import {Button, notification} from 'antd'

const Notification = (type, message, description) => {
    notification[type]({
      message: message,
      description: description,
    });
};

Notification.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string,
    description: PropTypes.string,
}

export default Notification