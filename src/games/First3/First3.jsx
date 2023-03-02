import React from "react";
import { first3GamesData, gamesDescription } from "../../utils/Data";
import First3StraightCombo from "./First3StraightCombo";
import First3StraightJoint from "./First3StraightJoint";
import SumOfFirst3 from "./SumOfFirst3";

function First3({ first3Tab, setFirst3Tab }) {
  return (
    <div className="all5_container">
      <div className="games_heading">
        {first3GamesData.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setFirst3Tab(id)}
            className="heading_button"
            style={{
              color: first3Tab === id ? "white" : "#2e99e9",
              backgroundColor: first3Tab === id ? "#2e99e9" : "white",
            }}
          >
            {label}
          </button>
        ))}
      </div>
      {first3Tab === 1 ? (
        <First3StraightJoint />
      ) : first3Tab === 2 ? (
        <First3StraightCombo />
      ) : first3Tab === 3 ? (
        <SumOfFirst3 />
      ) : null}
    </div>
  );
}

export default First3;
