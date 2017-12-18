import React from "react";
import hero from "../images/road.jpg";
import styled, { css, injectGlobal } from "react-emotion";
import { rhythm } from "../utils/typography";

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

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <Background src={hero} />
      <h1>Hi I'm Levi!</h1>
      <p>
        I am a JavaScript Developer with a passion for React. Sometimes I write
        stuff on Medium, but usually I make stuff for the web. Check out my
        work!
      </p>
    </div>
  );
};

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
