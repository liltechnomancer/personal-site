import React from "react";
import styled, { css, injectGlobal } from "react-emotion";
import { Heading } from "../styles/core";
import road from "../images/road.jpg";

const Hero = styled.div``;
const Centered = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  h3 {
    margin: 5px;
  }
`;

const Button = styled.button`
  outline: none;
  margin: 10px auto;
  width: 200px;
  height: 40px;
  text-align: center;
  width: 130px;
  border-radius: 40px;
  background: #fff;
  border: 2px solid #1ca086;
  color: #1ca086;
  transition: all 0.25s ease;
  &:hover {
    background: #1ca086;
    color: white;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
      <Form
        action="https://www.getdrip.com/forms/428751402/submissions"
        method="post"
        data-drip-embedded-form="428751402"
      >
        <h3 data-drip-attribute="headline">Learn Functional Programming!</h3>
        <div data-drip-attribute="description" />
        <Button type="submit">Sign Up!</Button>
      </Form>
    </Centered>
  </Hero>
);
