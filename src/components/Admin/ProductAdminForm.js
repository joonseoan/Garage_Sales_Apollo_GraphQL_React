import React from 'react';

import ProductAdminGroup from './ProductAdminGroup';

class ProductAdminForm extends React.Component {
    render() {
        return(
            <form>
                <ProductAdminGroup />
                <button type="submit">Register products</button>
            </form>
        );
    }
}

export default ProductAdminForm;