import gql from 'graphql-tag';

export default gql`{
      getImageList {
        productId
        imagePaths
      }
}`;