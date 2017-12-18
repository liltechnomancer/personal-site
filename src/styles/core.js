import styled, { css, injectGlobal } from "react-emotion";
import { rhythm } from "../utils/typography";

export const Button = styled.button`
  background-color: Transparent;
  line-height: 100%;
  color: #d24d57;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  transition: all 0.25s ease;
  border: 0.15rem solid #d24d57;
`;
export const Background = styled.img`
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
export const H3 = styled.h3`
  marginbottom: ${rhythm(1 / 4)};
`;

export const Heading = styled.h1`
  display: inline-block;
`;

export const Title = styled.h3`
  display: inline-block;
  font-style: normal;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  padding: 0 1rem 0 0;
  align-items: baseline;
  justify-content: space-between;
`;

export const Links = styled.p`
  margin: 0;
  padding: 0;
  text-decoration: none;
`;

export const linkStyle = css({
  boxShadow: "none",
  textShadow: "none",
  background: "none"
});
