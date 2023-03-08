import React from "react";
import {  mid3GamesData } from "../../utils/Data";
import Mid3Straightjoint from "./Mid3Straightjoint";

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
      {mid3Tab === 1 ? <Mid3Straightjoint /> : null}
      {/* {all5Tab === 5 ? (
        <All5Group20 />
      ) : all5Tab === 1 ? (
        <All5StraightJoint />
      ) : all5Tab === 2 ? (
        <AllStraight5Combo />
      ) : all5Tab === 3 ? (
        <All5Group120 />
      ) : all5Tab === 4 ? (
        <All5Group60 />
      ) : null} */}
    </div>
  );
}

export default Mid3;
