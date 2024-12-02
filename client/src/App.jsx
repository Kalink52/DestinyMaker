import { Outlet } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Header from "./components/header/Header";
import { ThemeProvider } from "@material-tailwind/react";
import { CharacterProvider } from "./utils/context/character";
import { TraitProvider } from "./utils/context/trait";
const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const cache = new InMemoryCache();
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <CharacterProvider>
            <TraitProvider>
              <div className="h-screen w-screen">
                <Header />
                <Outlet />
              </div>
            </TraitProvider>
          </CharacterProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
