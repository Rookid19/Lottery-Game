import React from "react";
import { first3GamesData } from "../../utils/Data";


function Pick2({ first3Tab, setFirst3Tab }) {
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
      {/* {first3Tab === 1 ? (
        <First3StraightJoint />
      ) : first3Tab === 2 ? (
        <First3StraightCombo />
      ) : first3Tab === 3 ? (
        <SumOfFirst3 />
      ) : first3Tab === 4 ? (
        <SpanOfFirst3 />
      ) : first3Tab === 5 ? (
        <First3Group3 />
      ) : first3Tab === 6 ? (
        <First3Group6 />
      ) : first3Tab === 7 ? (
        <First3SumOfGroup />
      ) : first3Tab === 8 ? (
        <First3FixedDigit />
      ) : first3Tab === 9 ? (
        <First3sumOfTails />
      ) : null} */}
    </div>
  );
}

export default Pick2;
