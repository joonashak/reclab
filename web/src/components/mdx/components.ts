import { Link } from 'gatsby-theme-material-ui';
import { Typography } from '@material-ui/core';
import Headings from './Headings';
import Blockquote from './Blockquote';
import Image from './Image';
import MockImage from '../test/MockImage';
import YouTube from './YouTube';
import Center from './Center';

// Shortcodes for use with <MDXProvider>.
export default {
  p: Typography,
  h1: Headings.H1,
  h2: Headings.H2,
  h3: Headings.H3,
  h4: Headings.H4,
  h5: Headings.H5,
  h6: Headings.H6,
  Link,
  Blockquote,
  Image: process.env.CI ? MockImage : Image,
  YouTube,
  Center,
};
