import React from "react";
import Results from "../../components/Results";
import useRow from "../../hooks/useRows";
import { buttons, button_selectors } from "../../utils/Data";

function Sum() {
  const { selectArray, onSelect, firstArray,selectFilter } = useRow();
  return (
    <div>
      <div className="game_rule" style={{ marginTop: 20 }}>
        How to play:Select 1 value, and sum of 3 winning No. same, as win. Win
        Sample：Bet plan: 5; Winning No.:1,2,2,as win.
      </div>
      <div style={{ display:'flex' }}>
        <div className="button_container">
          {buttons.slice(3, 19).map((label) => (
            <button
              className="button_number"
              key={label}
                onClick={() => onSelect(label, 1)}
              style={{
                backgroundColor: selectArray(1)?.includes(label)
                  ? "#2e99e9"
                  : null,
                color: selectArray(1)?.includes(label) ? "white" : null,
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
              key={id}
              onClick={() => selectFilter(label, 1, 'sum')}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <Results bets={firstArray.length} />
    </div>
  );
}

export default Sum;
