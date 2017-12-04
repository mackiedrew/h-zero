import { GraphQLString, GraphQLNonNull, GraphQLID } from "graphql";

import Type from "./type";
import Schema from "./schema";

export const mutations = {
  addUser: {
    type: Type,
    args: {
      name: {
        name: "name",
        type: new GraphQLNonNull(GraphQLString),
      },
      email: {
        name: "email",
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: Schema.addUser,
  },
  updateUser: {
    type: Type,
    args: {
      id: {
        type: GraphQLID,
      },
      name: {
        name: "name",
        type: new GraphQLNonNull(GraphQLString),
      },
      email: {
        name: "email",
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: Schema.updateUser,
  },
};

export default mutations;
