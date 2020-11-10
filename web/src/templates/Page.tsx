import React, { useEffect } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import PageWrapper from '../PageWrapper';
import Testing from '../components/Testing';

const Page = ({ pageContext }: InferProps<typeof Page.propTypes>) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(pageContext.data.language);
  }, []);

  return (
    <PageWrapper page={pageContext.data}>
      <p>
        {t('test')}
      </p>
      <p>
        Language=
        {i18n.language}
      </p>
      <Typography variant="h3">{pageContext.data.title}</Typography>
      <Typography>{pageContext.data.content}</Typography>
      <MDXProvider components={{ Testing }}>
        <MDXRenderer>
          {pageContext.data.childMdx.body}
        </MDXRenderer>
      </MDXProvider>
    </PageWrapper>
  );
};

Page.propTypes = {
  pageContext: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Page;
