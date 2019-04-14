import gql from 'graphql-tag';

// nothing required to be set
export default gql`
    mutation Logout{
        logout {
            email
            message
        }
    }
`;