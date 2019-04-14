import gql from 'graphql-tag';

export default gql`
    mutation Signup($email: String!, $password: String!) {
        signup(userInput: { email: $email, password: $password }) {
            email
            message
        }  
    }
`;