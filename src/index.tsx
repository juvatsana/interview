import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'

const client = new ApolloClient({
  uri: 'https://tf1-interview.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <div className="min-h-screen flex items-center justify-center bg-neutral-900">
        <App />
      </div>
    </ApolloProvider>
  </React.StrictMode>
)
