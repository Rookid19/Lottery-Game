import React, { useState } from "react";
import { all5GamesData, gamesDescription } from "../../utils/Data";
import All5Group20 from "./All5Group20";

function All5({ all5Tab, setAll5Tab }) {
  return (
    <div className="all5_container">
      <div className="games_heading">
        {all5GamesData.map(({ id, label }) => (
          <button key={id} onClick={() => setAll5Tab(id)}>
            {label}
          </button>
        ))}
      </div>
      {all5Tab === 1 ? <All5Group20  /> : null}
    </div>
  );
}

export default All5;
