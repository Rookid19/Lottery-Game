import React, { useState } from "react";
import { all5GamesData, gamesDescription } from "../../utils/Data";
import All5Group20 from "./All5Group20";
import AllStraight5Combo from "./All5StraightCombo";
import All5StraightJoint from "./All5StraightJoint";

function All5({ all5Tab, setAll5Tab }) {
  return (
    <div className="all5_container">
      <div className="games_heading">
        {all5GamesData.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setAll5Tab(id)}
            className="heading_button"
            style={{
              color: all5Tab === id ? "white" : "#2e99e9",
              backgroundColor: all5Tab === id ? "#2e99e9" : "white",
            }}
          >
            {label}
          </button>
        ))}
      </div>
      {all5Tab === 5 ? <All5Group20 /> : all5Tab === 1 ? <All5StraightJoint /> :all5Tab === 2 ? <AllStraight5Combo /> : null}
    </div>
  );
}

export default All5;
