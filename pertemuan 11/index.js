// Rest Parameter & Spread Operator
// 1. Rest Parameter
// a. Rest parameter bertipe data array

// const funct1 = (param1, param2, param3) => {
//   console.log(param1, param2, param3);
// };

// funct1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// const funct1 = (...rest) => {
//   console.log(rest);
// };

// funct1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Mini Exercise
// Buatlah fungsi yang dapat menjumlahkan semua nilai
// Pada argument fungsi

// const penjumlahan = (...rest) => {
//     let hasil = 0;
//     rest.forEach((item) => (hasil += item));
//     return hasil;
// }
// console.log(penjumlahan(5, 5, 5, 5, 5));
/////////////////////////////////////////////////

// 2. Spread Operator
// Berkaitan dengan Array & Object

const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // 1 2 3 4 5
console.log(...numbers); // 1 2 3 4 5

// Kegunaan Spread Operator pada Array
// 1. Untuk duplikasi array
const numbers2 = [...numbers];
console.log(numbers2); // [ [ 1, 2, 3, 4, 5 ] ]

// 2. Menggabungkan array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let combinedArr1 = arr1.concat(arr2, arr3);
console.log(combinedArr1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
let combinedArr2 = [...arr1, ...arr2, ...arr3];
console.log(combinedArr2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Kegunaan Spread Operator pada Object
// 1. Untuk duplikasi object
const student1 = {
  fullName: "John",
  status: "Active",
}

const student2 = { ...student1, address: "Manado" };
console.log(student2); // { fullName: 'John', status: 'Active' }

// 2. Menggabungkan object
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let combinedObject = {...obj1, ...obj2 };
console.log(combinedObject); // { a: 1, b: 2, c: 3, d: 4 }
