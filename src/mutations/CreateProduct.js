import gql from 'graphql-tag';

export default gql`
        mutation CreateProduct( 
            $category: String!, 
            $name: String!,
            $brand: String!,
            $model: String!,
            $price: Float!,
            $description: String!,
            $imagePaths: [String!]!
    ) {
        createProduct ( productInput: { 
            category: $category,
            name: $name,
            brand: $brand,
            model: $model,
            price: $price,
            description: $description,
            imagePaths: $imagePaths
            
        }) {
            name
            brand
            model
            price
            description
            images {
                imagePaths
            }
            imageNumbers
            createdAt
        }
    }
`;