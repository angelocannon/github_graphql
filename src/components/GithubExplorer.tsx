import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Typography, Grid, Card, CardContent } from '@mui/material';

const GET_USERS_AND_REPOS = gql`
  {
    search(query: "type:user", type: USER, first: 10) {
      edges {
        node {
          ... on User {
            name
            login
            avatarUrl(size: 200)
            repositories(first: 5) {
              edges {
                node {
                  name
                  description
                  stargazerCount
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GithubExplorer: React.FC = () => {
  const { data, loading, error } = useQuery(GET_USERS_AND_REPOS);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {data?.search.edges.map((edge: any) => (
        <Grid key={edge.node.login} item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {edge.node.name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {edge.node.login}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {edge.node.repositories.edges.map((repo: any) => (
                  <div key={repo.node.name}>
                    <strong>{repo.node.name}</strong> - {repo.node.description} ({repo.node.stargazerCount} stars)
                  </div>
                ))}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GithubExplorer;
