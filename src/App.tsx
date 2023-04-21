import './App.css';
import GithubExplorer from './components/GithubExplorer';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>GitHub GraphQL Frontend</h1>
        <GithubExplorer />
      </div>
    </ApolloProvider>
  );
}

export default App;
