import React, { useEffect, useState } from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import useRow from "../../hooks/useRows";
import { gamesDescription } from "../../utils/Data";
import {  getNumCombinations } from "../../utils/Formula";

function All5Group120() {
  const { firstArray, onSelect } = useRow();
  const [bets, setBets] = useState("");

  useEffect(() => {
    setBets(getNumCombinations(firstArray.length, 5));
  }, [onSelect]);

  return (
    <div className="all520_container">
      <div className="game_rule">{gamesDescription.all5.Group120.rules}</div>
      <Rows gameDescription={gamesDescription.all5.Group120} />
      <Results bets={bets} />
    </div>
  );
}

export default All5Group120;
