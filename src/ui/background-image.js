import React from "react";
import Img from "gatsby-image";
import styled, { css, injectGlobal } from "react-emotion";
import { background } from "../styles/core.js";

const inBack = css`
  position: fixed !important;
  z-index: -1 !important;
`;

export default ({ image }) => (
  <Img
    fadeIn={false}
    position={"absolute"}
    outerWrapperClassName={inBack}
    className={background}
    sizes={image}
    style={{ display: "inherit" }}
  />
);
