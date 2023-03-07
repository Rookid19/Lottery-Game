import React from "react";
import { first3GamesData } from "../../utils/Data";
import First3Group3 from "./First3Group3";
import First3Group6 from "./First3Group6";
import First3StraightCombo from "./First3StraightCombo";
import First3StraightJoint from "./First3StraightJoint";
import First3SumOfGroup from "./First3SumOfGroup";
import SpanOfFirst3 from "./SpanOfFirst3";
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
      ) : first3Tab === 4 ?(
        <SpanOfFirst3 />
      ): first3Tab === 5 ? (
        <First3Group3 />
      ): first3Tab === 6 ? (
        <First3Group6 />
      ): first3Tab === 7 ?(
        <First3SumOfGroup />
      ) : null}
    </div>
  );
}

export default First3;
