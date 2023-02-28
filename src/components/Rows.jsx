import React from "react";
import { buttons, rows } from "../utils/Data";

function Rows({ gameDescription }) {
  return (
    <div className="rows_container">
      {rows.slice(0, 2).map((row,i) => (
        <div className="row_horizontal">
          <span>{gameDescription.rowName[i]}</span>
          <div className="button_container">
            {buttons.map((label) => (
              <button className="button" key={label}>
                {label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rows;
