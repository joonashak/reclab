/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';

export default ({ data }) => (
  <div>
    <h1>Hello production!</h1>
    <p>This page is deployed through github actions.</p>
    <p>Now go build something great.</p>
    {data.allPage.nodes.map((a) => <p key={a.title}>{a.title}</p>)}
    <Link to="/page-2/">Go to page 2</Link>
    {' '}
    <br />
    <Link to="/using-typescript/">Go to Using TypeScript</Link>
  </div>
);

export const query = graphql`
  query {
    allPage(filter: {id: {ne: "dummy"}}) {
      nodes {
        title
        content
        id: alternative_id
      }
    }
  }
`;
