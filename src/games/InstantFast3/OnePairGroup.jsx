import React from "react";
import Results from "../../components/Results";
import useRow from "../../hooks/useRows";
import { dots } from "../../utils/Data";

function OnePairGroup() {
  const { onSelect, selectArray, secondArray, firstArray } = useRow();

  return (
    <div>
      <div className="game_rule" style={{ marginTop: 20 }}>
        How to play:Select 1 One Pair form 1bet. Selected One Pair occur 2x or
        more in winning No., as win. Win Sample：Bet plan:11; Winning
        No.:1,1,2,as win.
      </div>
      <div className="standard">
        <h3 style={{ marginTop: 50, marginRight: 10 }}>Standard</h3>
        {[0, 1, 2, 3, 4, 5].map((num) => (
          <div
            className="card"
            onClick={() => onSelect(num, 1)}
            key={num}
            style={{
              backgroundColor: selectArray(1)?.includes(num) ? "#7171dc" : null,
            }}
          >
            {[0, 1].map((a) => (
              <div key={a}>
                {dots
                  .filter((val, i) => i === num)
                  .map((arr, i) => (
                    <div className="dice" key={i}>
                      <div className="dice_circle">
                        {arr
                          .toString()
                          .split(",")
                          .map((subArray, index) => (
                            <div
                              style={{
                                backgroundColor: subArray
                                  .toString()
                                  .split(",")
                                  .includes("1")
                                  ? "#000"
                                  : null,
                              }}
                              key={index}
                              className="dot"
                            ></div>
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <Results bets={firstArray.length + (secondArray.length > 0 ? 1 : 0)} />
    </div>
  );
}

export default OnePairGroup;
