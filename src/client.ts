import { ApolloClient, InMemoryCache } from '@apollo/client';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

export const client = new ApolloClient({
  uri: GITHUB_GRAPHQL_API,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});
