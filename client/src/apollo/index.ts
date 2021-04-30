import {
  ApolloClient,
  DocumentNode,
  NormalizedCacheObject,
} from "@apollo/client";
import { cache } from "./cache";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache, // instance of in memory cache
  uri: "http://localhost:4000", //uri of graphql server
});

export const makeQuery = (query: DocumentNode) =>
  client
    .query({
      query: query,
    })
    .then((result) => console.log(result.data));
