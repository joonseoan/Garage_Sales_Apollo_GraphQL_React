import React, { useEffect } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import getImageList from '../queries/getImageList';
import Header from './Header';
import ImageList from './ProductShop/ImageList';
import AuthForm from './Authentication/AuthForm';
import SubmitProductForm from './ProductAdmin/SubmitProductForm';
import SalesMap from './Map/SalesMap';
import CreateContact from './Contact/CreateContact';
import { fetchProductList } from '../actions';

class App extends React.Component { 

    render() {
        if(this.props.data.loading) return <div />
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
                        <Route path="/" exact component={ ImageList } />
                        <Route path="/productAdmin" exact component={ SubmitProductForm } />
                    </div>
                </BrowserRouter>
                {/* 
                    <SalesMap />
                */}
            </div>  
        );
    }

    componentDidUpdate(prevProps) {
        if(!prevProps.data.getImageList && this.props.data.getImageList) {
            this.props.fetchProductList(this.props.data.getImageList);   
        }
    }
};

export default compose (
    connect(null, { fetchProductList }),
    graphql(getImageList)
)(App);