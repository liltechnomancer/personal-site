import React from "react";
import { Heading } from "../styles/core";
import { Box, Space } from "../styles/layout.js";
import lvlUp from "../images/logo-square.svg";
import cbs from "../images/cbs.svg";
import bloc from "../images/bloc.png";
import americanExpress from "../images/american_express.svg";
import uhaul from "../images/uhaul.png";
import styled, { css, injectGlobal } from "react-emotion";

const thinkfulData = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNC40IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNC40IDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cjx0aXRsZT5UaGlua2Z1bCBMb2dvIEJsYWNrQDJ4PC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+Cjxwb2x5Z29uIGlkPSJGaWxsLTEiIHBvaW50cz0iMCwwIDAsOS4yIDcuNiw5LjIgNy42LDE3IDkuOSwxNyA5LjksNi45IDIuNCw2LjkgMi40LDIuMyAxNy4zLDIuMyAxNy4zLDAgIi8+Cjxwb2x5Z29uIGlkPSJGaWxsLTIiIHBvaW50cz0iMjIsMCAyMiw2LjggMTQuNSw2LjggMTQuNSwyMS42IDcuNiwyMS42IDcuNiwyMy45IDE2LjgsMjMuOSAxNi44LDkuMiAyNC40LDkuMiAyNC40LDAgIi8+Cjwvc3ZnPgo=`;

const Img = styled.img`
  width: 3rem;
  display: inline;
  vertical-align: middle;
`;

const WorkTitle = styled.h5`
  display: inline;
  margin-top: 0;
`;

const Role = styled.p`
  color: #6a6a6a;
  font-size: 0.5rem;
`;

const CenterImage = styled.div`
  display: flex;
  align-items: center;
`;

const Client = styled.div`
  margin: 1px;
  display: flex;
`;

export default () => [
  <Heading key="heading">Trusted By</Heading>,
  <Box key="clients">
    <Space>
      <Img src={lvlUp} alt="Level Up Tutorials logo" />
      <div>
        <WorkTitle>Level Up Tutorials</WorkTitle>
        <Role>JavaScript Development</Role>
      </div>
    </Space>
    <Space>
      <Img src={cbs} />
      <div>
        <WorkTitle>CBS</WorkTitle>
        <Role>Automation Engineer</Role>
      </div>
    </Space>
    <Space>
      <Img src={americanExpress} />
      <div>
        <WorkTitle>American Express</WorkTitle>
        <Role>Automation Engineer</Role>
      </div>
    </Space>
    <Space>
      <Img src={thinkfulData} />
      <div>
        <WorkTitle>Thinkful</WorkTitle>
        <Role>Automation Engineer</Role>
      </div>
    </Space>
    <Space>
      <CenterImage>
        <Img src={uhaul} />
      </CenterImage>
      <div>
        <WorkTitle>U-Haul</WorkTitle>
        <Role>Automation Engineer</Role>
      </div>
    </Space>
    <Space>
      <CenterImage>
        <Img src={bloc} />
      </CenterImage>
      <div>
        <WorkTitle>Bloc</WorkTitle>
        <Role>Automation Engineer</Role>
      </div>
    </Space>
  </Box>
];
