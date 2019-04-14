import React from 'react';
import { graphql } from 'react-apollo';

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
        imagePath: [],
        imagePreview: [],
        errors: []
    }

    handleOnSubmit = async e => {

        e.preventDefault();

        const body = new FormData();
        // body.append('product_images', this.state.imagePath);

        // let response = await fetch('/uploadImages', {
        //     method: 'PUT',
        //     // headers: {
        //     //     Authorization: 'Bearer ' + this.props.token,
        //     // },
        //     body
        // })

        // response = await response.json();

        // console.log('image response: ', response);


        // const { imagePreview, errors, ...noA } = this.state;
        // this.props.mutate({
        //     variables: { 
        //         ...noA,
        //         price: Number(this.state.price),
        //         imagePath: 'not available yet'
        //     }
        // })
        // .then(res => console.log(res))
        // .catch(res => {
        //     const errors = res.graphQLErrors.map(error => error.message);
        //     this.setState({ errors });
        // });       
    }

    setValues = (name, value) => {
        if(name === 'imagePreview') {
            return this.setState({ imagePreview: [ ...this.state.imagePreview, value ] });
        }
        this.setState({ [name] : value });
    }

    render() {
        //console.log(this.state.imagePath)
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