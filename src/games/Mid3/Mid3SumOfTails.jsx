/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import useRow from "../../hooks/useRows";
import { gamesDescription } from "../../utils/Data";

function Mid3SumOfTails() {
  const { onSelect ,firstArray} = useRow();
  const [bets, setBets] = useState("");

  useEffect(() => {
    setBets(firstArray.length);
  }, [onSelect]);

  return (
    <div className="all520_container">
      <div className="game_rule">
        {gamesDescription.mid3.SumOfTails.rules}
      </div>
      <Rows
        gameDescription={gamesDescription.mid3.SumOfTails}

      />
      <Results bets={bets} />
    </div>
  );
}

export default Mid3SumOfTails;
