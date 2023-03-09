import { buttons } from "./Data";

/**
 * The concatenateArrays function takes in an array of arrays, where each inner array contains a row of data.
 * The function then returns a string that concatenates all of the elements in the inner arrays together,
 * separated by commas within each row and separated by vertical bars between rows.
 *
 * eg.[[1,2],[4,6],[7,3],[],[]] should return an answer in this format 1,2|4,6|7,3||
 *
 * @param {*} row
 * @return {*}
 */
export const concatenateArrays = (row) => {
  const result = row.map((innerArr) => innerArr.join(",")).join("|");
  return result;
};

/**
 *
 * This is a function named getNumCombinations that calculates the number of combinations
 * of k items that can be chosen from a set of n items.
 * where n is the total number of user selection
 * and k is number to form a bet this function get the number of combinations
 * @param {*} n
 * @param {*} k
 * @return {*}
 */
export const getNumCombinations = (n, k) => {
  // calculate the binomial coefficient
  let numerator = 1;
  for (let i = n; i > n - k; i--) {
    numerator *= i;
  }
  let denominator = 1;
  for (let i = 1; i <= k; i++) {
    denominator *= i;
  }

  return numerator / denominator;
};

export function getCombinations(array, r) {
  const result = [];

  // Recursive function to generate combinations
  function generateCombos(combination, index) {
    if (combination.length === r) {
      result.push(combination);
      return;
    }

    if (index >= array.length) {
      return;
    }

    const newCombo = [...combination];
    newCombo.push(array[index]);

    generateCombos(newCombo, index + 1);
    generateCombos(combination, index + 1);
  }

  generateCombos([], 0);
  return result;
}

export function generateSequence(n) {
  if (n < 10) {
    return ((n + 1) * (n + 2)) / 2;
  } else if (n > 17) {
    const index = buttons
      .slice(17, 28)
      .reverse()
      .indexOf(n - 1);
    return (index * (index + 1)) / 2;
  } else {
    let term = 63;
    if (n === 11 || n === 16) {
      term += 6;
    } else if (n === 12 || n === 15) {
      term += 10;
    } else if (n >= 13 && n <= 15) {
      term += 12;
    }
    return term;
  }
}

export function span(num) {
  if (num === 0) {
    return 10 - num;
  } else {
    return 6 * num * (10 - num);
  }
}

export function generateFirst3SumOfGroup(number) {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for (let k = j; k < arr.length; k++) {
        if (i + j + k === number && i !== k) ans.push([i, j, k]);
      }
    }
  }

  return ans.length;
}

export function pick2(array) {
  let count = 0;

  array.forEach((arr, index) => {
    arr.forEach(() => {
      if (index < array.length - 1) {
        count += array.slice(index + 1).flat().length;
      }
    });
  });
  
  return count;
}
