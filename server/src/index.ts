import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schemas";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
// The `listen` method launches a web server.
server.listen().then(() => {
  console.log(`🚀 Server ready at http://localhost:4000 🥰`);
});
