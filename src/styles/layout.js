import styled, { css, injectGlobal } from "react-emotion";
import { rhythm } from "../utils/typography";

export const Content = styled.div`
  outline: 2px solid #1ca086;
  margin: 0.5rem;
  background-color: rgba(255, 255, 255, 0.35);
  max-width: 900px;
`;

export const Box = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const Space = styled.div`
  display: grid;
  grid-column-gap: ${rhythm(1)};
  grid-template-columns: 2rem 8rem;
  justify-self: start;
`;

export const Post = styled.div`
  p > img {
    width: 100%;
  }
`;
