import React from "react";
import { mid3GamesData } from "../../utils/Data";
import Mid3FixedDigit from "./Mid3FixedDigit";
import Mid3Group3 from "./Mid3Group3";
import Mid3Group6 from "./Mid3Group6";
import Mid3StraightCombo from "./Mid3StraightCombo";
import Mid3StraightJoint from "./Mid3StraightJoint";
import Mid3SumOfGroup from "./Mid3SumOfGroup";
import Mid3SumOfTails from "./Mid3SumOfTails";
import SpanOfMid3 from "./SpanOfMid3";
import SumOfMid3 from "./SumOfMid3";

function Mid3({ mid3Tab, setMid3Tab }) {
  return (
    <div className="all5_container">
      <div className="games_heading">
        {mid3GamesData.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setMid3Tab(id)}
            className="heading_button"
            style={{
              color: mid3Tab === id ? "white" : "#2e99e9",
              backgroundColor: mid3Tab === id ? "#2e99e9" : "white",
            }}
          >
            {label}
          </button>
        ))}
      </div>
      {mid3Tab === 1 ? (
        <Mid3StraightJoint />
      ) : mid3Tab === 2 ? (
        <Mid3StraightCombo />
      ) : mid3Tab === 3 ? (
        <SumOfMid3 />
      ) : mid3Tab === 4 ? (
        <SpanOfMid3 />
      ) : mid3Tab === 5 ? (
        <Mid3Group3 />
      ) : mid3Tab === 6 ? (
        <Mid3Group6 />
      ) : mid3Tab === 7 ? (
        <Mid3SumOfGroup />
      ) : mid3Tab === 8 ? (
        <Mid3FixedDigit />
      ) : (
        <Mid3SumOfTails />
      )}
    </div>
  );
}

export default Mid3;
