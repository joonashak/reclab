require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const staticPlugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-theme-material-ui',
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
  /*
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
  */
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

// These fail if Cloudinary credentials are not supplied (testing/CI).
const imagePlugins = [
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-remark-images',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`,
    },
  },
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
  /*
  {
    resolve: 'gatsby-transformer-cloudinary',
    options: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
  },
  */
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
