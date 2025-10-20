// String Literal, Arrow Function, Default Parameter
// 1. String Literal

// let fullName = "John Doe";
// let age = 30;
// let address = "Manado";


// Hallo, nama saya John Doe, umur saya 30 tahun, saya tinggal di Manado.
// let kalimat = "Halo, nama saya " + fullName + ", umur saya " + age + " tahun, saya tinggal di " + address + ".";  
// console.log(kalimat);
// let message = `Hallo, nama saya ${fullName}, umur saya ${age} tahun, saya tinggal di ${address}.`;
// console.log(message);

// 2. Arrow Function

// function sayGreetings(fullName){
//   return `Hi, my name is ${fullName}`;
// }
// console.log(sayGreetings("John Doe"))


// const greet = (name) => {
//     return `Halo, my name is ${name}!`;
// };

// console.log(greet("John Doe"));

// // Arrow Function pada IIFE
// let output1 = (() => `Hello`)();
// console.log(output1);

// // Arrow Function pada Callback
// let numbers = [1, 2, 3, 4 ,5]
// let output2 = numbers.map((item) => item + 2);
// console.log(output2)

// 3. Default Parameter
// const sayGreetings = (fullName, age, address) => {
//   if (fullName === undefined) {
//     fullName = "John";
//   }if (age === undefined) {
//     age = 30;
//   }if (address === undefined) {
//     address = "Manado";
//   }
//   return `Halo, nama saya ${fullName}, umur saya ${age} tahun, dan saya tinggal di ${address}.`;
// }
// console.log(sayGreetings("John Doe", 30, "Manado"));

// const greetUser = (name = "User") => {
//     return `Halo, ${name}!`;
// };

// console.log(greetUser("John Doe"))


const sayGreetings = (fullName = "John", age = 30, address = "Manado") => 
  `Halo, nama saya ${fullName}, umur saya ${age} tahun, dan saya tinggal di ${address}.`;

console.log(sayGreetings())