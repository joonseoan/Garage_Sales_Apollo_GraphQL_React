import React from 'react';
import { graphql } from 'react-apollo';
import axios from 'axios';

import mutation from '../../mutations/CreateProduct';
import GroupProductDetails from './GroupProductDetails';
import { readSync } from 'fs';

class SubmitProductForm extends React.Component {

    state = {
        category: '',
        name: '',
        brand: '',
        model: '',
        price: '',
        description: '',
        imagePath: [],
        imagePreview: [],
        errors: []
    }

    handleOnSubmit = async e => {
        e.preventDefault();
        try {
            if(this.state.imagePath.length > 4) {
                throw new Error ('Maximum number of files are 4');
            }
            const body = new FormData();
            this.state.imagePath.forEach(file => {
                body.append('productImages', file);
            })
            
            // let response = await fetch('/uploadImages', {
            //     method: 'PUT',
            //     // headers: {
            //     //     Authorization: 'Bearer ' + this.props.token,
            //     // },
            //     body
            // })
            // response = await response.json();

            const response = await axios.put('/uploadImages', body, {
                // headers: {
                //     Authorization: 'Bearer ' + this.props.token
                // }
            });
            if(!response) throw new Error('Unable to upload image files.');
            console.log('image response: ', response);
            const { imagePreview, imagePath, price, errors, ...noA } = this.state;
            this.props.mutate({
                variables: { 
                    ...noA,
                    price: parseFloat(this.state.price),
                    imagePaths: response.data.imagePaths
                }
            })
            .then(res => console.log(res))
            .catch(res => {
                const errors = res.graphQLErrors.map(error => error.message);
                this.setState({ errors });
            });   
        } catch(e) {
            throw new Error(e || 'Failed to upload images.');
        }    
    }

    setValues = (name, value) => {
        if(name === 'imagePreview') {
            return this.setState({ imagePreview: [ ...this.state.imagePreview, value ] });
        }
        this.setState({ [name] : value });
    }

    render() {
        // console.log(this.state.imagePath)
        return(
            <div>
                <form onSubmit={ this.handleOnSubmit }>
                    <GroupProductDetails
                        getValues={ {...this.state, 'errors': undefined } }
                        setValues={ this.setValues } 
                    />
                    <button type="submit">Register products</button>
                </form>
            </div>
        );
    }
}

export default graphql(mutation)(SubmitProductForm);