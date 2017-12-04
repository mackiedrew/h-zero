import { GraphQLFloat, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } from "graphql";
import GraphQLDate from "graphql-date";

export const Type = new GraphQLObjectType({
  name: "MassRecord",
  description: "A single record of a users mass and possibly body fat percentage.",
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
    userId: {
      name: "User ID",
      description: "The ID of the user that this record belongs to.",
      type: new GraphQLNonNull(GraphQLString),
    },
    mass: {
      name: "Mass",
      description: "User's mass in the also recorded mass unit.",
      type: new GraphQLNonNull(GraphQLFloat),
    },
    massUnit: {
      name: "Mass Unit",
      description: "The unit in which mass was recorded.",
      type: new GraphQLNonNull(GraphQLString),
    },
    bodyFatPercentage: {
      name: "Body Fat (%)",
      description: "Percentage of total mass in fat from 0 (0%) to 1 (100%)",
      type: GraphQLFloat,
    },
    takenAt: {
      name: "Taken Time",
      description: "Time at which the measurement was taken.",
      type: new GraphQLNonNull(GraphQLDate),
    },
    recordedAt: {
      name: "Recorded Time",
      description: "Time at which the measurement was recorded.",
      type: new GraphQLNonNull(GraphQLDate),
    },
  }),
});

export default Type;
