// // // // // let sen = "let's pad this sentence";

// // // // // let arr = sen.split(" ");

// // // // // let longest_sentence = arr.reduce((acc, curr) => Math.max(acc, curr.length), 0);

// // // // // // console.log("longest_sentence", longest_sentence);

// // // // // let new_sentence = arr.map((word) => {
// // // // //   let deduc = longest_sentence - word.length;
// // // // //   let second = Math.floor(deduc / 2);
// // // // //   let first = deduc - second;
// // // // //   return word.padStart(word.length + first, " ").padEnd(longest_sentence, " ");
// // // // // });

// // // // // // console.log(new_sentence.join(" "));

// // // // // // let a = "3";
// // // // // // console.log(a.repeat(100))
// // // // // // // a.concat(a)
// // // // // // // console.log([1,2,3].map((x) => "3").join(""))
// // // // // // console.log(Array(10).join("3"))
// // // // // // // for(let i =0, i<=)
// // // // // // //"333"

// // // // // // let a = [1,2,3]
// // // // // // console.log(a.with(2,4))

// // // // // // Array.prototype.with = function(index, element) {
// // // // // //   this.splice(index, 1, element);
// // // // // //   return this;
// // // // // // };

// // // // // // let a = [1, 2, 3];
// // // // // // a.with(1, 4);
// // // // // // console.log(a);
// // // // // let a = [1, 2, 3, 4, 5];
// // // // // a.copyWithin(1, 2); //[1,]

// // // // // console.log(a);

// // // // interface itemId {
// // // //   id : string;
// // // // }

// // // // interface Author extends itemId{
// // // //   name: string;
// // // //   age: number
// // // // }

// // // // interface Book extends itemId{
// // // //   title: string;
// // // //   pages:number;
// // // //   type: BookType
// // // // }

// // // // type BookType = 'romantic' | 'horror' | 'comedy'

// // // // function updateBookTitle(bookTitle){
// // // //   // return bookTitle;
// // // // console.log(bookTitle)
// // // // }

// // // // // const updateAuthor = (authorName) =>{
// // // // //   return authorName;
// // // // // }

// // // // type Person = {
// // // //   name: string;
// // // //   age: number;
// // // //   gender: string;
// // // // };

// // // // const person: Omit<Person, "gender"> = {
// // // //   name: "John",
// // // //   age: 30,
// // // // };

// // // // type Person = {
// // // //   name: string;
// // // //   age: number;
// // // //   gender: string;
// // // // };

// // // // type PersonNameAndAge = Pick<Person, "name" | "age">;

// // // // // const person: Person = {
// // // // //   name: "John",
// // // // //   age: 30,
// // // // // };

// // // // const a = (person): Object => {
// // // //   return {
// // // //     name: "John",
// // // //     age: 30,
// // // //   };
// // // // };

// // // // type Person = {
// // // //   name: string;
// // // //   age: number;
// // // //   gender: string;
// // // // };

// // // // function getPersonNameAndAge(person: Person): Omit<Person, "gender"> {
// // // //   return {
// // // //     name: person.name,
// // // //     age: person.age,
// // // //   };
// // // // }

// // // // const arr = [123, 456,789,908];
// // // // const matrix = arr.map((item) => Array.from(item, Number))
// // // // console.log("matrix ", matrix)
// // // // let transposeData = matrix[0]?.map((_, i) => matrix?.map((row) => row[i]));

// // // // console.log(transposeData);

// // // // const numbers = [123, 122, 111];
// // // // const splitNumber = numbers.map((number) => {
// // // //   let a = Array.from("" + number, Number);
// // // //   let count = 0;

// // // //   [1,2,3].reduce((acc, curr) => {
// // // //     // console.log(acc)
// // // //     if (acc >= curr) {
// // // //         console.log("curr" , curr)
// // // //         //acc++
// // // //     }
// // // //     // console.log("curr" , curr)
// // // //   }, 0);
// // // // });

// // // // console.log(splitNumber);

// // // const array = [1, 2, 3];

// // // function countOccurrences(array, numberOfOccurence) {
// // //   let count = 0;

