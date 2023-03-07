import React, { useEffect, useState } from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import useRow from "../../hooks/useRows";
import { gamesDescription } from "../../utils/Data";
import { getNumCombinations, span } from "../../utils/Formula";

function First3Group6() {
  const { firstArray, onSelect } = useRow();
  const [bets, setBets] = useState("");

  useEffect(() => {
    setBets(getNumCombinations(firstArray.length, 3) * 2);
  }, [onSelect]);

  return (
    <div className="all520_container">
      <div className="game_rule">
        {gamesDescription.first3.First3Group6.rules}
      </div>
      <Rows gameDescription={gamesDescription.first3.First3Group6} />
      <Results bets={bets} />
    </div>
  );
}

export default First3Group6;
