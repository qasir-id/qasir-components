import React from 'react'
const { compose } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");

const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.latlong}
    center={props.latlong}
  >
    <Marker
      position={props.latlong}
    />
  </GoogleMap>
);

export default MapWithAMarker
