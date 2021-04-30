import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { makeQuery } from "./apollo/index";
import { gql } from "@apollo/client";

const query = gql`
  query TestQuery {
    blogs {
      title
    }
  }
`;

makeQuery(query);
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
