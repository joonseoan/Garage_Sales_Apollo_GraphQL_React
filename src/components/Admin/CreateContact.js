import React from 'react';

export default (props) => {
    
    return(
        <div>
            <div>
                <label>Street Number: </label>
                <input 
                    type="text" 
                    name="streetNumber"
                    // value={ props.getValue.streetNumber } 
                    onChange={ (e) => { props.setOnChange(e) } }                      
                />
            </div>
            <div>
                <label>Street Name: </label>
                <input 
                    type="text" 
                    name="streetName"
                    value={ props.getValue.streetName } 
                    onChange={ (e) => { props.setOnChange(e) } }                      
                />
            </div>
            <div>
                <label>City: </label>
                <input
                    type="text" 
                    name="city"
                    value={ props.getValue.city } 
                    onChange={ (e) => { props.setOnChange(e) } }                     
                />
            </div>
            <div>
                <label>Province: </label>
                <input 
                    type="text" 
                    name="province"
                    value={ props.getValue.province } 
                    onChange={ (e) => { props.setOnChange(e) } }                   
                />
            </div>
            <div>
                <label>Postal Code: </label>
                <input 
                    type="text" 
                    name="postalFirst"
                    value={ props.getValue.postalFirst } 
                    onChange={ (e) => { props.setOnChange(e) } }                      
                />
                <input 
                    type="text" 
                    name="postalSecond"
                    value={ props.getValue.postalSecond } 
                    onChange={ (e) => { props.setOnChange(e) } }                      
                />
            </div>
            <div>
                <label>Telephone: </label>
                <input
                    type="text" 
                    name="telephone"
                    value={ props.getValue.telephone } 
                    onChange={ (e) => { props.setOnChange(e) } }                    
                />
            </div>
        </div>
    );
}