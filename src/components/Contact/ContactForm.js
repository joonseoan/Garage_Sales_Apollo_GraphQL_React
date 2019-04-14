import React from 'react';

import { contactInputs } from '../../utils/inputs/inputAttributes';
import INPUTS from '../../utils/inputs/inputsForm';

export default (props) => {

    return(
        <React.Fragment> {
            contactInputs.map(contact => {
                return(
                    <div key = { contact.inputName }>
                        <INPUTS
                            label={ contact.label } 
                            type="text"
                            name={ contact.inputName }
                            setValues={ props.setValues }
                            value={ props.getValues[contact.inputName] }    
                        />
                    </div> 
                );
            })
        }</React.Fragment>
        
        /* 
        
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
        */
    );
}