import React, { useEffect } from 'react';
import { InferProps, shape, string } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import PageWrapper from '../PageWrapper';
import components from '../components/mdx/components';

const Page = ({ pageContext }: InferProps<typeof Page.propTypes>) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(pageContext.data.language);
  }, []);

  return (
    <PageWrapper page={pageContext.data}>
      <MDXProvider components={components}>
        <MDXRenderer>
          {pageContext.data.childMdx.body}
        </MDXRenderer>
      </MDXProvider>
    </PageWrapper>
  );
};

Page.propTypes = {
  pageContext: shape({
    data: shape({
      title: string.isRequired,
      content: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Page;
