import React from 'react';
import ReactDOM from 'react-dom';

// the latest version
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

// still old version
// import ApolloClient from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';

// old version
// import ApolloClient, { createNetworkInterface } from 'apollo-client';

import App from './components/App';

// still old  version
// const apolloClient = new ApolloClient({
//     link: new HttpLink({
//         // [ In Apollo boost]
//         // If you don’t pass in uri directly, 
//         // it defaults to the "/graphql" endpoint on the same host 
//         // your app is served from.
//         uri: 'http://localhost:4000/graphql' // same route app.use('graphql', {}) in index.js
//     }),
//     connectToDevTools: true
// })

// old version
// const networkInterface = createNetworkInterface({
//     uri: '/graphql', // same route app.use('graphql', {}) in index.js
//     opts: {
//       credentials: 'same-origin'
//     }
//   });

// **********
// Setup ApolloClient in the client side.
const client = new ApolloClient({
    // when using cors in the backend, but not working...
    // uri: 'http://localhost:4000/graphql',
    
    // when using proxy ===> it works but it generated the micellinous error.
    uri: '/graphql'
    
    // must set this up to use cookie!!!!!
    // default is 'same-origin
    // This option can be used to indicate 
    //  whether the user agent should send cookies with requests.
    // credentials: 'same-origin',

    // // Let's see how it works!!
   // dataIdFromObject: o => o.id // need to find alternatives
});

ReactDOM.render(
    <ApolloProvider client= { client }>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);