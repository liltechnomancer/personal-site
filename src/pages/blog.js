import React from "react";
import Posts from "../ui/posts";
import BackgroundImage from "../ui/background-image";

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const total = data.allMarkdownRemark.totalCount;
  return [
    <Posts key="posts" posts={posts} total={total} />,
    <BackgroundImage key="background" image={data.file.childImageSharp.sizes} />
  ];
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
    file(relativePath: { eq: "images/road.jpg" }) {
      childImageSharp {
        sizes(maxHeight: 900) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  }
`;
