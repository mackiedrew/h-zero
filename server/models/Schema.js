// Framework
import { GraphQLSchema } from "graphql";

// API
import RootQuery from "./RootQuery";
import RootMutation from "./RootMutation";

// Set up GraphQL Schema with our RootQuery and RootMutation
export const Schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

export default Schema;
