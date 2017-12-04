import { GraphQLString, GraphQLList, GraphQLID } from "graphql";

import Type from "./type";
import Schema from "./schema";

export const queries = {
  users: {
    type: new GraphQLList(Type),
    resolve: Schema.getUsers,
  },
  userId: {
    type: Type,
    args: {
      id: {
        type: GraphQLID,
      },
    },
    resolve: Schema.getUserById,
  },
  userByName: {
    type: Type,
    args: {
      name: {
        type: GraphQLString,
      },
    },
    resolve: Schema.getUserByName,
  },
};

export default queries;
