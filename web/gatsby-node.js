const path = require('path');
const axios = require('axios');

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type Translation {
      language: String!
      path: String!
    }

    type Page implements Node @dontInfer {
      id: ID!
      title: String!
      content: String!
      createdAt: Date
      updatedAt: Date
      isPublic: Boolean!
      language: String!
      path: String
      translations: [Translation]
    }

    type Menu implements Node {
      alternative_id: ID!
      title: String!
      order: Int!
      path: String
      language: String!
      alternative_parent: Menu
      page: Page
    }

    type Frontpage {
      alternative_id: ID!
      path: String!
    }

    type Settings implements Node @dontInfer {
      title: String!
      frontpage: Frontpage!
    }
  `);
};

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions;

  const result = await axios.get('http://localhost:3001/page');
  console.log(result.data);
  result.data.forEach((page) => {
    const { id, ...rest } = page;
    createNode({
      id: createNodeId(`${id}`),
      ...rest,
      internal: {
        type: 'Page',
        content: JSON.stringify(page.content),
        mediaType: 'text/markdown',
        contentDigest: createContentDigest(page.content),
      },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const settingsData = await graphql(`
    query {
      allSettings {
        nodes {
          title
          frontpage {
            id: alternative_id
            path
          }
        }
      }
    }
  `);

  const pages = await graphql(`
    query {
      allPage(filter: { id: { ne: "dummy" } }) {
        nodes {
          id
          title
          content
          path
          language
          translations {
            path
            language
          }
        }
      }
    }
  `);

  pages.data.allPage.nodes.forEach((page) => {
    console.log('creating page', page);
    createPage({
      path: `/${page.language}${page.path}`,
      component: path.resolve('./src/templates/Page.tsx'),
      context: {
        data: page,
      },
    });

    // Create frontpage.
    const frontpageId = settingsData.data.allSettings.nodes[0].frontpage.id;

    if (page.id === frontpageId) {
      console.log('creating frontpage');
      createPage({
        path: '/',
        component: path.resolve('./src/templates/Page.tsx'),
        context: {
          data: page,
        },
      });
    }
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // Enable direct navigation to client-side routes.
  if (page.path.match(/^\/admin/)) {
    /* eslint no-param-reassign: 0 */
    page.matchPath = '/admin/*';
    createPage(page);
  }
};
