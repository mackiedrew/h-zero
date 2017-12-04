import { GraphQLString, GraphQLNonNull, GraphQLFloat } from "graphql";

import Type from "./type";
import Schema from "./schema";

export const mutations = {
  addMassRecord: {
    type: Type,
    args: {
      userId: {
        name: "userId",
        type: new GraphQLNonNull(GraphQLString),
      },
      mass: {
        name: "mass",
        type: new GraphQLNonNull(GraphQLFloat),
      },
      massUnit: {
        name: "massUnit",
        type: GraphQLString,
      },
      bodyFatPercentage: {
        name: "bodyFatPercentage",
        type: GraphQLFloat,
      },
    },
    resolve: Schema.addMassRecord,
  },
};

export default mutations;
