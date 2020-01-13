import { GraphQLServer } from 'graphql-yoga';
import resolvers from "./graphql-src/resolvers.js";

const server = new GraphQLServer({
    typeDefs: "./graphql-src/schema.graphql",
    resolvers
});

server.start(() => console.log("Graphql Server Running"));