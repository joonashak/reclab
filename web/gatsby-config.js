require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const staticPlugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-theme-material-ui',
  'gatsby-plugin-mdx',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'gatsby-starter-default',
      short_name: 'starter',
      start_url: '/',
      background_color: '#663399',
      theme_color: '#663399',
      display: 'minimal-ui',
      icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
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
];

const imagePlugins = [
  {
    resolve: 'gatsby-source-cloudinary',
    options: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
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
  {
    resolve: 'gatsby-transformer-cloudinary',
    options: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
  },
];

const plugins = process.env.CLOUDINARY_CLOUD_NAME
  ? staticPlugins.concat(imagePlugins)
  : staticPlugins;

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
    languages: ['fi', 'en'],
  },
  plugins,
};
