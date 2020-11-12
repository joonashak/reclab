import { Link } from 'gatsby-theme-material-ui';
import Headings from './Headings';
import Blockquote from './Blockquote';
import Image from './Image';
import MockImage from '../test/MockImage';

// Shortcodes for use with <MDXProvider>.
export default {
  h1: Headings.H1,
  h2: Headings.H2,
  h3: Headings.H3,
  h4: Headings.H4,
  h5: Headings.H5,
  h6: Headings.H6,
  Link,
  Blockquote,
  Image: process.env.CI ? MockImage : Image,
};
