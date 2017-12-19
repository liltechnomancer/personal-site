import React from "react";
import Hero from "../ui/hero";
import Clients from "../ui/clients";
import Posts from "../ui/posts";
import BackgroundImage from "../ui/background-image";

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const totalPosts = data.allMarkdownRemark.totalCount;
  return (
    <div>
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
