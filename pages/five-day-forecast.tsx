import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { ForeCastPage } from "../components";

const Home = ({ data, host, protocol }) => {
  const uri = `${protocol}://${host}/api/graphql-data`;

  const client = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ForeCastPage />
    </ApolloProvider>
  );
};

export const getServerSideProps = async ({ req, query }) => {
  const host = req?.headers?.host;

  const protocol = process.env.NODE_ENV !== "production" ? "http" : "https";

  return {
    props: { host, protocol },
  };
};

export default Home;
