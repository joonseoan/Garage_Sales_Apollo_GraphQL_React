import gql from 'graphql-tag';

export default gql`
  {
      coords {
        userId
        lat
        lng
      }
  }
`;