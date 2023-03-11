import React from "react";
import Results from "../../components/Results";
import useRow from "../../hooks/useRows";
import { dots } from "../../utils/Data";

function ThreeOfAKind() {
  const { onSelect, selectArray, firstArray } = useRow();
  return (
    <div>
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
                                  ? "#c61c30"
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

      <div className="all" >
        <h3 style={{ marginTop: 50, marginRight: 10 }}>All</h3>
        <div className="all_container">
        {[0, 1, 2, 3, 4, 5].map((num) => (
          <div
            className="card1"
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
                                  ? "#c61c30"
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
      <Results bets={firstArray.length} />
    </div>
  );
}

export default ThreeOfAKind;
