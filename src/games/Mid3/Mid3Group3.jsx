import React, { useEffect, useState } from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import useRow from "../../hooks/useRows";
import { gamesDescription } from "../../utils/Data";
import { getNumCombinations } from "../../utils/Formula";

function Mid3Group3() {
  const { firstArray, onSelect } = useRow();

  const [bets, setBets] = useState("");

  useEffect(() => {
    setBets(getNumCombinations(firstArray.length, 2) * 2);
  }, [onSelect]);

  return (
    <div className="all520_container">
      <div className="game_rule">
        {gamesDescription.mid3.Mid3Group3.rules}
      </div>
      <Rows gameDescription={gamesDescription.mid3.Mid3Group3} />
      <Results bets={bets} />
    </div>
  );
}

export default Mid3Group3;
