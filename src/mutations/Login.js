import gql from 'graphql-tag';

export default gql`
    mutation Login($email: String, $password: String) {
        login(userInput: { email: $email, password: $password }) {
            email
            message
        }
    }
`;