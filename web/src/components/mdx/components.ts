import Headings from './Headings';
import Blockquote from './Blockquote';
import MockImage from '../test/MockImage';
import YouTube from './YouTube';
import Center from './Center';
import PersonCard from './PersonCard';
import Ingress from './Ingress';
import InfoTable from './InfoTable';
import Gallery from './Gallery';
import Paragraph from './Paragraph';
import Link from './Link';
import InlineImage from './images/InlineImage';

// Shortcodes for use with <MDXProvider>.
export default {
  p: Paragraph,
  h1: Headings.H1,
  h2: Headings.H2,
  h3: Headings.H3,
  h4: Headings.H4,
  h5: Headings.H5,
  h6: Headings.H6,
  Link,
  Blockquote,
  Image: process.env.CI ? MockImage : InlineImage,
  YouTube,
  Center,
  PersonCard,
  Ingress,
  InfoTable,
  Gallery,
};
