import React from "react";
import { buttons, button_selectors, rows } from "../utils/Data";

function Rows({ gameDescription }) {
  return (
    <div className="rows_container">
      {rows.slice(0, gameDescription.rowName.length).map((row, i) => (
        <div key={i}>
          <div className="row_horizontal" >
            <span id="row_name">{gameDescription.rowName[i]}</span>
            <div className="button_container">
              {buttons.map((label) => (
                <button className="button_number" key={label}>
                  {label}
                </button>
              ))}
            </div>
            <div className="button_selectors_section">
              {button_selectors.map(({ id, label }) => (
                <button className="button_selector" key={label}>{label}</button>
              ))}
            </div>
          </div>
          {i + 1 === gameDescription.rowName.length && (
            <div className="all_clear">
              <div >
                {buttons.map((label, index) => (
                  <button key={label} className="button_all">
                    All
                  </button>
                ))}
              </div>
              <div >
                {buttons.map((label, index) => (
                  <button key={label} className="button_all">
                    Clear
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Rows;
