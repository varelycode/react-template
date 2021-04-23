import { gql } from "@apollo/server";
export const typeDefs = gql`
  type Item {
    title: String
    img: String
    tags: [String]
    price: Float
  }
  type BlogPostCollection {
    skip: Int!
    limit: Int!
    total: Int!
    items: [BlogPost]!
  }
  type BlogPost {
    title: String
  }
  type Query {
    items: [Item]
    blogs: [BlogPostCollection]
  }
`;
