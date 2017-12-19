import styled, { css, injectGlobal } from "react-emotion";
import { rhythm } from "../utils/typography";

export const Content = styled.div`
  outline: 2px solid #1ca086;
  margin: 0.5rem;
  padding: 0 ${rhythm(1 / 4)};
  background-color: rgba(255, 255, 255, 0.35);
  max-width: 800px;
`;
export const Box = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const Space = styled.div`
  display: grid;
  grid-column-gap: ${rhythm(1)};
  grid-template-columns: 3rem auto;
  justify-self: start;
`;
