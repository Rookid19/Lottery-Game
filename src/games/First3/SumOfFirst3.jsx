import React, { useEffect, useState } from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import useRow from "../../hooks/useRows";
import { gamesDescription } from "../../utils/Data";
import { generateSequence } from "../../utils/Formula";

function SumOfFirst3() {
  const { firstArray, onSelect } = useRow();

  const [bets, setBets] = useState("");

  const results = () => {
    let counter = 0;
    firstArray.forEach((number) => {
      counter += generateSequence(number);
    });
    return counter
  };

  useEffect(() => {
    setBets(results());
  }, [onSelect]);

  return (
    <div className="all520_container">
      <div className="game_rule">
        {gamesDescription.first3.SumOfFirst3.rules}
      </div>
      <Rows gameDescription={gamesDescription.first3.SumOfFirst3} />
      <Results bets={bets} />
    </div>
  );
}

export default SumOfFirst3;
