import gql from 'graphql-tag';

export default gql`
  {
      getCurrentUser {
        _id
        email
        firstName
        lastName
        alias
        contact {
          lat
          lng
          googleAddress
        }
        createdAt
        updatedAt
      }
  }
`;