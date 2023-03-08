
import React, { useEffect, useState } from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import useRow from "../../hooks/useRows";
import { gamesDescription } from "../../utils/Data";
import { generateFirst3SumOfGroup } from "../../utils/Formula";

function Mid3SumOfGroup() {
  const { firstArray, onSelect } = useRow();
  const [bets, setBets] = useState("");
  
  const results = () => {
    let counter = 0;
    firstArray.forEach((number) => {
      counter += generateFirst3SumOfGroup(number);
    });
    return counter
  };

  useEffect(() => {
    setBets(results());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSelect]);
  

  return (
    <div className="all520_container">
      <div className="game_rule">
        {gamesDescription.mid3.Mid3SumOfGroup.rules}
      </div>
      <Rows gameDescription={gamesDescription.mid3.Mid3SumOfGroup} />
      <Results bets={bets} />
    </div>
  );
}

export default Mid3SumOfGroup;
