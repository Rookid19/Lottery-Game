import React, { useEffect, useState } from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import useRow from "../../hooks/useRows";
import { gamesDescription } from "../../utils/Data";

function AllStraight5Combo() {
  const {
    firstArray,
    secondArray,
    thirdArray,
    fourthArray,
    fifthArray,
    onSelect,
  } = useRow();

  const [bets, setBets] = useState("");
  const results =
    firstArray.length *
    secondArray.length *
    thirdArray.length *
    fourthArray.length *
    fifthArray.length * 5

  useEffect(() => {
    setBets(results);
  }, [onSelect]);
  
  return (
    <div className="all520_container">
      <div className="game_rule">
        {gamesDescription.all5StraightCombo.rules}
      </div>
      <Rows gameDescription={gamesDescription.all5StraightCombo} />
      <Results bets={bets} />
    </div>
  );
}

export default AllStraight5Combo;
