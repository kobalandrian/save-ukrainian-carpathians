import React, { Component } from "react";
import {  withGoogleMap,  GoogleMap,  Marker,} from "react-google-maps";
import "../css/contacts.css"
 
const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={{ lat: 48.4594262, lng: 24.1441723 }}  
  >
    <Marker
      position={{ lat: 48.4594262, lng: 24.1441723 }}
    />
  </GoogleMap>
);

class Contact extends Component {
  render() {
    return (
      <div className="Contacts col-6">      
        <h2 className="title">Contacts</h2>
        
          <MapWithAMarker 
          containerElement={<div className="map-container"  />}
          mapElement={<div className="map" />}
          />
               
      </div>
    );
  }
}
 
export default Contact;