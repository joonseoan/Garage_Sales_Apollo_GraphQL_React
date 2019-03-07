import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from './Header';
import AuthForm from './Authentication/AuthForm';

class App extends React.Component {

    render() {

        console.log(this.props);

        return(
            
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/auth" component={ AuthForm } />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;