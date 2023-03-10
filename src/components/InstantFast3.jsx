import React from "react";
import "../css/InstantFast3.css";

function InstantFast3({ number }) {
  const dots = [
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    [
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 1],
    ],
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
    [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ],
    [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ],
    [
      [1, 0, 1],
      [1, 0, 1],
      [1, 0, 1],
    ],
  ];

  const filteredDots = dots.filter((subArray, pos) => pos === number - 1);
  const newFilteredDots = filteredDots.length > 0 ? filteredDots : dots;

  return (
    <div>
      {newFilteredDots.map((arr, i) => (
        <div className="card" key={i}>
          {arr
            .toString()
            .split(",")
            .map((z, f) => (
              <div
                style={{
                  backgroundColor: z.toString().split(",").includes("1")
                    ? "#000"
                    : "#fff",
                }}
                key={f}
                className="dot"
              ></div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default InstantFast3;
