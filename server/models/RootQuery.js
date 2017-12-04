// Framework
import { GraphQLObjectType } from "graphql";

// GraphQL Queries
import user from "./user/queries";
import massRecord from "./massRecord/queries";

// Setup GraphQL RootQuery
export const RootQuery = new GraphQLObjectType({
  name: "Query",
  description: "Realize Root Query",
  fields: () => ({
    users: user.users,
    userId: user.userId,
    userByName: user.userByName,
    getUserMassRecords: massRecord.getUserMassRecords,
  }),
});

export default RootQuery;
