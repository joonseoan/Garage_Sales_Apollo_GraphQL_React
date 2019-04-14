import gql from 'graphql-tag';

export default gql`
    mutation CreateContact(
        $streetNumber:String!,
        $streetName: String!,
        $city: String!, 
        $province: String!, 
        $telephone: String!
        ) {
 		    createContact(
                 contactInput: {
                     streetNumber:$streetNumber, 
                     streetName: $streetName, 
                     city: $city, 
                     province: $province, 
                     telephone: $telephone}) {
 			googleAddress
            lat
            lng
            telephone
		}
    }
`;