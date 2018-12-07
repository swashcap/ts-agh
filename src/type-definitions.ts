import { gql } from "apollo-server-hapi";

const typeDefs = gql`
Query {
  hello: String!
}`;

export default typeDefs;
