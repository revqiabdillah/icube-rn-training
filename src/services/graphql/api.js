import ApolloClient from 'apollo-boost';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {GRAPHQL_BASE_URL} from '../../../env';

const client = new ApolloClient({
  uri: GRAPHQL_BASE_URL,
  cache: new InMemoryCache(),
});

export const query = schema => {
  return client.query({
    query: schema,
  });
};

export const mutate = (schema, data) => {
  return client.mutate({
    variables: data,
    mutation: schema,
  });
};
