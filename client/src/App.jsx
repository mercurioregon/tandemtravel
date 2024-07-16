import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';


import { ApolloClient, ApolloProvider, InMemoryCache , createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Request middleware for JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  uri: '/graphql',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Navbar />
        <Outlet />
      </div>
    </ApolloProvider>
  );
}


export default App;
