const obj = {
 
  arr1: [1, 2],
  arr2: [1],
  arr3: [1],
  arr4: [1],
  arr5: [1],
};

// function a() {
//   arr1.length * arr2.length * arr3.length * arr4.length * arr5.length;
// }

console.log(Object.values(obj).reduce((acc, arr) => acc * arr.length,1));
