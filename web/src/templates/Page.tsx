import React, { useEffect } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PageWrapper from '../PageWrapper';
import components from '../components/mdx/components';

const query = graphql`
  query {
    file(childImageSharp: {fixed: {originalName: {eq: "meme.jpg"}}}) {
      relativePath
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Page = ({ pageContext }: InferProps<typeof Page.propTypes>) => {
  const { i18n } = useTranslation();
  const image = useStaticQuery(query);

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
      {image.file && (
        <Img fixed={image.file.childImageSharp.fixed} />
      )}
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
