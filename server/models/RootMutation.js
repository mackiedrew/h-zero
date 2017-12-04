// Framework
import { GraphQLObjectType } from "graphql";

// GraphQL Mutations
import user from "./user/mutations";

// Setup GraphQL RootMutation
export const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Realize Root Mutations",
  fields: () => ({
    addUser: user.addUser,
    updateUser: user.updateUser,
  }),
});

export default RootMutation;
