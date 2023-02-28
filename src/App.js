import { useEffect, useState } from "react";
import "./App.css";
import All5 from "./games/All5/All5";
import useRow from "./hooks/useRows";

function App() {
  const [all5Tab, setAll5Tab] = useState(1);
  const {
    setFirstArray,
    setSecondArray,
    setThirdArray,
    setFourthArray,
    setFifthArray,
  } = useRow();

  useEffect(() => {
    setFirstArray([]);
    setSecondArray([]);
    setThirdArray([]);
    setFourthArray([]);
    setFifthArray([]);
  }, [all5Tab]);

  return (
    <div className="App">
      <All5 all5Tab={all5Tab} setAll5Tab={setAll5Tab} />
    </div>
  );
}

export default App;
