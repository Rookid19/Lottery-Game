import React, { useEffect, useState } from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import useRow from "../../hooks/useRows";
import { gamesDescription } from "../../utils/Data";
import { getCombinations } from "../../utils/Formula";

function All5Group60() {
  const { firstArray, secondArray, onSelect } = useRow();
  const [bets, setBets] = useState("");

  const row1Combination = getCombinations(firstArray, 1);
  const row2Combination = getCombinations(secondArray, 3);

  const showResults = () => {
    let counter = 0;
    row1Combination.forEach((number) => {
      row2Combination.forEach((value) => {
        // console.log("value",value)
        if (!value.includes(number[0])) {
          counter++;
        }
      });
    });
    setBets(counter);
  };

  useEffect(() => {
    showResults();
  }, [onSelect]);

  return (
    <div className="all520_container">
      <div className="game_rule">{gamesDescription.all5.Group60.rules}</div>
      <Rows gameDescription={gamesDescription.all5.Group60} />
      <Results bets={bets} />
    </div>
  );
}

export default All5Group60;
