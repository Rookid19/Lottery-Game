import React, { useEffect, useState } from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import useRow from "../../hooks/useRows";
import { gamesDescription } from "../../utils/Data";

function First3StraightCombo() {
  const { firstArray, secondArray, thirdArray, onSelect } = useRow();

  const [bets, setBets] = useState("");
  const results = firstArray.length * secondArray.length * thirdArray.length *3;

  useEffect(() => {
setBets(results)
  }, [onSelect]);

  return (
    <div className="all520_container">
      <div className="game_rule">
        {gamesDescription.first3.StraightCombo.rules}
      </div>
      <Rows gameDescription={gamesDescription.first3.StraightCombo} />
      <Results bets={bets} />
    </div>
  );
}

export default First3StraightCombo;
