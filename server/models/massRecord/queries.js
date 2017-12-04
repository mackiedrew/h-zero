import { GraphQLString, GraphQLList } from "graphql";

import Type from "./type";
import Schema from "./schema";

export const queries = {
  getUserMassRecords: {
    type: new GraphQLList(Type),
    args: {
      userId: {
        type: GraphQLString,
      },
    },
    resolve: Schema.getUserMassRecords,
  },
};

export default queries;
