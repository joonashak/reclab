import React from 'react';
import { node, shape, string } from 'prop-types';
import Layout from './components/Layout';

const PageWrapper = ({ page, children }) => (
  <Layout page={page}>{children}</Layout>
);

PageWrapper.propTypes = {
  children: node.isRequired,
  page: shape({
    language: string.isRequired,
  }).isRequired,
};

export default PageWrapper;
