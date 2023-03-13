import React from "react";
import Results from "../../components/Results";
import useRow from "../../hooks/useRows";

function BSOEOfSum() {
  const { firstArray, onSelect } = useRow();
  const options = [
    {
      id: 1,
      label: "Big",
    },
    {
      id: 2,
      label: "Small",
    },
    {
      id: 3,
      label: "Odd",
    },
    {
      id: 4,
      label: "Even",
    },
  ];
  return (
    <div>
      <div className="game_rule" style={{marginTop:20}}>
        How to play:Pick 1 form (Big: 11-18; Small: 3-10; Odd: unit digit 1, 3,
        5, 7, 9; Even: unit digit 0, 2, 4, 6, 8), match the form of Sum of 3
        winning numbers to win. Win Sample：Bet plan: Small; Winning
        No.:1,2,3,as win.
      </div>

      <div className="bsoe">
        {options.map(({ label }) => (
          <div
            className="card"
            onClick={() => onSelect(label, 1)}
            style={{
              backgroundColor: firstArray.includes(label) ? "#7171dc" : null,
            }}
          >
            <h1 style={{ marginLeft: 30 }}>{label}</h1>
          </div>
        ))}
      </div>
      <Results bets={firstArray.length} />
    </div>
  );
}

export default BSOEOfSum;
