import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from './Header';
import AuthForm from './Authentication/AuthForm';
import SampleMap from './Map/SalesMap';
import RegisterContact from './Admin/RegisterContact';

const App = () => {

    // render() {

    return(
        <div>
            
            <BrowserRouter>
                <div>
                    <Header />
                    {/* <SalesMap coords={ { lat: this.state.lat, lng: this.state.lng } } /> */}
                    <Route path="/auth" exact component={ AuthForm } />
                </div>
            </BrowserRouter>
            
            <RegisterContact />

            <SampleMap />
            
        </div>
        
    );
   // }
};

export default App;