import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const RowsContext = createContext({});

export const RowsProvider = ({ children }) => {
  const [firstArray, setFirstArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);
  const [thirdArray, setThirdArray] = useState([]);
  const [fourthArray, setFourthArray] = useState([]);
  const [fifthArray, setFifthArray] = useState([]);

  useEffect(() => {
    console.log(firstArray);
    console.log(secondArray);
    console.log(thirdArray);
    console.log(fourthArray);
    console.log(fifthArray);
  }, [firstArray, secondArray, thirdArray, fourthArray, firstArray]);

  const memo_value = useMemo(
    () => ({
      firstArray,
      secondArray,
      thirdArray,
      fourthArray,
      fifthArray,
      setFirstArray,
      setSecondArray,
      setThirdArray,
      setFourthArray,
      setFifthArray,
    }),
    [
      firstArray,
      secondArray,
      thirdArray,
      fourthArray,
      fifthArray,
      setFirstArray,
      setSecondArray,
      setThirdArray,
      setFourthArray,
      setFifthArray,
    ]
  );
  return (
    <RowsContext.Provider value={memo_value}>{children}</RowsContext.Provider>
  );
};

export default function useRow() {
  return useContext(RowsContext);
}
