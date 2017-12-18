import React from "react";
import styled, { css, injectGlobal } from "react-emotion";
import { Heading } from "../styles/core";

const Hero = styled.div`
  color: black;
`;

export default () => (
  <Hero>
    <Heading>Levi Robertson</Heading>
    <h3>JavaScript Developer</h3>
    <p>
      I am a freelance full-stack JavaScript Developer living in Phoenix,
      Arizona. I specialize on the front-end, I have an affinity for React and
      functional programming.
    </p>
  </Hero>
);
