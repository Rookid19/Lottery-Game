// // let z = 63;

// // let term;
// // let n = 15;
// // if (n === 10 || n === 17) {
// //   term = z + 0;
// // } else if (n === 11 || n === 16) {
// //   term = z + 6;
// // } else if (n === 12 || n === 15) {
// //   term = z + 10;
// // } else if (n === 13 || n === 14) {
// //   term = z + 12;
// // // }
// // // console.log(term);


// // let z = 63;
// // let n = 10;
// // let term = z + (n % 2 === 0 ? 10 : n % 2 === 1 && n !== 13 ? 6 : 0);

// // console.log(term)
// // initialize variable z to 63
// let n = 10; // initialize variable n to 10
// let term = 63; // initialize variable term to z

// // use if-else statements to determine the appropriate value to add to term based on the value of n
// if (n === 11 || n === 16) {
//   term += 6; // add 6 to term if n is 11 or 17
// } else if (n === 12 || n === 15) {
//   term += 10; // add 10 to term if n is 12 or 15
// } else if (n === 13 || n === 14 || n === 15) {
//   term += 12; // add 12 to term if n is 13, 14, or 16
// }

// console.log(term); // output the value of term to the console


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
