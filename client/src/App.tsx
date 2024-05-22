import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { RouterProvider } from 'react-router-dom'

/* router */
import router from './router'
import {useAppSelector} from "./hooks/reduxHooks.tsx";

function App() {
  const httpLink = createHttpLink({
    uri: import.meta.env.VITE_BASE_URL + '/graphql',
  })

  const createUnauthenticatedClient = () => {
    return new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache(),
    })
  }

  const createAuthenticatedClient = (token: string) => {
    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      }
    })

    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    })
  }

  const token = useAppSelector((state) => state.userConnected.token);

  const client = token
    ? createAuthenticatedClient(token)
    : createUnauthenticatedClient()

  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  )
}

export default App
