import React from "react";
import Totalscore from "./Totalscore";
import Numberselector from "./Numberselector";
import styled from "styled-components";
import Rolldice from "./Rolldice";
import { useState } from "react";
import { Button } from "../styled/Button";
import Rules from "./rules";

const Gameplay = () => {
  const [score, setscore] = useState(0);
  const [selectednum, setselectednum] = useState();
  const [currentdice, setcurrentdice] = useState(1);
  const [error, seterror] = useState("");
  const [showrules, setshowrules] = useState(false);
  const randomno = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rolldice = () => {
    if (!selectednum) {
      seterror("you have not selected any number");

      return;
    }
    seterror("");
    const randomnumber = randomno(1, 7);
    setcurrentdice((_prev) => randomnumber);

    if (selectednum === randomnumber) {
      setscore((prev) => prev + randomnumber);
    } else {
      setscore((prev) => prev - 2);
    }
    setselectednum(undefined);
  };

  const resetscore = () => {
    setscore(0);
  };
  return (
    <Maincontainer>
      <div className="topsection">
        <Totalscore score={score} />
        <Numberselector
          selectednum={selectednum}
          setselectednum={setselectednum}
          error={error}
        />
      </div>
      <Rolldice currentdice={currentdice} rolldice={rolldice} />
      <div className="btn">
        <Button onClick={resetscore}>Reset</Button>
        <Button onClick={() => setshowrules((prev) => !prev)}>
          {showrules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showrules && <Rules />}
    </Maincontainer>
  );
};

export default Gameplay;

const Maincontainer = styled.div`
  .topsection {
    display: flex;
    justify-content: space-around;
    align-items: end;
    padding-top: 15px;
  }
  .btn {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
