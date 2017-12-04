// Framework
import { GraphQLObjectType } from "graphql";

// GraphQL Queries
import user from "./user/queries";

// Setup GraphQL RootQuery
export const RootQuery = new GraphQLObjectType({
  name: "Query",
  description: "Realize Root Query",
  fields: () => ({
    users: user.users,
    userId: user.userId,
    userByName: user.userByName,
  }),
});

export default RootQuery;
