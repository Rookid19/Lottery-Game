// const getNumCombinations = (n, k) => {
//   // calculate the binomial coefficient
//   let numerator = 1;
//   for (let i = n; i > n - k; i--) {
//     numerator *= i;
//   }
//   let denominator = 1;
//   for (let i = 1; i <= k; i++) {
//     denominator *= i;
//   }

//   return numerator / denominator;
// };

// function getCombinations(array, r) {
//   const result = [];

//   // Recursive function to generate combinations
//   function generateCombos(combination, index) {
//     if (combination.length === r) {
//       result.push(combination);
//       return;
//     }

//     if (index >= array.length) {
//       return;
//     }

//     const newCombo = [...combination];
//     newCombo.push(array[index]);

//     generateCombos(newCombo, index + 1);
//     generateCombos(combination, index + 1);
//   }

//   generateCombos([], 0);
//   return result;
// }

const test = (array) => {
  //   const array = [[0, 1], [0, 2, 3], [0, 1], [7,8,9], [2,3,4]];

  let count = 0;

  array.forEach((arr, index) => {
    arr.forEach(() => {
      if (index < array.length - 1)
        count += array.slice(index + 1).flat().length;
    });
  });
  return count;
};

console.log(test());
