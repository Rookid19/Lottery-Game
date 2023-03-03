import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { buttons, labels, long_labels } from "../utils/Data";

export const RowsContext = createContext({});

export const RowsProvider = ({ children }) => {
  const [firstArray, setFirstArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);
  const [thirdArray, setThirdArray] = useState([]);
  const [fourthArray, setFourthArray] = useState([]);
  const [fifthArray, setFifthArray] = useState([]);

  const even = buttons.filter((item) => item % 2 === 0);
  const odd = buttons.filter((item) => item % 2 !== 0);
  const small =
    buttons.length === 10 ? buttons.slice(0, 5) : buttons.slice(0, 14);
  const big =
    buttons.length === 10 ? buttons.slice(5, 10) : buttons.slice(14, 28);
  const all = buttons.length === 10 ? labels : long_labels;

  const selectArray = (row) => {
    const array =
      row === 1
        ? firstArray
        : row === 2
        ? secondArray
        : row === 3
        ? thirdArray
        : row === 4
        ? fourthArray
        : fifthArray;

    return array;
  };

  const selectSetArray = (row) => {
    const setArray =
      row === 1
        ? setFirstArray
        : row === 2
        ? setSecondArray
        : row === 3
        ? setThirdArray
        : row === 4
        ? setFourthArray
        : setFifthArray;

    return setArray;
  };

  const selectFilter = (label, row) => {
    const setArray = selectSetArray(row);
    if (label === "even") {
      setArray(even);
    } else if (label === "clear") {
      setArray([]);
    } else if (label === "odd") {
      setArray(odd);
    } else if (label === "small") {
      setArray(small);
    } else if (label === "big") {
      setArray(big);
    } else if (label === "all") {
      setArray(all);
    }
  };

  const onSelectAll = (label, index, number_of_rows) => {
    all.forEach((value) => {
      if (index === value) {
        if ((firstArray.indexOf(label) === -1 && index, number_of_rows >= 1)) {
          setFirstArray((prev) => [...prev, prev === label ? null : label]);
        }
        if (secondArray.indexOf(label) === -1 && number_of_rows >= 2) {
          setSecondArray((prev) => [...prev, prev === label ? null : label]);
        }
        if (thirdArray.indexOf(label) === -1 && number_of_rows >= 3) {
          setThirdArray((prev) => [...prev, prev === label ? null : label]);
        }
        if (fourthArray.indexOf(label) === -1 && number_of_rows >= 4) {
          setFourthArray((prev) => [...prev, prev === label ? null : label]);
        }
        if (fifthArray.indexOf(label) === -1 && number_of_rows >= 5) {
          setFifthArray((prev) => [...prev, prev === label ? null : label]);
        }
      }
    });
  };

  /**
   *This code defines a function onSelect that takes in a parameter label.
   *The function modifies an array (array) based on whether the label is
   *already present in the array or not.
   *The first line of the function checks if the array already contains the label by calling the includes method on the array.
   *If the label is already present in the array, the function finds the index of the label in the array using the indexOf method and
   *removes the label from the array using the splice method.
   * @param {*} label
   */
  const onSelect = (label, row) => {
    const array = selectArray(row);
    const setArray = selectSetArray(row);

    if (array.includes(label)) {
      const index = array.indexOf(label);
      array.splice(index, 1);
      setArray((prev) => [...prev]);
    } else {
      setArray((prev) => [...prev, label]);
    }
  };

  /**
   * This code defines a function onClear that takes a label parameter. The function first finds the index of the label in five different
   * arrays firstArray, secondArray, thirdArray, fourthArray, and fifthArray. If the label is found in an array,
   * it is removed from that array using the splice() method. Then, the state is updated for all five arrays using the
   * setFirstArray(), setSecondArray(), setThirdArray(), setFourthArray(), and setFifthArray() functions with the current values of each
   * array passed in as the new state. This causes the component to re-render with the updated state, removing the label from the corresponding array
   *
   * @param {*} label
   */
  const onClear = (label) => {
    const first_index = firstArray.indexOf(label);
    const second_index = secondArray.indexOf(label);
    const third_index = thirdArray.indexOf(label);
    const fourth_index = fourthArray.indexOf(label);
    const fifth_index = fifthArray.indexOf(label);

    if (first_index !== -1) {
      firstArray.splice(first_index, 1);
    }
    if (second_index !== -1) {
      secondArray.splice(second_index, 1);
    }
    if (third_index !== -1) {
      thirdArray.splice(third_index, 1);
    }
    if (fourth_index !== -1) {
      fourthArray.splice(fourth_index, 1);
    }
    if (fifth_index !== -1) {
      fifthArray.splice(fifth_index, 1);
    }
    setFirstArray((prev) => [...prev]);
    setSecondArray((prev) => [...prev]);
    setThirdArray((prev) => [...prev]);
    setFourthArray((prev) => [...prev]);
    setFifthArray((prev) => [...prev]);
  };
  useEffect(() => {
    console.log("firstArray---> " + firstArray);
    console.log("secondArray---> " + secondArray);
    console.log("thirdArray----> " + thirdArray);
    console.log("fourthArray----> " + fourthArray);
    console.log("fifthArray---> " + fifthArray);
  }, [firstArray, secondArray, thirdArray, fourthArray, fifthArray]);

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
      onSelect,
      selectArray,
      selectFilter,
      onSelectAll,
      onClear,
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
      onSelect,
      selectArray,
      selectFilter,
      onSelectAll,
      onClear,
    ]
  );
  return (
    <RowsContext.Provider value={memo_value}>{children}</RowsContext.Provider>
  );
};

export default function useRow() {
  return useContext(RowsContext);
}
