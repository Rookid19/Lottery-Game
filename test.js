// // // // // let z = 63;

// // // // // let term;
// // // // // let n = 15;
// // // // // if (n === 10 || n === 17) {
// // // // //   term = z + 0;
// // // // // } else if (n === 11 || n === 16) {
// // // // //   term = z + 6;
// // // // // } else if (n === 12 || n === 15) {
// // // // //   term = z + 10;
// // // // // } else if (n === 13 || n === 14) {
// // // // //   term = z + 12;
// // // // // // }
// // // // // // console.log(term);

// // // // // let z = 63;
// // // // // let n = 10;
// // // // // let term = z + (n % 2 === 0 ? 10 : n % 2 === 1 && n !== 13 ? 6 : 0);

// // // // // console.log(term)
// // // // // initialize variable z to 63
// // // // let n = 10; // initialize variable n to 10
// // // // let term = 63; // initialize variable term to z

// // // // // use if-else statements to determine the appropriate value to add to term based on the value of n
// // // // if (n === 11 || n === 16) {
// // // //   term += 6; // add 6 to term if n is 11 or 17
// // // // } else if (n === 12 || n === 15) {
// // // //   term += 10; // add 10 to term if n is 12 or 15
// // // // } else if (n === 13 || n === 14 || n === 15) {
// // // //   term += 12; // add 12 to term if n is 13, 14, or 16
// // // // }

// // // // console.log(term); // output the value of term to the console

// // // export function getCombinations(array, r) {
// // //   const result = [];

// // //   // Recursive function to generate combinations
// // //   function generateCombos(combination, index) {
// // //     if (combination.length === r) {
// // //       result.push(combination);
// // //       return;
// // //     }

// // //     if (index >= array.length) {
// // //       return;
// // //     }

// // //     const newCombo = [...combination];
// // //     newCombo.push(array[index]);

// // //     generateCombos(newCombo, index + 1);
// // //     generateCombos(combination, index + 1);
// // //   }

// // //   generateCombos([], 0);
// // //   return result;
// // // }

// // // // my name is barry allen and i am the fastest man alive

// //  const getNumCombinations = (n, k) => {
// //   // calculate the binomial coefficient
// //   let numerator = 1;
// //   for (let i = n; i > n - k; i--) {
// //     numerator *= i;
// //   }
// //   let denominator = 1;
// //   for (let i = 1; i <= k; i++) {
// //     denominator *= i;
// //   }

// //   return numerator / denominator;
// // };

// // console.log(getNumCombinations(6,2))

// function generateSequence(n) {
//   let sequence = [1, 2, 2];
//   for (let i = 4; i <= n; i++) {
//     if (i % 3 === 1) {
//       sequence.push(sequence[i - 4] + 2);
//     } else {
//       sequence.push(sequence[i - 2] + 1);
//     }
//   }
//   return sequence;
// }

// console.log(generateSequence(18))
// const arr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26,
// ];
// const ans = [];

// let number = 13

// for (let i = 0; i < arr.slice(0,number).length; i++) {
//   for (let j = i; j < arr.slice(0,number).length; j++) {
//     for (let k = j; k < arr.slice(0,number).length; k++) {
//       if (i + j + k === number) {
//         if (i !== k && i !== j) {
//           ans.push([i, j, k]);
//         }
//       }
//     }
//   }
// }

// console.log(ans.length);
const arr = [
  0,1, 2, 3, 4, 5, 6, 7, 8, 9
];
const ans = [];
let number = 16;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    for (let k = j; k < arr.length; k++) {
      if (i + j + k === number && i !== k) {
        // if (i !== k ) {
          ans.push([i, j, k]);
        // }
      }
    }
  }
}

console.log(ans.length);
