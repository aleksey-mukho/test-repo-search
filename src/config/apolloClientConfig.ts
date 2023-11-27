import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({});

const link = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_PERSONAL_ACCESS_TOKEN}`,
  },
});

export const client = new ApolloClient({
  cache: cache,
  link: link,
});
