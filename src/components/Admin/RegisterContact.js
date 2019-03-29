import React from 'react';
import { graphql } from 'react-apollo'

import CreateContact from './CreateContact';
import mutation from '../../mutations/CreateContact';
import currentUser from '../../queries/currentUser';

class RegisterContact extends React.Component {

    state = {

        streetNumber: '',
        streetName:'',
        city: '',
        province: '',
        postalFirst: '',
        postalSecond:'',
        telephone: '',
        errors: []
        // user: {
        //     id: ''
        // }

    }

    // Unable to get this.props.data.user!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    //  because this.props.data.loading === true!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // componentDidMount = () => {
    //     // if(this.props.data.loading) return;
    //     console.log(this.props.data)
    //     this.setState({ user: {
    //             ...this.state.user, 
    //             //id: this.props.data.user.id 
    //         }
    //     });
    // }

    handleOnChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleOnSubmit = e => {

        e.preventDefault();
        this.props.mutate({
            variables: { contact: { ...this.state, errors: undefined } },
        })
        .then(() => {
            this.props.data.refetch();
        })
        .catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            this.setState({ errors });
        });       

    }

    render() {

        if(this.props.data.loading) return <div />;

        const { user } = this.props.data;

        if(!user) return (<div>
                <h1>Please, login first.</h1>
            </div>);

        return(
            <div>
                <form onSubmit={ this.handleOnSubmit }>
                    <CreateContact 
                        setOnChange = { this.handleOnChange }
                        getValue = { this.state }
                    />
                    <button type="submit">Register Contact Info</button>
                </form>
            </div>
        );
    }
}

export default graphql(currentUser)(
    graphql(mutation)(RegisterContact)
);