/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import useRow from "../../hooks/useRows";
import { gamesDescription } from "../../utils/Data";

function First3FixedDigit() {
  const { onSelect } = useRow();
  const [bets, setBets] = useState("");

  useEffect(() => {
    setBets(54);
  }, [onSelect]);

  return (
    <div className="all520_container">
      <div className="game_rule">
        {gamesDescription.first3.First3FixedDigit.rules}
      </div>
      <Rows
        gameDescription={gamesDescription.first3.First3FixedDigit}
        selectors={true}
        selectionType="single"
      />
      <Results bets={bets} />
    </div>
  );
}

export default First3FixedDigit;
