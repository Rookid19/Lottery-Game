import React, { useEffect, useState } from "react";
import useRow from "../hooks/useRows";
import { getCombinations } from "../utils/Formula";

function Results() {
  const { firstArray, secondArray, onSelect } = useRow();
  const [bets, setBets] = useState("");

  const row1Combination = getCombinations(firstArray, 1);
  const row2Combination = getCombinations(secondArray, 2);

  const showResults = () => {
    let counter = 0;
    row1Combination.forEach((number) => {
      row2Combination.forEach((value) => {
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
  return <div className="results_container">{bets} bets</div>;
}

export default Results;
