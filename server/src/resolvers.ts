import { blogs, items } from "./data";
import { BlogAPI } from "./blogs";

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const blog = new BlogAPI();
export const resolvers = {
  Query: {
    items: () => items,
    blogs: () => blog,
  },
};
