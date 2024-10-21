import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <Rulescontainer>
      <h2>How to play the Dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </Rulescontainer>
  );
};

export default Rules;

const Rulescontainer = styled.div`
  background-color: #fbf1f1;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
  h2 {
    font-sizze: 20px;
  }
  .text {
    margin-top: 20px;
  }
`;
