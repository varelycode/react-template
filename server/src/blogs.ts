import fetch from "node-fetch";
export class BlogAPI {
  url = `https://graphql.contentful.com/content/v1/spaces/${process.env.space_id}/environments/${process.env.env}`;

  query = `
    {
        blogPostCollection {
            items {
                title
            }
        }
    }
    `;

  getBlogPosts = fetch(this.url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.delivery_token}`,
    },
    body: JSON.stringify({
      query: this.query,
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log("response", response);
      console.log(this.url);
    })
    .catch((error) => {
      console.debug(error);
      console.log(this.url);
    });
}
