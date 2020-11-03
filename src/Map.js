import { console, parseFloat } from 'google-maps-react/dist/lib/windowOrGlobal';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from 'react-google-maps';
  
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: parseFloat(props.marker.lat), lng: parseFloat(props.marker.lng) }}
    >
      <Marker
        position={{ lat: parseFloat(props.marker.lat), lng: parseFloat(props.marker.lng) }}
      />
    </GoogleMap>
  ));
  export default MapWithAMarker;
  
  