import gql from 'graphql-tag';

export default gql`
        mutation CreateProduct( 
            $category: String!, 
            $name: String!,
            $brand: String!,
            $model: String!,
            $price: Float!,
            $description: String!
            $imagePath: String
    ) {
        createProduct ( productInput: { 
            category: $category,
            name: $name,
            brand: $brand,
            model: $model,
            price: $price,
            description: $description
            imagePath: $imagePath
        }) {
            name
            description
        }
    }
`;