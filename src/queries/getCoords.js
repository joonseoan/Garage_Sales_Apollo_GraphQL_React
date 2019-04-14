import gql from 'graphql-tag';

export default gql`
  {
      getCoords {
        userId
        lat
        lng
      }
  }
`;