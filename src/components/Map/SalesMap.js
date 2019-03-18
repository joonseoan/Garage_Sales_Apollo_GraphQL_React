import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Google_API_Key } from '../../tempkeys';

// change it onto css file......
const mapStyle = {
  width: '50%',
  height: '50%',
  position: 'relative'
};

class SalesMap extends React.Component {

  state = {
    showInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  onMarkerClick = (props, marker, e) => {

    console.log('props in onMarkerClick: ', props)
    console.log('marker: ', marker)
    this.setState({
      selectedPlace: props, // contents in the marker
      activeMarker: marker, // infowindow
      showingInfoWindow: true
    });
  }

  onClose = props => {

    console.log('props in oncLOSE: ', props) // undefined
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {

    console.log(this.props.coords)

    console.log(this.state.selectedPlace.name)
    if(!this.props.coords.lat || !this.props.coords.lng) return <div />;
    return(
      <Map 
        google={ this.props.google }
        zoom={ 16 }
        style={ mapStyle }
        initialCenter={{
          lat: this.props.coords.lat,
          lng: this.props.coords.lng
        }}
      >
      <Marker
        title={'The marker`s title will appear as a tooltip.'}

        onClick={this.onMarkerClick}
        name={'Oakville Garage Sales Area'}
      />
      
      <Marker
      onClick={this.onMarkerClick}
      title={'The marker`s title will appear as a tooltip.'}
    name={'Dolores park'}
    position={{lat: 43.4682480, lng: -79.706321}} />
  <Marker />

    <InfoWindow
      marker={this.state.activeMarker}
      visible={this.state.showingInfoWindow}
      onClose={this.onClose}
    >
      <div>
        <h4>{ this.state.selectedPlace.name || 'loading...' }</h4>
      </div>
    </InfoWindow>
      
      </Map>
    );
  }

}

export default GoogleApiWrapper(
  (props) =>({
    apiKey: Google_API_Key
  }) 
)(SalesMap);