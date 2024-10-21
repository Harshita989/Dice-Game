import React from "react";
import styled from "styled-components";
const Totalscore = ({ score }) => {
  return (
    <Scorecontainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Scorecontainer>
  );
};

export default Totalscore;
const Scorecontainer = styled.div`
  h1 {
    font-size: 100px;
    line-height: 100px;
    max-width: 200px;
    text-align: center;
  }
  p {
    font-size: 24px;
    max-width: 200px;
    text-align: center;
  }
`;
