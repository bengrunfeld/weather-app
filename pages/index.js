import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import { HomePage } from "../components";

const Home = ({ data, host, protocol }) => {
  const uri = `${protocol}://${host}/api/graphql-data`;

  const client = new ApolloClient({
    uri,
  });

  return (
    <ApolloProvider client={client}>
      <HomePage />
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
