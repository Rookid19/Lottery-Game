import React, { useState } from "react";
import Results from "../../components/Results";
import useRow from "../../hooks/useRows";
import { dots } from "../../utils/Data";

function ThreeOfAKind() {
  const { onSelect, selectArray, secondArray, firstArray, setSecondArray } =
    useRow();

  const [c, d] = useState();

  return (
    <div>
         <div className="game_rule" style={{marginTop:20}}>
         How to play:Select 1 combo form 1bet. Selected and winning No. same, as win.
Win Sample：Bet plan A:Standard 111; Winning No.:1,1,1,as win. Bet plan B:Three of a kind-all Winning No.:3,3,3,as win.
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
            {[0, 1, 2].map((a) => (
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

      <div className="all">
        <h3 style={{ marginTop: 50, marginRight: 10 }}>All</h3>
        <div
          className="all_container"
          style={{
            backgroundColor: selectArray(2)?.includes(c) ? "#7171dc" : null,
          }}
        >
          {[0, 1, 2, 3, 4, 5].map((num) => (
            <div
              className="card1"
              key={num}
              onClick={() => {
                d(num);
                secondArray.length === 0
                  ? setSecondArray([0, 1, 2, 3, 4, 5])
                  : setSecondArray([]);
              }}
            >
              {[0, 1, 2].map((a, i) => (
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
      </div>
      <Results bets={firstArray.length + (secondArray.length > 0 ? 1 : 0)} />
    </div>
  );
}

export default ThreeOfAKind;
