import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } from "graphql";
import GraphQLDate from "graphql-date";

export const Type = new GraphQLObjectType({
  name: "User",
  description: "User object.",
  fields: () => ({
    _id: {
      name: "MongoDB ID",
      description: "MongoDb default Id value, less easy to deal with.",
      type: new GraphQLNonNull(GraphQLID),
    },
    id: {
      name: "ID",
      description: "Unique ID that is easily tradable between systems.",
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      name: "Name",
      description: "User's name IRL.",
      type: GraphQLString,
    },
    email: {
      name: "Email",
      description: "User email, unique, index.",
      type: new GraphQLNonNull(GraphQLString),
    },
    registeredOn: {
      name: "Registration Date",
      description: "Date the user initially registered.",
      type: new GraphQLNonNull(GraphQLDate),
    },
  }),
});

export default Type;
