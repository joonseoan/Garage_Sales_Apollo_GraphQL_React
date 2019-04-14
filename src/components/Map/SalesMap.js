import React from 'react';
import { graphql } from 'react-apollo';

import getCoords from '../../queries/getCoords';
import GoogleMapping from './GoogleMapping';

class SalesMap extends React.PureComponent {

    state = { 
      isMarkerShown: false,
      myLocation: {
        lat: null,
        lng: null,
        errorMessage: ''
      } 
    }
  
    componentDidMount() {

      window.navigator.geolocation.getCurrentPosition(
        position => {
            const { latitude, longitude } = position.coords;
            this.setState({
                myLocation : { 
                  ...this.state.myLocation,
                  lat: latitude,
                  lng: longitude
                }
            });
        },
        err => {
            this.setState({ myLocation: { 
                  ...this.state.myLocation, 
                  errorMessage: err.message 
                }
            });
        }
    );
      this.delayedShowMarker()
    };
  
    delayedShowMarker = () => {
      setTimeout(() => {
        this.setState({ isMarkerShown: true });
      }, 3000)
    };
  
    handleMarkerClick = (id) => {
      console.log(id)
      this.setState({ isMarkerShown: false });
      this.delayedShowMarker();
    };
  
    render() {
      
     if(this.props.data.loading || !this.state.myLocation.lat || !this.state.myLocation.lng ) return <div />;
      console.log('coords: ', this.props.data.getCoords)
      return (
          <div>
            <GoogleMapping
              myLocation = { this.state.myLocation }
              isMarkerShown = { this.state.isMarkerShown }
              onMarkerClick = { this.handleMarkerClick }
              coords = { this.props.data.getCoords }
            />
          </div>
      );

    }
}

export default graphql(getCoords)(SalesMap);
// export default SampleMap;