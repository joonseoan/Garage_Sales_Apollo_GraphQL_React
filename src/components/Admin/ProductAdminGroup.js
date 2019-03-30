import React from 'react';

import CategoryAdmin from './CategoryAdmin';
import ProductDetailAdmin from './ProductDetailAdmin';

const ProductAdminGroup = () => {
    return (
        <React.Fragment>
            <CategoryAdmin />
            <ProductDetailAdmin />
        </React.Fragment>
    );
}

export default ProductAdminGroup;