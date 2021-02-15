require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const staticPlugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-theme-material-ui',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'components',
      path: `${__dirname}/src/components/mdx`,
    },
  },
  {
    resolve: 'gatsby-plugin-sharp',
    options: {
      icon: 'src/images/palli.png',
    },
  },
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1200,
          },
        },
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Recover Laboratory',
      short_name: 'Reclab',
      start_url: '/',
      background_color: '#FFF',
      theme_color: '#FFF',
      display: 'minimal-ui',
      icon: 'src/images/palli.png',
    },
  },
  {
    resolve: 'gatsby-source-apiserver',
    options: {
      entitiesArray: [
        {
          url: `${process.env.CMS_URL}/menu`,
          method: 'get',
          name: 'Menu',
        },
        {
          url: `${process.env.CMS_URL}/settings`,
          method: 'get',
          name: 'Settings',
        },
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-eslint',
    options: {
      test: /\.ts$|\.tsx$/,
      exclude: /(node_modules|.cache|public)/,
      stages: ['develop'],
      options: {
        emitWarning: true,
        failOnError: false,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Roboto', 'Oxygen'],
      },
    },
  },
  'gatsby-transformer-react-docgen',
];

// These fail if Cloudinary credentials are not supplied (testing/CI).
const imagePlugins = [
  'gatsby-remark-images',
  {
    resolve: 'gatsby-source-cloudinary',
    options: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      maxResults: 1000,
    },
  },
  {
    resolve: 'gatsby-plugin-remote-images',
    options: {
      nodeType: 'CloudinaryMedia',
      imagePath: 'secure_url',
      name: 'imagesFromCdn',
    },
  },
];

const plugins = process.env.CLOUDINARY_CLOUD_NAME
  ? staticPlugins.concat(imagePlugins)
  : staticPlugins;

module.exports = {
  siteMetadata: {
    title: 'Recover Laboratory',
    description:
      'Recover Laboratory is a  Finnish multi-art company led by Miradonna Sirkka, Sofi Häkkinen and Inna Huttunen.',
    author: 'Recover Laboratory',
    languages: ['fi', 'en'],
  },
  plugins,
};
