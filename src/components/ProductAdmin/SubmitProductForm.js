import React from 'react';
import { graphql } from 'react-apollo';
import _ from 'lodash';

import mutation from '../../mutations/CreateProduct';
import GroupProductDetails from './GroupProductDetails';

class SubmitProductForm extends React.Component {

    state = {
        category: '',
        name: '',
        brand: '',
        model: '',
        price: '',
        description: '',
        imagePath: '',
        imagePreview: null,
        errors: ''
    }

    handleOnSubmit = (e) => {

        e.preventDefault();
        this.props.mutate({
            variables: { ...this.state, errors: undefined, imagePreview: undefined },
        })
        .then(() => {
            console.log('success!')
            // this.props.data.refetch();
        })
        .catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            this.setState({ errors });
        });       
    }

    setValues = (name, value) => {
        this.setState({ [name] : value });
    }

    render() {
        console.log('state in SubmitProductForm: ', this.state);
        return(
            <div>
                <form onSubmit={ this.handleOnSubmit }>
                    <GroupProductDetails 
                        getValues={ this.state }
                        setValues={ this.setValues } 
                    />
                    <button type="submit">Register products</button>
                </form>
            </div>
        );
    }
}

export default graphql(mutation)(SubmitProductForm);