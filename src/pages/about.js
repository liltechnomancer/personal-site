import React from "react";
import BackgroundImage from "../ui/background-image";

export default ({ data }) => {
  return (
    <div>
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
