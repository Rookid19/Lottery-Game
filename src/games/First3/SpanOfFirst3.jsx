import React, { useEffect, useState } from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import useRow from "../../hooks/useRows";
import { gamesDescription } from "../../utils/Data";
import { span } from "../../utils/Formula";

function SpanOfFirst3() {
  const { firstArray, onSelect } = useRow();
  const [bets, setBets] = useState("");

  const results = () => {
    let counter = 0;
    firstArray.forEach((number) => {
      counter += span(number);
    });
    return counter
  };

  useEffect(() => {
    setBets(results());
  }, [onSelect]);
  

  return (
    <div className="all520_container">
      <div className="game_rule">
        {gamesDescription.first3.SpanOfFirst3.rules}
      </div>
      <Rows gameDescription={gamesDescription.first3.SpanOfFirst3} />
      <Results bets={bets} />
    </div>
  );
}

export default SpanOfFirst3;
