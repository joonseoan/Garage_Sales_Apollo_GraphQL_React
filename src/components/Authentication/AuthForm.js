import React  from 'react';
import { graphql, compose } from 'react-apollo';

import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

import SignupMutation from '../../mutations/Signup';
import LoginMutation from '../../mutations/Login';
import getCurrentUser from '../../queries/getCurrentUser';


// must divide reduxt states into 3 parts, undefined, false, and true
class AuthForm extends React.Component {

    state = {
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        alias: '',
        message: '',
        errors: []
    }

    handleOnChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name] : value });
    }

    handleSubmit = (e) => {
      
        e.preventDefault();

        if(this.props.location.state === 'signup') {
            return this.props.signup({ 
                variables: { ...this.state, 'errors': undefined, 'message': undefined },
                refetchQueries: [{ query: getCurrentUser }] 
            })
            .then(res => { 
                this.setState({ message: res.data.signup.message });
            })
            .catch(res => {
                const errors = res.graphQLErrors.map(error => error.message);
                this.setState({ errors });
            });    
        }

        // const { email, password } = this.state;
        // this.props.login({ 
        //     variables: { email, password },
        //     refetchQueries: [{ query: currentUser }] 
        // })
        // .catch(res => {
        //     const errors = res.graphQLErrors.map(error => error.message);
        //     this.setState({ errors });
        // });
    }
    
    render() {

        console.log(this.props )
        return(
            <div>
                <form onSubmit={ this.handleSubmit }>    
                    <LoginForm 
                        setOnChange = { this.handleOnChange }
                        getValue = {{ email: this.state.email, password: this.state.password }}
                    />
                    { 
                        this.props.location.state === 'signup' &&  (<SignupForm 
                            setOnChange = { this.handleOnChange }
                            getValue = { this.state }
                        />) 
                    }
                    <div>Error Message: { this.state.errors.message }</div>
                    <button type="submit">Be a Garage Sales member!</button>
                </form>
            </div>
        );    
    }

    componentDidUpdate(prevProps) {
        if(!prevProps.data.getCurrentUser && this.props.data.getCurrentUser) {
            this.props.history.push('/');
        }
    }
} 

export default compose(
    graphql(getCurrentUser),
    graphql(SignupMutation, { name: 'signup'}),
    graphql(LoginMutation, { name: 'login'})
)(AuthForm);
