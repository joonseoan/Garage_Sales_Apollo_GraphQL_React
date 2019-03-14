import React from 'react';

class SignupForm extends React.Component {

    handleOnChange = (e) => {
        const { name, value } = e.target;

        if(name === 'firstName') {

            this.props.setFirstName(value);
        } else {
            this.props.setLastName(value);
        }

    }

    render() {

        return(
            <div>
                <div>
                    <label>Your FirstName: </label>
                    <input 
                        type="text" 
                        name="firstName"
                        value={ this.props.getFirstName } 
                        onChange={ this.handleOnChange }
                    />
                </div>
                <div>
                    <label>Your LastName: </label>
                    <input 
                        type="text" 
                        name="lastName"
                        value={ this.props.getLastName }
                        onChange={ this.handleOnChange }                        
                    />
                </div>
            </div>
        );
    }
}

export default SignupForm;