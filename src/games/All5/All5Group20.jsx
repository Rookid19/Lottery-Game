import React from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import { gamesDescription } from "../../utils/Data";

function All5Group20() {
  return (
    <div className="all520_container">
      <div className="game_rule">
        {gamesDescription.all5Group20.rules}
      </div>
      <Rows gameDescription={gamesDescription.all5Group20} />
      <Results />
    </div>
  );
}

export default All5Group20;
