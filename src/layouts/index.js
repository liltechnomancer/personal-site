import React from "react";
// import "reset-css";
// import { css } from "glamor";
import Link from "gatsby-link";
import styled, { css, injectGlobal } from "react-emotion";
import header from "../images/blur.jpg";
import { Content } from "../styles/layout.js";
import { Nav, Links, Title } from "../styles/core.js";

import { rhythm } from "../utils/typography";

const LinkContainer = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
`;

export default ({ children, data }) => (
  <Content>
    <Nav>
      <Link to={`/`}>
        <Title>{data.site.siteMetadata.title}</Title>
      </Link>
      <LinkContainer>
        <Link style={{ backgroundImage: "none" }} to={`/about/`}>
          <Links>About</Links>
        </Link>
        <Link style={{ backgroundImage: "none" }} to={`/blog/`}>
          <Links>Blog</Links>
        </Link>
      </LinkContainer>
    </Nav>
    {children()}
  </Content>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
