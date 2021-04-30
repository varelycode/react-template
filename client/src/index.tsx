import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { ApolloClient, gql, NormalizedCacheObject } from "@apollo/client";
import { cache } from "./cache";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache, // instance of in memory cache
  uri: "http://localhost:4000", //uri of graphql server
});

// ...ApolloClient instantiated here...

client
  .query({
    query: gql`
      query TestQuery {
        blogs {
          title
        }
      }
    `,
  })
  .then((result) => console.log(result.data));

ReactDOM.render(
  // <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
