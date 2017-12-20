import React from "react";
import Link from "gatsby-link";
import styled, { css, injectGlobal } from "react-emotion";
import header from "../images/blur.jpg";
import { Content } from "../styles/layout.js";
import { Nav, Title } from "../styles/core.js";
import Links from "../ui/nav-links";
import hero from "../images/road.jpg";
import { background } from "../styles/core.js";
import Img from "gatsby-image";
import BackgroundImage from "../ui/background-image";

import { rhythm } from "../utils/typography";

const LinkContainer = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
`;

const inBack = css`
  position: fixed !important;
  z-index: -1 !important;
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
`;

const Site = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

export default ({ children, data }) => (
  <Site>
    <Content>
      <Nav style={{ padding: "0 2rem" }}>
        <Link to={`/`}>
          <Title>{data.site.siteMetadata.title}</Title>
        </Link>
        <Links />
      </Nav>
      <Container>{children()}</Container>
    </Content>
  </Site>
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
