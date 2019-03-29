/*global google*/
import React from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from 'react-google-maps';
// import Geocode from 'react-geocode';
// import Autocomplete from 'react-google-autocomplete';
import { Google_API_Key } from '../../tempkeys';
import { compose, withProps, withStateHandlers } from 'recompose';

const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

// const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
// Geocode.setApiKey(Google_API_Key);
// Geocode.enableDebug();

const GoogleMapping = compose(
    withProps({
      googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${Google_API_Key}&v=3.exp&libraries=geometry,drawing,places`,
      loadingElement: <div style={{ height: `100%`, width: '100%' }} />,
      containerElement: <div style={{ height: `400px`, width: '100%' }} />,
      mapElement: <div style={{ height: `100%`, width: '100%' }} />,
    }),
    withScriptjs,
    withGoogleMap
  )(props => {
    // console.log(props.coords)
    // const { lat } = props.coords; 
    // const a  = 'aaaa';
    // const b = 'bbb';
    // const c = 'ccc';
    if(!props.myLocation || !props.coords) return <div />;


    return (<GoogleMap
      defaultZoom={ 13 }
      defaultCenter={ props.myLocation }
    >
      { 
        props.isMarkerShown && <Marker 
          position = { props.myLocation } 
          onClick={ () => { 
                            const a = 'aaa'
                            props.onMarkerClick(a) 
                          } } 
        />
      }

      {
        props.coords.map(position => {
          const { lat, lng, userId } = position;
          return(
            <MarkerWithLabel key={ userId }
              // onClick={ (id) => { const b = 'bbb'; props.onMarkerClick(b) } }
              position={ { lat, lng } }
              labelAnchor={new google.maps.Point(0, 0)}
              labelStyle={{backgroundColor: "yellow", fontSize: "10px", padding: "5px"}}
            >
              <div>user: { userId } </div>
            </MarkerWithLabel>
          );
        })
      }

    </GoogleMap>);
  }
);

export default GoogleMapping;