import React from "react";
import { all5GamesData, gamesDescription } from "../../utils/Data";
import All5Group20 from "./All5Group20";

function All5() {
  return (
    <div className="all5_container">
      <div className="games_heading">
        {all5GamesData.map(({ id, label }) => (
          <button>{label}</button>
        ))}
      </div>
      <All5Group20  />
    </div>
  );
}

export default All5;
