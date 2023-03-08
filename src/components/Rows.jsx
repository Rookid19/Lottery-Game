import React from "react";
import useRow from "../hooks/useRows";
import { buttons, button_selectors, rows } from "../utils/Data";

function Rows({ gameDescription,selectors,selectionType }) {
  const {
    onSelect,
    selectArray,
    selectFilter,
    onSelectAll,
    onClear,
  } = useRow();

  const number_of_rows = gameDescription.rowName.length;
  const columns = gameDescription.columns;
  const start = gameDescription.name === "First 3 sum of Group" ? 1 : 0;
  return (
    <div className="rows_container">
      {rows.slice(0, number_of_rows).map((row, i) => (
        <div key={i}>
          <div className="row_horizontal">
            <span id="row_name">{gameDescription.rowName[i]}</span>
            <div className="button_container">
              {buttons.slice(start, columns).map((label) => (
                <button
                  className="button_number"
                  key={label}
                  onClick={() => onSelect(label, row,selectionType)}
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
            {!selectors && (
              <div className="button_selectors_section">
                {button_selectors.map(({ id, label }) => (
                  <button
                    className="button_selector"
                    key={id}
                    onClick={() => selectFilter(label, row, columns)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
          {i + 1 === number_of_rows && number_of_rows > 1 && (
            <div className="all_clear">
              <div>
                {buttons.slice(0, columns).map((label, index) => (
                  <button
                    key={label}
                    className="button_all"
                    onClick={() =>
                      onSelectAll(label, index, number_of_rows, columns)
                    }
                  >
                    All
                  </button>
                ))}
              </div>

              <div>
                {buttons.slice(0, columns).map((label) => (
                  <button
                    key={label}
                    className="button_all"
                    onClick={() => onClear(label)}
                  >
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
