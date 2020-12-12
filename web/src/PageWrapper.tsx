import React from 'react';
import { node, shape, string } from 'prop-types';
import Helmet from 'react-helmet';
import Layout from './components/Layout';

const PageWrapper = ({ page, children }) => (
  <>
    <Helmet>
      <title>{`${page.title} - Recover Laboratory`}</title>
    </Helmet>
    <Layout page={page}>{children}</Layout>
  </>
);

PageWrapper.propTypes = {
  children: node.isRequired,
  page: shape({
    language: string.isRequired,
  }).isRequired,
};

export default PageWrapper;
