import gql from 'graphql-tag';

export default gql`
    mutation CreateProduct($category: String, 
                           $name: String,
                           $brand: String,
                           $model: String,
                           $price: Float,
                           $description: String
    ) {
        createProduct (
            categroy: $category,
            name: $name,
            brand: $brand,
            model: $model,
            price: $price,
            description: $description
        ) {
            name
            brand
            model
            price
            imagePaths
        }  
    }
`;