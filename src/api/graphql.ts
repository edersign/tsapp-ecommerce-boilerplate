
const getProductsQuery = `
  query getProducts($filter: String!) {
    getBikeListing(filter: $filter, sortBy: "id", sortOrder: "DESC", published: true, first: 6) {
      edges {
        node {
          id
          name
          fullName
          serie {
            ... on object_Serie {
              name
              id
            }
          }
          edition
          year
          thumbnail
          brand {
            ... on object_Brand {
              id
              name
              primaryColor
              secondaryColor
              featureimage {
                ... on asset {
                  id
                  fullpath
                }
              }
            }
          }
          features {
            ... on object_TechnicalFeatures {
              id
              name
              description
              subTitle
              image {
                id
                fullpath
              }
            }
          }
          category {
            ... on object_Category {
              id
              name
              fullpath
              key
            }
          }
        }
      }
    }
    getProductsListing(
      filter: $filter
      sortBy: "id"
      sortOrder: "DESC"
      published: true
      first: 6
    ) {
      edges {
        node {
          id
          name
          serie {
            ... on object_Serie {
              name
              id
            }
          }
          edition
          year
          thumbnail
          brand {
            ... on object_Brand {
              id
              name
              primaryColor
              secondaryColor
              featureimage {
                ... on asset {
                  id
                  fullpath
                }
              }
            }
          }
          features {
            ... on object_TechnicalFeatures {
              id
              name
              description
              subTitle
              image {
                id
                fullpath
              }
            }
          }
          category {
            ... on object_Category {
              id
              name
              fullpath
              key
            }
          }
        }
      }
    }
  }
`;

export const getProducts = async (filter: string) => {
  const response = await fetch(import.meta.env.VITE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
    body: JSON.stringify({
      query: getProductsQuery,
      variables: { filter },
    }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
