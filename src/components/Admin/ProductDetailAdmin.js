import React from 'react';

class ProductDetailAdmin extends React.Component {
    render() {
        return(
            // Shop must copy kijiji
            <React.Fragment>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Brand</label>
                <input type="text" name="brand" />
                <label>Model</label>
                <input type="text" name="model" />
                <label>Price</label>
                <input type="text" name="price" />
                <label>Description</label>
                <textarea name="description" />

                <label>Photo Upload(multi)</label>
                <input />
            </React.Fragment>
        );
    }
}

export default ProductDetailAdmin;