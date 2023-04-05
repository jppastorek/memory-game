import React from "react";
import CardsGrid from "./CardsGrid/CardsGrid";
import ScoreBoard from "./ScoreBoard/Scoreboard";

const Main = () => {
  return (
    <div className="main">
      <ScoreBoard />
      <CardsGrid />
    </div>
  );
};

export default Main;
