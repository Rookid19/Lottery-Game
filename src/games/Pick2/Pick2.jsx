import React from "react";
import { pick2Data } from "../../utils/Data";
import Pick2Joint from "./Pick2Joint";

function Pick2({ pick2Tab, setPick2Tab }) {
  return (
    <div className="all5_container">
      <div className="games_heading">
        {pick2Data.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setPick2Tab(id)}
            className="heading_button"
            style={{
              color: pick2Tab === id ? "white" : "#2e99e9",
              backgroundColor: pick2Tab === id ? "#2e99e9" : "white",
            }}
          >
            {label}
          </button>
        ))}
      </div>
      {pick2Tab === 1 ? <Pick2Joint /> : null}
    </div>
  );
}

export default Pick2;
