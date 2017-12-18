import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import hero from "../images/road.jpg";
import { Heading, H3, Background, linkStyle } from "../styles/core.js";
import { Box, Space } from "../styles/layout.js";

import styled, { css, injectGlobal } from "react-emotion";
import { rhythm } from "../utils/typography";
import Hero from "../ui/hero";
import Clients from "../ui/clients";
import Posts from "../ui/posts";

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const totalPosts = data.allMarkdownRemark.totalCount;
  return (
    <div>
      <Background src={hero} />
      <Hero />
      <Clients />
      <Posts posts={posts} total={totalPosts} />
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
