import React, { useEffect, useState } from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import useRow from "../../hooks/useRows";
import { gamesDescription } from "../../utils/Data";

function Mid3Straightjoint() {
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
        {gamesDescription.mid3.StraightJoint.rules}
      </div>
      <Rows gameDescription={gamesDescription.mid3.StraightJoint} />
      <Results bets={bets} />
    </div>
  );
}

export default Mid3Straightjoint;
