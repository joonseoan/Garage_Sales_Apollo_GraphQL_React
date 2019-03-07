import React  from 'react';
import { graphql } from 'react-apollo';

import SignupForm from './SignupForm';
import mutation from '../../mutations/Signup';

class AuthForm extends React.Component {

    state = { 
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleOnChange = (e) => {
        const { name, value} = e.target;
        this.setState({ [name] : value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.mutate({ variables: this.state });

        this.setState({
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        });

    }
    
    render() {

        console.log(this.state.firstName, this.state.lastName)

        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <label>Email Address: </label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="abc@abc.com"
                            value = { this.state.email }
                            onChange={ this.handleOnChange }
                        />
                    </div>
                    <div>
                        <label>Password (at least 8 characters): </label>
                        <input 
                            type="password" 
                            name="password"
                            value={ this.state.password }
                            onChange={ this.handleOnChange } 
                        />
                    </div>
                    <SignupForm 
                        setFirstName = { firstName => { this.setState({ firstName }); }}
                        setLastName = { lastName => { this.setState({ lastName }); }}
                        getFirstName = { this.state.firstName }
                        getLastName = { this.state.lastName }
                    />
                    <div>Error Message: under construction !</div>
                    <button type="submit">Be a Garage Sales member!</button>
                </form>
            </div>
        );    

    }
} 

export default graphql(mutation)(AuthForm);