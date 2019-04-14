import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from './Header';
import AuthForm from './Authentication/AuthForm';
import SubmitProductForm from './ProductAdmin/SubmitProductForm';
import SalesMap from './Map/SalesMap';
import CreateContact from './Contact/CreateContact';

const App = () => {

    // render() {

    return(
        <div>
            <BrowserRouter>
                <div>    
                {/* 
                    <Header />            
                        // must change it to redux form 
                        <Route path="/auth" exact component={ AuthForm } />
                        <Route path="/contact" exact component={ CreateContact } />
                    */} 
                    <Route path="/productAdmin" exact component={ SubmitProductForm } />
                </div>
            </BrowserRouter>
            {/* 
                <SalesMap />
            */}
        </div>
        
    );
   // }
};

export default App;