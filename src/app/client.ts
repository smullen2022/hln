import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

export const client = new ApolloClient({
  link: ApolloLink.from([
    new HttpLink({
      uri: 'http://localhost:3000/graphql'
    })
  ]),
  cache: new InMemoryCache({})
});
