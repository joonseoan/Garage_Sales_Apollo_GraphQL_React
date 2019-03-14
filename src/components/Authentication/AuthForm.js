import React  from 'react';
import { graphql, compose } from 'react-apollo';

import SignupForm from './SignupForm';
import SignupMutation from '../../mutations/Signup';
import LoginMutation from '../../mutations/Login';
import currentUser from '../../queries/currentUser';

class AuthForm extends React.Component {

    state = { 
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        errors: []
    }

    handleOnChange = (e) => {
        const { name, value} = e.target;
        this.setState({ [name] : value });
    }

    handleSubmit = (e) => {

        const { email, password } = this.state;
        e.preventDefault();

        if(this.props.location.state === 'signup') {

            // no return!!!!
            this.props.signup({ 
                variables: this.state,
                refetchQueries: [{ query: currentUser }] 
            }).catch(res => {
                const errors = res.graphQLErrors.map(error => error.message);
                this.setState({ errors });
            })

            return;
        }
        
        this.props.login({ 
            variables: { email, password },
            refetchQueries: [{ query: currentUser }] 
        }).catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            this.setState({ errors });
        })

    }
    
    render() {

        const signupForm = (
            <SignupForm 
                setFirstName = { firstName => { this.setState({ firstName }); }}
                setLastName = { lastName => { this.setState({ lastName }); }}
                getFirstName = { this.state.firstName }
                getLastName = { this.state.lastName }
            />
        );

        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <label>Email Address: </label>
                        <input 
                            type="text" 
                            name="email" 
                            autoFocus
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
                    { this.props.location.state === 'signup' ? signupForm : null }
                    <div>Error Message: under construction !</div>
                    <button type="submit">Be a Garage Sales member!</button>
                </form>
            </div>
        );    

    }

    componentDidUpdate(prevProps) {
        if(!prevProps.data.user && this.props.data.user) {
            this.props.history.push('/');
        }
    }
} 

// export default graphql(SignupMutation)(
//     graphql(currentUser)(
//         graphql(LoginMutation)(AuthForm)
//     )
// );

export default compose(
    graphql(currentUser),
    graphql(SignupMutation, { name: 'signup'}),
    graphql(LoginMutation, { name: 'login'})
)(AuthForm);
