import React from "react";
import { Post } from "../styles/layout";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Post>
      <h1>{post.frontmatter.title} </h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Post>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
