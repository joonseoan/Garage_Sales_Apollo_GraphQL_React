import React from 'react';
import ReactDOM from 'react-dom';

// the latest version
import ApolloClient from "apollo-boost";

// still old version
// import ApolloClient from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';

// old version
// import ApolloClient, { createNetworkInterface } from 'apollo-client';

import { ApolloProvider } from 'react-apollo';

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
    uri: 'http://localhost:4000/graphql',

    // must set this up to use cookie!!!!!
    // default is 'same-origin
    // This option can be used to indicate 
    //  whether the user agent should send cookies with requests.
    credentials: 'same-origin'

    // Let's see how it works!!
    // dataIdFromObject: o => o.id
});


// const Root = () => {
//     return(
//         <ApolloProvider client= { client }>
//             <BrowserRouter>
//                 <Route path="/" component = { App } />
//                 <Route path="/signup" component={ SignupForm } />
//             </BrowserRouter>
//         </ApolloProvider>
//     );
// } 

ReactDOM.render(
    <ApolloProvider client= { client }>
        <App />
    </ApolloProvider>, 
    document.getElementById('root')
);

