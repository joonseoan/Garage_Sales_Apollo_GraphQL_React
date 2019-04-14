import React from 'react';
import { graphql } from 'react-apollo'

import ContactForm from './ContactForm';
import mutation from '../../mutations/CreateContact';
import getCurrentUser from '../../queries/getCurrentUser';

class CreateContact extends React.Component {

    state = {
        streetNumber: '',
        streetName:'',
        city: '',
        province: '',
        telephone: '',
        errors: []
    };

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
            variables: { ...this.state, errors: undefined },
        })
        .then(res => {
            console.log(res)
            // this.props.data.refetch();
        })
        .catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            this.setState({ errors });
        });       
    }

    render() {

        // if(this.props.data.loading) return <div />;
        
        return(
            <div>
                <form onSubmit={ this.handleOnSubmit }>
                    <ContactForm 
                        setValues = { this.handleOnChange }
                        getValues = { this.state }
                    />
                    <button type="submit">Register Contact Info</button>
                </form>
            </div>
        );
    }
}

// export default graphql(currentUser)(
//     graphql(mutation)(RegisterContact)
// );

export default graphql(mutation)(CreateContact);