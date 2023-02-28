import React from "react";
import useRow from "../hooks/useRows";
import { buttons, button_selectors, rows } from "../utils/Data";

function Rows({ gameDescription }) {
  const { onSelect, selectArray, selectFilter, onSelectAll } = useRow();
  const number_of_rows = gameDescription.rowName.length;
  return (
    <div className="rows_container">
      {rows.slice(0, number_of_rows).map((row, i) => (
        <div key={i}>
          <div className="row_horizontal">
            <span id="row_name">{gameDescription.rowName[i]}</span>
            <div className="button_container">
              {buttons.map((label) => (
                <button
                  className="button_number"
                  key={label}
                  onClick={() => onSelect(label, row)}
                  style={{
                    backgroundColor: selectArray(row)?.includes(label)
                      ? "#2e99e9"
                      : null,
                    color: selectArray(row)?.includes(label) ? "white" : null,
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="button_selectors_section">
              {button_selectors.map(({ id, label }) => (
                <button
                  className="button_selector"
                  key={label}
                  onClick={() => selectFilter(label, row)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          {i + 1 === number_of_rows && (
            <div className="all_clear">
              <div>
                {buttons.map((label, index) => (
                  <button
                    key={label}
                    className="button_all"
                    onClick={() => onSelectAll(label, index, number_of_rows)}
                  >
                    All
                  </button>
                ))}
              </div>
              <div>
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
