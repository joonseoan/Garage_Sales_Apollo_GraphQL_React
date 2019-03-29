import React from 'react';

export default (props) => {

    return(
        <div>
            <div>
                <label>Email: </label>
                <input 
                    type="email" 
                    name="email"
                    autoFocus
                    placeholder="abc@abc.com"
                    value={ props.getValue.email } 
                    onChange={ (e) => { props.setOnChange(e) } }
                />
            </div>
            <div>
                <label>Password: </label>
                <input 
                    type="password" 
                    name="password"
                    value={ props.getValue.password } 
                    onChange={ (e) => { props.setOnChange(e) } }
                />
            </div>
        </div>
    );

}