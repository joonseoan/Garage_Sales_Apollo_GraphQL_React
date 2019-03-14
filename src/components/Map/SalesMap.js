import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Google_API_Key } from '../../tempkeys';

// change it onto css file......
const mapStyle = {
  width: '50%',
  height: '50%'
};

class SalesMap extends React.Component {
  render() {
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
      />
    );
  }

}

export default GoogleApiWrapper({
  apiKey: Google_API_Key
})(SalesMap);