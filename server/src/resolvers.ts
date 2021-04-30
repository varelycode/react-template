import { blogs, items } from "./data";
import { getBlogPosts } from "./blogs";
import { get } from "https";

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    items: () => items,
    blogs: () => getBlogPosts(),
  },
};
