import React from "react";
// import "reset-css";
// import { css } from "glamor";
import Link from "gatsby-link";
import styled, { css, injectGlobal } from "react-emotion";
import header from "../images/blur.jpg";

import { rhythm } from "../utils/typography";

const linkStyle = css({ float: `right` });

const Content = styled.div`
  margin: 0 auto;
  padding: 0 ${rhythm(1 / 4)};
  max-width: 800px;
`;

const Title = styled.h3`
  display: inline-block;
  font-style: normal;
`;

const Notif = styled.div`
  text-align: center;
  padding: ${rhythm(1 / 4)};
  background-color: #d8e6e7;
  margin: 0;
`;

// ":hover,:active,:focus": {
//   backgroundColor: "#D24D57",
//   color: "white"
// },
const Button = styled.button`
  background-color: Transparent;
  line-height: 100%;
  color: #d24d57;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  transition: all 0.25s ease;
  border: 0.15rem solid #d24d57;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  padding: 0 1rem 0 0;
  align-items: baseline;
  justify-content: space-between;
`;

const Links = styled.p`
  margin: 0;
  padding: 0;
  text-decoration: none;
`;

export default ({ children, data }) => (
  <Content>
    <Nav>
      <Link to={`/`}>
        <Title>{data.site.siteMetadata.title}</Title>
      </Link>
      <Link
        style={{ backgroundImage: "none" }}
        className={linkStyle}
        to={`/about/`}
      >
        <Links>About</Links>
      </Link>
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