// // //   for (let i = 0; i < array.length; i++) {
// // //     if (array[i] === numberOfOccurence) {
// // //       count++;
// // //     }
// // //   }

// // //   return count;
// // // }

// // // const result = countOccurrences(array, 2);
// // // // console.log(result); // Output: 2

// // // // function abc() {
// // // //   const numbers = [123, 122, 111, 133];
// // // //   let a;
// // // //   let targetIds = numbers.map((number, index) => {
// // // //     let array = Array.from("" + number, Number);
// // // //     let target = countOccurrences(array, 3);
// // // //     return target;
// // // //   });
// // // //   return targetIds;

// // // //   //   if (target === 2) {
// // // //   //     a = numbers.filter((_, i) => index === i);
// // // //   //   }
// // // // }

// // // // // console.log(abc());
// // // // const numbers = [123, 122, 111];

// // // // // Create a set.
// // // // const set = new Set(numbers);

// // // // // Iterate through the array and remove each number from the set.
// // // // for (const number of numbers) {
// // // //   set.delete(number);
// // // // }

// // // // // The only number that is left in the set is the repeating number.
// // // // const repeatingNumber = set.values().next().value;

// // // // // Print the value of the repeating number.
// // // // console.log(repeatingNumber);

// // // // const arr = [1, 2, 3, 4, 5];

// // // // console.log(arr.find((num) => num % 2 === 0));
// // // // let a = ["123"]
// // // // console.log(String(a).sort())

// // // const data = {
// // //   "1v2": [1, "Dragon", 2, "Tiger"],
// // //   "1v3": [1, "Dragon", 2, "Tie"],
// // //   "1v4": [1, "Dragon"],
// // //   "1v5": [1, "Dragon", 2, "Tie", 3, "Tiger"],
// // // };

// // let filteredKeyArra = Object.keys(data)[0]
// // let filteredKeyArr = Object.keys(data).map((arr) => {
// //   let a = data[arr].filter((item) => typeof item === "string");
// //   return {
// //     [arr]: a,
// //   };
// // });

// // // // const array = [{"1v2":["Dragon","Tiger"]},{"1v3":["Dragon","Tie"]},{"1v4":["Dragon"]},{"1v5":["Dragon","Tie","Tiger"]}];
// // // function boxUserSelections(filteredKeyArr) {
// // //   const convertedArray = [];

// // //   for (let item of filteredKeyArr) {
// // //     for (let [key, value] of Object.entries(item)) {
// // //       convertedArray.push(`${key} ${value.join(", ")}`);
// // //     }
// // //   }

// // //   const convertedString = convertedArray.join(" | ");
// // //   return convertedString;
// // // }
// // // console.log(boxUserSelections());

// // const array = [{"1v2":["Dragon","Tiger"]},{"1v3":["Dragon","Tie"]},{"1v4":["Dragon"]},{"1v5":["Dragon","Tie","Tiger"]}];

// // // 1v2 Dragon,Tiger | 1V3 Dragon, Tie | 1V4 Dragon | 1v5 Dragon, Tie, Tiger
// // //
// // console.log(JSON.stringify(filteredKeyArr));
// // let tt = data[filteredKeyArr].filter((item) => typeof item === "string")

// // // // let tt =
// // // // .map((key) =>
// // // //   data
// // // // //   [key].filter((item) => typeof item !== "string")
// // // // );

// // // // let result1 = filteredKeyArr.reduce((acc, curr) => curr.length + acc, 0);
// // // // data[filteredKeyArr] = tt;

// // const Buttons = [
// //   "Four of a kind",
// //   "Gourd",
// //   "Streak",
// //   "Three of a Kind",
// //   "2 pairs",
// //   "1 pair",
// //   "High Card",
// // ];

// // const selections = {
// //   firstRow: [1, 3, 6],
// // };

// // function getValueAtIndex(buttons, selections, index) {
// //   if (index >= 0 && index < Buttons.length) {
// //     return Buttons[index];
// //   }
// //   return undefined;
// // }

// // // let b = selections["firstRow"].map((number) => {
// // //   getValueAtIndex(buttons, selections, number - 1);
// // // });
// // // console.log(b);

