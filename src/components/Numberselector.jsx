import React, { useState } from "react";
import styled from "styled-components";
const Numberselector = ({ error, selectednum, setselectednum }) => {
  const arrnum = [1, 2, 3, 4, 5, 6];

  return (
    <Numberselectorcontainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrnum.map((value, i) => (
          <Box
            isselected={value === selectednum}
            key={i}
            onClick={() => setselectednum(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select number</p>
    </Numberselectorcontainer>
  );
};

export default Numberselector;

const Numberselectorcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  ,
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  border-radius: 20px;
  font-size: 24px;
  font-weight: 700px;
  color: ${(props) => (props.isselected ? "white" : "black")};

  background-color: ${(props) => (props.isselected ? "black" : "white")};
`;
