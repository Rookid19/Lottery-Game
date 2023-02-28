import React from "react";
import Rows from "../../components/Rows";
import { gamesDescription } from "../../utils/Data";

function All5Group20() {
  return (
    <div>
      <Rows gameDescription={gamesDescription.all5Group20} />
    </div>
  );
}

export default All5Group20;
