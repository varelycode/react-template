import fetch from "node-fetch";

type blogs = {
  title: string;
};

const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.space_id}/environments/${process.env.env}`;

const query = `
    {
        blogPostCollection {
            items {
                title
            }
        }
    }
    `;

export const getBlogPosts = async () => {
  const result = fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.delivery_token}`,
    },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log("response", response);
      console.log(url);
      console.log(Object.values(response["data"]["blogPostCollection"])[0]);
      return Object.values(response["data"]["blogPostCollection"])[0];
    })
    .catch((error) => {
      console.debug(error);
      console.log(url);
      return error;
    });

  return result;
};
