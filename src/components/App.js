import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from './Header';
import AuthForm from './Authentication/AuthForm';
import SalesMap from './Map/SalesMap';
import SampleMap from './Map/SampleMap';

class App extends React.Component {

    state = {
        lat: null,
        lng: null,
        errorMessage:''
    };

    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                this.setState({ 
                    lat: latitude,
                    lng: longitude
                });
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    };

    render() {

        console.log(this.state)

        return(
            
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                         {/* <SalesMap coords={ { lat: this.state.lat, lng: this.state.lng } } /> */}
                        <SampleMap 
                            coords={ { lat: this.state.lat, lng: this.state.lng } }
                        />
                        <Route exact path="/auth" component={ AuthForm } />
                    </div>
                </BrowserRouter>
            </div>
            
        );
    }
};

export default App;