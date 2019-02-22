import React from 'react'
import PropTypes from 'prop-types'
import {Form, Input} from 'antd'
import MapWithAMarker from '../MapWithAMarker'

const FormItem = Form.Item

const FormItemMapMarker = ({label, latlong}) => {
    return (
        <FormItem label={label}>
           <MapWithAMarker
            googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+process.env.API_KEY_MAPS+"&v=3.exp&libraries=geometry,drawing,places"}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100px`, width: `208px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            latlong={latlong}
            />
        </FormItem>
    )
}

FormItemMapMarker.propTypes = {
    label: PropTypes.string
}

export default FormItemMapMarker