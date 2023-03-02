import { useEffect, useState } from "react";
import "./App.css";
import All5 from "./games/All5/All5";
import useRow from "./hooks/useRows";
import Timer from "./components/Timer";
import { gamesGroup } from "./utils/Data";
import Span from "./games/First3/First3";
import First3 from "./games/First3/First3";

function App() {
  const [all5Tab, setAll5Tab] = useState(1);
  const [first3Tab,setFirst3Tab] = useState(1)
  const [groupTab, setGroupTab] = useState(1);

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
      <div className="group_tab">
        {gamesGroup.map(({ id, group }) => (
          <button
            className="group_tab_button"
            key={id}
            style={{
              color: groupTab === id ? "#5864e0" : "white",
              backgroundColor: groupTab === id ? "white" : "#5864e0",
              borderColor: groupTab === id ? "#5864e0" : "white",
              borderWidth: groupTab === id ? 1 : 0,
            }}
            onClick={() => setGroupTab(id)}
          >
            {group}
          </button>
        ))}
      </div>
      <Timer />
      {groupTab === 1 ? (
        <All5  all5Tab={all5Tab} setAll5Tab={setAll5Tab}/>
      ) : <First3 first3Tab={first3Tab} setFirst3Tab={setFirst3Tab}/>}
    </div>
  );
}

export default App;
