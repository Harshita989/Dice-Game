import React, { useState } from "react";
import styled from "styled-components";

const Rolldice = ({ currentdice, rolldice }) => {
  return (
    <Dicecontainer>
      <div className="dice" onClick={rolldice}>
        <img src={`dice_${currentdice}.png`} alt="dice" />
      </div>
      <p>Click on the dice to roll</p>
    </Dicecontainer>
  );
};

export default Rolldice;

const Dicecontainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  //   margin-top: 48px;

  .dice {
    cursor: pointer;
  }
`;
