// import React from "react";
// import "../css/InstantFast3.css";
// import { dots } from "../utils/Data";

// function InstantFast3({ number }) {
//   const filteredDots = dots.filter((subArray, pos) => pos === number - 1);
//   const newFilteredDots = filteredDots.length > 0 ? filteredDots : dots;

//   return (
//     <div>
//       {newFilteredDots.map((arr, i) => (
//         <div className="card" key={i}>
//           {arr
//             .toString()
//             .split(",")
//             .map((subArray, index) => (
//               <div
//                 style={{
//                   backgroundColor: subArray.toString().split(",").includes("1")
//                     ? "#000"
//                     : "#fff",
//                 }}
//                 key={index}
//                 className="dot"
//               ></div>
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default InstantFast3;

import React from "react";
import { instantFast3Data } from "../../utils/Data";
import GuessANumber from "./GuessANumber";
import OnePairGroup from "./OnePairGroup";
import ThreeNoGroup from "./ThreeNoGroup";
import ThreeOfAKind from "./ThreeOfAKind";
import TwoNo from "./BSOEOfSum";
import Sum from "./Sum";

function InstantFast3({ instantFast3, setInstantFast3 }) {
  return (
    <div className="all5_container">
      <div className="games_heading">
        {instantFast3Data.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setInstantFast3(id)}
            className="heading_button"
            style={{
              color: instantFast3 === id ? "white" : "#2e99e9",
              backgroundColor: instantFast3 === id ? "#2e99e9" : "white",
            }}
          >
            {label}
          </button>
        ))}
      </div>
      {instantFast3 === 2 ? (
        <ThreeOfAKind />
      ) : instantFast3 === 3 ? (
        <ThreeNoGroup />
      ) : instantFast3 === 6 ? (
        <GuessANumber />
      ) : instantFast3 === 4 ? (
        <OnePairGroup />
      ) : instantFast3 === 5 ? (
        <TwoNo />
      ):instantFast3 === 1 ?(
        <Sum />
      ) : null}
    </div>
  );
}

export default InstantFast3;
