import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import lvlUp from "../images/logo-square.svg";
import cbs from "../images/cbs.svg";
import hero from "../images/road.jpg";

import styled, { css, injectGlobal } from "react-emotion";
import { rhythm } from "../utils/typography";

const Heading = styled.h1`
  display: "inline-block";
`;

const H3 = styled.h3`
  marginbottom: ${rhythm(1 / 4)};
`;

const Span = styled.span``;

const Img = styled.img`
  width: 3rem;
  display: inline;
  vertical-align: middle;
`;

const Box = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Space = styled.div`
  display: grid;
  grid-column-gap: ${rhythm(1)};
  grid-template-columns: 3rem auto;
  justify-self: start;
`;

const WorkTitle = styled.h4`
  display: inline;
  margin-top: 0;
`;

const Hero = styled.div`
  color: black;
`;

const Background = styled.img`
  max-height: 100%;
  min-width: 100%
  overflow: hidden;
  position: fixed;
  right: 0;
  bottom: 0;
  margin-bottom: -20px;
  filter: blur(15px) opacity(30%) grayscale(30%);
  z-index: -1;
  background-position: right;
  background-repeat: no-repeat;
`;

const LinkStyle = {
  boxShadow: "none",
  textShadow: "none",
  background: "none"
};

export default ({ data }) => {
  console.log(hero);
  const posts = data.allMarkdownRemark.edges;
  const totalPosts = data.allMarkdownRemark.totalCount;
  return (
    <div>
      <Background src={hero} />
      <Hero>
        <Heading>Levi Robertson</Heading>
        <h3>JavaScript Developer</h3>
        <p>
          I am a freelance full-stack JavaScript Developer living in Phoenix,
          Arizona. I specialize on the front-end, I have an affinity for React
          and functional programming.
        </p>
      </Hero>
      <Heading>Past Clients.</Heading>
      <Box>
        <Space>
          <Img src={lvlUp} alt="Level Up Tutorials logo" />
          <div>
            <WorkTitle>Level Up Tutorials</WorkTitle>
            <p>JavaScript Development</p>
          </div>
        </Space>
        <Space>
          <Img src={cbs} />
          <div>
            <WorkTitle>CBS</WorkTitle>
            <p>Automation Engineer</p>
          </div>
        </Space>
      </Box>
      <Heading>Stuff I have said.</Heading>
      <h4>{totalPosts} Posts</h4>
      {posts.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug} css={LinkStyle}>
            <H3>
              {node.frontmatter.title} <Span>— {node.frontmatter.date}</Span>
            </H3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
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
