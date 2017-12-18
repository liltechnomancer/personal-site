import React from "react";
import { Heading } from "../styles/core";
import { Box, Space } from "../styles/layout.js";
import lvlUp from "../images/logo-square.svg";
import cbs from "../images/cbs.svg";
import styled, { css, injectGlobal } from "react-emotion";

const Img = styled.img`
  width: 3rem;
  display: inline;
  vertical-align: middle;
`;

const WorkTitle = styled.h4`
  display: inline;
  margin-top: 0;
`;

export default () => [
  <Heading key="heading">Clients</Heading>,
  <Box key="clients">
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
];
