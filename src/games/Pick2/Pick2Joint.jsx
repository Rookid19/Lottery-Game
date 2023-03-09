/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Results from "../../components/Results";
import Rows from "../../components/Rows";
import useRow from "../../hooks/useRows";
import { gamesDescription } from "../../utils/Data";
import { pick2 } from "../../utils/Formula";

function Pick2Joint() {
  const {
    firstArray,
    secondArray,
    thirdArray,
    fourthArray,
    fifthArray,
    onSelect,
  } = useRow();

  const [bets, setBets] = useState("");


  useEffect(() => {
    setBets(
      pick2([firstArray, secondArray, thirdArray, fourthArray, fifthArray])
    );
  }, [onSelect]);

  return (
    <div className="all520_container">
      <div className="game_rule">{gamesDescription.pick2.Joint.rules}</div>
      <Rows gameDescription={gamesDescription.pick2.Joint} />
      <Results bets={bets} />
    </div>
  );
}

export default Pick2Joint;
