import React, { useEffect } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { StaticQuery, graphql } from 'gatsby';
import PageWrapper from '../PageWrapper';

const query = graphql`
  query {
    allMdx {
      nodes {
        body
        internal {
          content
        }
      }
    }
  }
`;

const Page = ({ pageContext }: InferProps<typeof Page.propTypes>) => {
  const { t, i18n } = useTranslation();
  console.log(pageContext.data.internal.content);

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
      {/* }
      <MDXRenderer>
        {pageContext.data.internal.content}
      </MDXRenderer>
  */}
      <StaticQuery query={query}>
        {(data) => {
          console.log(data.allMdx.nodes[0]);

          return <MDXRenderer>
          {data.allMdx.nodes[0].body}
        </MDXRenderer>
        }}
      </StaticQuery>
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
