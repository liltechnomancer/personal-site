import React from "react";
import Posts from "../ui/posts";
import hero from "../images/road.jpg";
import { Background } from "../styles/core.js";

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const total = data.allMarkdownRemark.totalCount;
  return [<Background src={hero} />, <Posts posts={posts} total={total} />];
};

export const query = graphql`
  query BlogQuery {
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
