/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import useRow from "../../hooks/useRows";
import { gamesDescription } from "../../utils/Data";
import { getNumCombinations } from "../../utils/Formula";

function First3FixedDigit() {
  const { firstArray, onSelect } = useRow();
  const [bets, setBets] = useState("");

  useEffect(() => {
    setBets(getNumCombinations(firstArray.length, 2) * 2);
  }, [onSelect]);

  return (
    <div className="all520_container">
      <div className="game_rule">
        {gamesDescription.first3.First3FixedDigit.rules}
      </div>
      <Rows gameDescription={gamesDescription.first3.First3FixedDigit} selectors={true}/>
      <Results bets={bets} />
    </div>
  );
}

export default First3FixedDigit;
