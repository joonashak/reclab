import React from 'react';
import PropTypes from 'prop-types';
import Layout from './components/Layout';

const PageWrapper = ({ page, children }) => (
  <Layout page={page}>{children}</Layout>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.shape({
    language: PropTypes.string.isRequired,
  }).isRequired,
};

export default PageWrapper;
