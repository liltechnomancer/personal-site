import React from "react";
import Link from "gatsby-link";
import styled, { css, injectGlobal } from "react-emotion";
import { Heading, linkStyle, H3 } from "../styles/core";
const Span = styled.span``;

export default ({ posts, total }) => {
  return [
    <Heading key="heading">Blog Posts</Heading>,
    <h4 key="total">{total} Posts</h4>,
    <div key="posts">
      {posts.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug} css={linkStyle}>
            <H3>
              {node.frontmatter.title} <Span>— {node.frontmatter.date}</Span>
            </H3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  ];
};
