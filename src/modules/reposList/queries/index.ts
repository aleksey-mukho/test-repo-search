import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql(`
  query SearchRepositories($query: String!) {
    search(first: 20, query: $query, type: REPOSITORY) {
      nodes {
        ... on Repository {
          id
          url
          name
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
        }
      }
    }
  }
`);
