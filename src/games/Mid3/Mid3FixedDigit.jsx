/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import useRow from "../../hooks/useRows";
import { gamesDescription } from "../../utils/Data";

function Mid3FixedDigit() {
  const { onSelect } = useRow();
  const [bets, setBets] = useState("");

  useEffect(() => {
    setBets(54);
  }, [onSelect]);

  return (
    <div className="all520_container">
      <div className="game_rule">
        {gamesDescription.mid3.FixedDigit.rules}
      </div>
      <Rows
        gameDescription={gamesDescription.mid3.FixedDigit}
        selectors={true}
        selectionType="single"
      />
      <Results bets={bets} />
    </div>
  );
}

export default Mid3FixedDigit;
