/* eslint-disable no-console */

// Framework
import express from "express";
import mongoose from "mongoose";
import graphqlHTTP from "express-graphql";

// API
import Schema from "./models/Schema";

// Configuration
import { name } from "../package.json";
const PORT = process.env.PORT || 4000;
const SERVER_IP = process.env.PORT || "localhost";
const DATABASE = process.env.DATABASE || name || "health-zero";
const GRAPHQL_PATH = process.env.GRAPHQL_PATH || "graphql";

// Connect MongoDB with Mongoose
mongoose.connect(`mongodb://${SERVER_IP}/${DATABASE}`);

// Set up Express and integrate with our GraphQL Schema and configure to use graphiql
const app = express();
app.use(`/${GRAPHQL_PATH}`, graphqlHTTP({ schema: Schema, graphiql: true }));
app.listen(PORT);

const status = {
  Express: {
    Online: true,
    Port: PORT,
  },
  GraphiQL: {
    url: `http://${SERVER_IP}:${PORT}/${GRAPHQL_PATH}`,
  },
};

console.dir(status, { depth: null, colors: true });
