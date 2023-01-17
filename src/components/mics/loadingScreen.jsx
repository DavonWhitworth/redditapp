import React from "react";
import styled, { keyframes } from "styled-components";
import RedditIcon from "../../Utils/files/redditIcon.png";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 0.75s linear infinite;
  padding: 5px;
  font-size: 1.2rem;
  max-width: 400px;
`;

export default function loadingScreen() {
  return (
    <div>
      Loading, please wait.
      <Rotate>
        <img
          src={RedditIcon}
          alt="Spinning reddit icon to show my site is not broken but slow"
        />
      </Rotate>
    </div>
  );
}
