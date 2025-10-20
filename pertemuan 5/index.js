//JavaScript IIFE & Callback Function
//1.IIFE(Immediatelu Invoke Function Expresseion)
//  self-executing anonymous function

// (function (){
//     console.log("Hello World")
// })();

// IIFE with parameter & return value
// (funciton (fullName) {
//     console.log("Hello " + fullName);
// })("John Doe")

// let output = (function (fullName) { //fullName = parameter
//     return "Hello " + fullName;
// })("John Doe"); //John Doe = Argument
// console.log(output);

// function greetings(callback){
//     callback()
// }
//callback harus anonymous
// greetings(function () {
//     console.log("Hello Callback")
// })

//Callback with parameter & return value
// function greetings(callback) {
//     let result = callback("John Doe");
//     console.log(result);
// }

// function greetings(callback) {
//     let result = callback("John Doe");
//     return result;
// }

// greetings (function (fullName) {
//     console.log("Hello " + fullName);
// })("John Doe");

// greetings (function (fullName) {
//     return "Hello " + fullName;
// });

//Exercise #01
//Buat program untuk menghitung BMI dgn menggunakan
//IIFE & Callback Function yang memiliki parameter &
//return value