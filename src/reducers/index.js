import { combineReducers } from 'redux';

import authReducer from './authReducer';
// import fetchProductList from './fetchProductList';

export default combineReducers({
    auth: authReducer,
    // productList: fetchProductList
});