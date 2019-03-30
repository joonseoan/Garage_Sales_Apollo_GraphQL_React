import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from './Header';
import AuthForm from './Authentication/AuthForm';
import ProductAdminForm from './Admin/ProductAdminForm';
import SampleMap from './Map/SalesMap';
import RegisterContact from './UserContact/RegisterContact';

const App = () => {

    // render() {

    return(
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    { /* <SalesMap coords={ { lat: this.state.lat, lng: this.state.lng } } /> */ }

                    {/* must change it to redux form */}
                    <Route path="/auth" exact component={ AuthForm } />
                    <Route path="/productAdmin" exact component = { ProductAdminForm } />
                </div>
            </BrowserRouter>
            
            {/* 
                <RegisterContact />
    
                <SampleMap />
            */}
            
        </div>
        
    );
   // }
};

export default App;