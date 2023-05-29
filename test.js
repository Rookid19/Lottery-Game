// // let sen = "let's pad this sentence";

// // let arr = sen.split(" ");

// // let longest_sentence = arr.reduce((acc, curr) => Math.max(acc, curr.length), 0);

// // // console.log("longest_sentence", longest_sentence);

// // let new_sentence = arr.map((word) => {
// //   let deduc = longest_sentence - word.length;
// //   let second = Math.floor(deduc / 2);
// //   let first = deduc - second;
// //   return word.padStart(word.length + first, " ").padEnd(longest_sentence, " ");
// // });

// // // console.log(new_sentence.join(" "));

// // // let a = "3";
// // // console.log(a.repeat(100))
// // // // a.concat(a)
// // // // console.log([1,2,3].map((x) => "3").join(""))
// // // console.log(Array(10).join("3"))
// // // // for(let i =0, i<=)
// // // //"333"

// // // let a = [1,2,3]
// // // console.log(a.with(2,4))

// // // Array.prototype.with = function(index, element) {
// // //   this.splice(index, 1, element);
// // //   return this;
// // // };

// // // let a = [1, 2, 3];
// // // a.with(1, 4);
// // // console.log(a);
// // let a = [1, 2, 3, 4, 5];
// // a.copyWithin(1, 2); //[1,]

// // console.log(a);

// interface itemId {
//   id : string;
// }

// interface Author extends itemId{
//   name: string;
//   age: number
// }

// interface Book extends itemId{
//   title: string;
//   pages:number;
//   type: BookType
// }

// type BookType = 'romantic' | 'horror' | 'comedy'

// function updateBookTitle(bookTitle){
//   // return bookTitle;
// console.log(bookTitle)
// }

// // const updateAuthor = (authorName) =>{
// //   return authorName;
// // }

// type Person = {
//   name: string;
//   age: number;
//   gender: string;
// };

// const person: Omit<Person, "gender"> = {
//   name: "John",
//   age: 30,
// };

// type Person = {
//   name: string;
//   age: number;
//   gender: string;
// };

// type PersonNameAndAge = Pick<Person, "name" | "age">;

// // const person: Person = {
// //   name: "John",
// //   age: 30,
// // };

// const a = (person): Object => {
//   return {
//     name: "John",
//     age: 30,
//   };
// };

// type Person = {
//   name: string;
//   age: number;
//   gender: string;
// };

// function getPersonNameAndAge(person: Person): Omit<Person, "gender"> {
//   return {
//     name: person.name,
//     age: person.age,
//   };
// }

const arr = [123, 456,789,908];
const matrix = arr.map((item) => Array.from(item, Number))
console.log("matrix ", matrix)
let transposeData = matrix[0]?.map((_, i) => matrix?.map((row) => row[i]));

console.log(transposeData);