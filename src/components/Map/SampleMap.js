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

const MyMapComponent = compose(
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
    const { lat } = props.coords; 
    const a  = 'aaaa';
    const b = 'bbb';
    const c = 'ccc';
    if(!props.coords.lat || !props.coords.lng) return <div></div>;
    return (<GoogleMap
      defaultZoom={ 15 }
      defaultCenter={ props.coords }
    >
      { props.isMarkerShown && <Marker position={ props.coords } onClick={ () => { 
        const a = 'aaa'
        props.onMarkerClick(a) } } />}

      <MarkerWithLabel
      onClick={ (id) => { const b = 'bbb'; props.onMarkerClick(b) } }
      position={ { lat: 43.4800, lng:  -79.71000 } }
      labelAnchor={new google.maps.Point(0, 0)}
      labelStyle={{backgroundColor: "yellow", fontSize: "10px", padding: "5px"}}
    >
      <div>Hello There!</div>
    </MarkerWithLabel>

    <MarkerWithLabel
    onClick={ () => { const c = 'ccc'; props.onMarkerClick(c)} }
    position={ { lat: 43.45000, lng:  -79.705700 } }
    labelAnchor={new google.maps.Point(0, 0)}
    labelStyle={{backgroundColor: "yellow", fontSize: "10px", padding: "5px"}}
  >
    <div>Hello There!</div>
  </MarkerWithLabel>
    </GoogleMap>);
  }
);

class SampleMap extends React.PureComponent {

    state = {
        isMarkerShown: false,
    }
    
    componentDidMount() {

        //console.log()
        this.delayedShowMarker()
    }
    
      delayedShowMarker = () => {
        setTimeout(() => {
          this.setState({ isMarkerShown: true })
        }, 3000)
      }
    
      handleMarkerClick = (id) => {
        console.log(id)
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
      }
    
      render() {
        
        return (
            <div>
           
          <MyMapComponent
            coords = { this.props.coords }
            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick}
          />
            </div>
        )
      }

}
export default SampleMap;