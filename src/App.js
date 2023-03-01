import { useEffect, useState } from "react";
import "./App.css";
import All5 from "./games/All5/All5";
import useRow from "./hooks/useRows";
import "./css/LotteryBall.css";
import LotteryNumbers from "./components/LotteryNumbers";
import { motion } from "framer-motion";

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
      <LotteryNumbers numbers={[1, 2, 3, 4]} />
      <All5 all5Tab={all5Tab} setAll5Tab={setAll5Tab} />
    </div>
  );
}

export default App;
