
import React, { useEffect, useState } from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import useRow from "../../hooks/useRows";
import { gamesDescription } from "../../utils/Data";

function SumOfFirst3() {
  const { firstArray, secondArray, thirdArray, onSelect } = useRow();

  const [bets, setBets] = useState("");
  const results =
    firstArray.length *
    secondArray.length *
    thirdArray.length 

    
    useEffect(() => {
      setBets(results);
      console.log(results);
    }, [onSelect]);

  return (
    <div className="all520_container">
      <div className="game_rule">
        {gamesDescription.first3.SumOFFirst3.rules}
      </div>
      <Rows gameDescription={gamesDescription.first3.SumOFFirst3} />
      <Results bets={bets} />
    </div>
  );
}

export default SumOfFirst3;
