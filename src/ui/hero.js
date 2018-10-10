import React from "react";
import styled, { css, injectGlobal } from "react-emotion";
import { Heading } from "../styles/core";
import road from "../images/road.jpg";

const Hero = styled.div``;
const Centered = styled.div`
  width: 100%;
`;

export default () => (
  <Hero>
    <Heading>Levi Robertson</Heading>
    <h3>JavaScript Coaching & Consulting</h3>
    <p>
      I am a full-stack JavaScript Developer living in Phoenix, Arizona. I
      specialize on the front-end, I have an affinity for React and functional
      programming. I have a weekly newsletter about Functional Programming with
      JavaScript that you can sign up for below.
    </p>
    <Centered>
      <form
        action="https://www.getdrip.com/forms/428751402/submissions"
        method="post"
        data-drip-embedded-form="428751402"
      >
        <h3 data-drip-attribute="headline">Learn Functional Programming!</h3>
        <div data-drip-attribute="description" />
        <input name="fields[email]" placeholder="Email" />
        <button type="submit">Sign Up!</button>
      </form>
    </Centered>
  </Hero>
);
