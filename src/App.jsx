import React, { useState } from "react";
import styled from "styled-components";
import Startgame from "./components/Startgame";
import Gameplay from "./components/Gameplay";
const App = () => {
  const [isgamestarted, setisgamestarted] = useState(false);

  const togglegameplay = () => {
    setisgamestarted((prev) => !prev);
  };
  return (
    <div>
      {isgamestarted ? <Gameplay /> : <Startgame toggle={togglegameplay} />}
      {/* <Startgame /> */}
    </div>
  );
};

export default App;