// // function studSelections(selections, buttons) {
// //   return selections["firstRow"].map((number) => {
// //     let index = number - 1;

// //     if (index >= 0 && index < Buttons.length) {
// //       return buttons[index];
// //     }
// //     return undefined;
// //   });
// // }
// // console.log(go(selections, Buttons));
// // // for (let index = 0; index < Buttons.length; index++) {
// // //   const element = Buttons[a[0]];
// // //   console.log(element)

// // // }
// // // console.log(Buttons[0])

// // let a = ["a", "b", "c", "d"];
// // // console.log(a.unshift("e"))

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

// const combArr = getCombinations([1, 2, 3, 4, 5], 2);
// const nameData = ["1st", "2nd", "3rd", "4th", "5th"];
// const data = combArr.map((arr) => {
//   let type = arr.join("v");
//   // console.log(nameData[arr[0] - 1] + " VS " + nameData[arr[1] - 1]);
//   return { type, name: nameData[arr[0] - 1] + " VS " + nameData[arr[1] - 1] };
// });

// // let ab = data.map((obj) => {
// //   return { ...obj, odds: 9 };
// // });
// const dragonTiger = [data.slice(0,5),data.slice(5)]

// // console.log(dragonTiger);

// // const az = {
// //   firstRow: [],
// //   secondRow: [],
// //   thirdRow: [],
// //   fourthRow: [],
// //   fifthRow: [],
// //   "First 3": [
// //     5,
// //     {
// //       name: "Half Streak",
// //       odds: 9.259,
// //       id: 5,
// //     },
// //   ],
// //   "Middle 3": [
// //     5,
// //     {
// //       name: "Half Streak",
// //       odds: 9.259,
// //       id: 5,
// //     },
// //   ],
// //   "Last 3": [
// //     5,
// //     {
// //       name: "Half Streak",
// //       odds: 9.259,
// //       id: 5,
// //     },
// //   ],
// // };

// // let a = Object.fromEntries(
// //   Object.entries(az).filter(([_, value]) => value.length !== 0)
// // );

// // console.log(a);

// // function filterObjectSelections(selections) {
// //   return Object.fromEntries(
// //     // Object.entries(selections).filter(([_, value]: [string, any]) => value.length !== 0)
// //     Object.entries(selections)
// //       .filter(([_, value]) => value.length !== 0)
// //       .map(([key, value]) => [
// //         key,
// //         value.filter((item) => typeof item !== "object"),
// //       ])
// //   );
// // }

// // const arr = ["big", "odd", "even", "odd"];

// // const result = [];
// // let currentGroup = [];

// // for (let i = 0; i < arr.length; i++) {
// //   currentGroup.push(arr[i]);

// //   // Check if the next element is different or if we've reached the end of the array
// //   if (arr[i + 1] !== arr[i] || i === arr.length - 1) {
// //     result.push(currentGroup);
// //     currentGroup = [];
// //   }
// // }

// // console.log(result);

// // function validateEmail(email) {
// //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //   return regex.test(email);
// // }

// // const validateEmail = (email) => {
// //   return String(email)
// //     .toLowerCase()
// //     .match(
// //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// //     );
// // };

// const validateEmail = (email) => {
//   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     String(email).toLowerCase()
//   );
// };

// const email = '....@gmail.com';
// const isValid = validateEmail(email);
// // console.log(isValid); // Output: true

// function isValidUsername(username) {
//   var pattern = /^[A-Za-z][A-Za-z0-9_]*$/;
//   return pattern.test(username);
// }

// console.log(isValidUsername('r_andy'))

let arr = ["1234", "4567", "1274"];
let a = {
  firstRow: [1, 1, 4],
  secondRow: [2, 2, 5],
  thirdRow: [3, 7, 6],
  fourthRow: [4, 4, 7],
  fifthRow: [],
};

const result = Object.values(a);
let chapo = result[0].map((_, index) =>
  result.filter((row) => row.length > 0).map((row) => row[index]).join(",").split(",")
).join(" ")

console.log(chapo); // Ou
