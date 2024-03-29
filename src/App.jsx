import { useEffect, useState } from "react";
import "./App.css";
import All5 from "./games/All5/All5";
import useRow from "./hooks/useRows";
import Timer from "./components/Timer";
import { gamesGroup } from "./utils/Data";
import First3 from "./games/First3/First3";
import Mid3 from "./games/Mid3/Mid3";
import Pick2 from "./games/Pick2/Pick2";
import InstantFast3 from "./games/InstantFast3/InstantFast3";

function App() {
  const [all5Tab, setAll5Tab] = useState(1);
  const [first3Tab, setFirst3Tab] = useState(1);
  const [mid3Tab, setMid3Tab] = useState(1);
  const [pick2Tab, setPick2Tab] = useState(1);
  const [instantFast3, setInstantFast3] = useState(1);
  const [groupTab, setGroupTab] = useState(5);
  const [localColor,setLocalColor] = useState(null)
  const [change,setChange] = useState(null)
  const [color,setColor] = useState('')

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
  }, [all5Tab, first3Tab, mid3Tab, pick2Tab, groupTab]);

  const changeColor = () =>{
    localStorage.setItem('all5',color)
    setChange(true)
  }

  useEffect(() =>{
setLocalColor(localStorage.getItem('all5'))
  },[change])

  return (
    <div className="App">
      <input type="text" onChange={(e) => setColor(e.target.value) } /> {color}
      <button onClick={changeColor}>Change Background Color</button>
      <div className="group_tab">
        {gamesGroup.map(({ id, group }) => (
          <button
            className="group_tab_button"
            key={id}
            style={{
              color: groupTab === id ? localColor : "white",
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
        <All5 all5Tab={all5Tab} setAll5Tab={setAll5Tab} />
      ) : groupTab === 2 ? (
        <First3 first3Tab={first3Tab} setFirst3Tab={setFirst3Tab} />
      ) : groupTab === 3 ? (
        <Mid3 mid3Tab={mid3Tab} setMid3Tab={setMid3Tab} />
      ) : groupTab === 4 ? (
        <Pick2 pick2Tab={pick2Tab} setPick2Tab={setPick2Tab} />
      ) : groupTab === 5 ? (
        <InstantFast3
          instantFast3={instantFast3}
          setInstantFast3={setInstantFast3}
        />
      ) : null}
    </div>
  );
}

export default App;
