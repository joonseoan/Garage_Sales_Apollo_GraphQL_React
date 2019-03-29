import gql from 'graphql-tag';

export default gql`
    mutation CreateContact {
        createContact{
            city
            lat
            lng
        }  
    }
`;