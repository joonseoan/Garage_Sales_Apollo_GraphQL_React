import React from 'react';

export default (props) => {
    
    return(
        <div>
            <div>
                <label>Confirm Password: </label>
                <input
                    type="password" 
                    name="confirmPassword"
                    value={ props.getValue.confirmPassword } 
                    onChange={ (e) => { props.setOnChange(e) } }
                />
            </div>
            <div>
                <label>Your FirstName: </label>
                <input
                    type="text" 
                    name="firstName"
                    value={ props.getValue.firstName } 
                    onChange={ (e) => { props.setOnChange(e) } }
                />
            </div>
            <div>
                <label>Your LastName: </label>
                <input 
                    type="text" 
                    name="lastName"
                    value={ props.getValue.lastName } 
                    onChange={ (e) => { props.setOnChange(e) } }                       
                />
            </div>
            <div>
                <label>Alias (Otherwise, your username is "User"): </label>
                <input 
                    type="text" 
                    name="alias"
                    value={ props.getValue.alias } 
                    onChange={ (e) => { props.setOnChange(e) } }                 
                />
            </div>
        </div>
    );
}