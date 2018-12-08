import { gql } from "apollo-server-hapi";

export const schema = `
schema {
  query: Query
 }

type Query {
  hello: String!
}`;

export default gql`
  ${schema}
`;
