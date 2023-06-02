// // // // let sen = "let's pad this sentence";

// // // // let arr = sen.split(" ");

// // // // let longest_sentence = arr.reduce((acc, curr) => Math.max(acc, curr.length), 0);

// // // // // console.log("longest_sentence", longest_sentence);

// // // // let new_sentence = arr.map((word) => {
// // // //   let deduc = longest_sentence - word.length;
// // // //   let second = Math.floor(deduc / 2);
// // // //   let first = deduc - second;
// // // //   return word.padStart(word.length + first, " ").padEnd(longest_sentence, " ");
// // // // });

// // // // // console.log(new_sentence.join(" "));

// // // // // let a = "3";
// // // // // console.log(a.repeat(100))
// // // // // // a.concat(a)
// // // // // // console.log([1,2,3].map((x) => "3").join(""))
// // // // // console.log(Array(10).join("3"))
// // // // // // for(let i =0, i<=)
// // // // // //"333"

// // // // // let a = [1,2,3]
// // // // // console.log(a.with(2,4))

// // // // // Array.prototype.with = function(index, element) {
// // // // //   this.splice(index, 1, element);
// // // // //   return this;
// // // // // };

// // // // // let a = [1, 2, 3];
// // // // // a.with(1, 4);
// // // // // console.log(a);
// // // // let a = [1, 2, 3, 4, 5];
// // // // a.copyWithin(1, 2); //[1,]

// // // // console.log(a);

// // // interface itemId {
// // //   id : string;
// // // }

// // // interface Author extends itemId{
// // //   name: string;
// // //   age: number
// // // }

// // // interface Book extends itemId{
// // //   title: string;
// // //   pages:number;
// // //   type: BookType
// // // }

// // // type BookType = 'romantic' | 'horror' | 'comedy'

// // // function updateBookTitle(bookTitle){
// // //   // return bookTitle;
// // // console.log(bookTitle)
// // // }

// // // // const updateAuthor = (authorName) =>{
// // // //   return authorName;
// // // // }

// // // type Person = {
// // //   name: string;
// // //   age: number;
// // //   gender: string;
// // // };

// // // const person: Omit<Person, "gender"> = {
// // //   name: "John",
// // //   age: 30,
// // // };

// // // type Person = {
// // //   name: string;
// // //   age: number;
// // //   gender: string;
// // // };

// // // type PersonNameAndAge = Pick<Person, "name" | "age">;

// // // // const person: Person = {
// // // //   name: "John",
// // // //   age: 30,
// // // // };

// // // const a = (person): Object => {
// // //   return {
// // //     name: "John",
// // //     age: 30,
// // //   };
// // // };

// // // type Person = {
// // //   name: string;
// // //   age: number;
// // //   gender: string;
// // // };

// // // function getPersonNameAndAge(person: Person): Omit<Person, "gender"> {
// // //   return {
// // //     name: person.name,
// // //     age: person.age,
// // //   };
// // // }

// // // const arr = [123, 456,789,908];
// // // const matrix = arr.map((item) => Array.from(item, Number))
// // // console.log("matrix ", matrix)
// // // let transposeData = matrix[0]?.map((_, i) => matrix?.map((row) => row[i]));

// // // console.log(transposeData);

// // // const numbers = [123, 122, 111];
// // // const splitNumber = numbers.map((number) => {
// // //   let a = Array.from("" + number, Number);
// // //   let count = 0;

// // //   [1,2,3].reduce((acc, curr) => {
// // //     // console.log(acc)
// // //     if (acc >= curr) {
// // //         console.log("curr" , curr)
// // //         //acc++
// // //     }
// // //     // console.log("curr" , curr)
// // //   }, 0);
// // // });

// // // console.log(splitNumber);

// // const array = [1, 2, 3];

// // function countOccurrences(array, numberOfOccurence) {
// //   let count = 0;

// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] === numberOfOccurence) {
// //       count++;
// //     }
// //   }

// //   return count;
// // }

// // const result = countOccurrences(array, 2);
// // // console.log(result); // Output: 2

// // // function abc() {
// // //   const numbers = [123, 122, 111, 133];
// // //   let a;
// // //   let targetIds = numbers.map((number, index) => {
// // //     let array = Array.from("" + number, Number);
// // //     let target = countOccurrences(array, 3);
// // //     return target;
// // //   });
// // //   return targetIds;

// // //   //   if (target === 2) {
// // //   //     a = numbers.filter((_, i) => index === i);
// // //   //   }
// // // }

// // // // console.log(abc());
// // // const numbers = [123, 122, 111];

// // // // Create a set.
// // // const set = new Set(numbers);

// // // // Iterate through the array and remove each number from the set.
// // // for (const number of numbers) {
// // //   set.delete(number);
// // // }

// // // // The only number that is left in the set is the repeating number.
// // // const repeatingNumber = set.values().next().value;

// // // // Print the value of the repeating number.
// // // console.log(repeatingNumber);

// // // const arr = [1, 2, 3, 4, 5];

// // // console.log(arr.find((num) => num % 2 === 0));
// // // let a = ["123"]
// // // console.log(String(a).sort())

// // const data = {
// //   "1v2": [1, "Dragon", 2, "Tiger"],
// //   "1v3": [1, "Dragon", 2, "Tie"],
// //   "1v4": [1, "Dragon"],
// //   "1v5": [1, "Dragon", 2, "Tie", 3, "Tiger"],
// // };

// // // let filteredKeyArra = Object.keys(data)[0]
// // let filteredKeyArr = Object.keys(data).map((arr) => {
// //   let a = data[arr].filter((item) => typeof item === "string");
// //   return {
// //     [arr]: a,
// //   };
// // });

// // // const array = [{"1v2":["Dragon","Tiger"]},{"1v3":["Dragon","Tie"]},{"1v4":["Dragon"]},{"1v5":["Dragon","Tie","Tiger"]}];
// // function boxUserSelections(filteredKeyArr) {
// //   const convertedArray = [];

// //   for (let item of filteredKeyArr) {
// //     for (let [key, value] of Object.entries(item)) {
// //       convertedArray.push(`${key} ${value.join(", ")}`);
// //     }
// //   }

// //   const convertedString = convertedArray.join(" | ");
// //   return convertedString;
// // }
// // console.log(boxUserSelections());

// // // [{"1v2":["Dragon","Tiger"]},{"1v3":["Dragon","Tie"]},{"1v4":["Dragon"]},{"1v5":["Dragon","Tie","Tiger"]}]
// // // 1v2 Dragon,Tiger | 1V3 Dragon, Tie | 1V4 Dragon | 1v5 Dragon, Tie, Tiger
// // //
// // // console.log(JSON.stringify(filteredKeyArr));
// // // let tt = data[filteredKeyArr].filter((item) => typeof item === "string")

// // // let tt =
// // // .map((key) =>
// // //   data
// // // //   [key].filter((item) => typeof item !== "string")
// // // );

// // // let result1 = filteredKeyArr.reduce((acc, curr) => curr.length + acc, 0);
// // // data[filteredKeyArr] = tt;

// const Buttons = [
//   "Four of a kind",
//   "Gourd",
//   "Streak",
//   "Three of a Kind",
//   "2 pairs",
//   "1 pair",
//   "High Card",
// ];

// const selections = {
//   firstRow: [1, 3, 6],
// };

// function getValueAtIndex(buttons, selections, index) {
//   if (index >= 0 && index < Buttons.length) {
//     return Buttons[index];
//   }
//   return undefined;
// }

// // let b = selections["firstRow"].map((number) => {
// //   getValueAtIndex(buttons, selections, number - 1);
// // });
// // console.log(b);

// function studSelections(selections, buttons) {
//   return selections["firstRow"].map((number) => {
//     let index = number - 1;

//     if (index >= 0 && index < Buttons.length) {
//       return buttons[index];
//     }
//     return undefined;
//   });
// }
// console.log(go(selections, Buttons));
// // for (let index = 0; index < Buttons.length; index++) {
// //   const element = Buttons[a[0]];
// //   console.log(element)

// // }
// // console.log(Buttons[0])

let a = ["a","b","c","d"]
console.log(a.join(" , "))