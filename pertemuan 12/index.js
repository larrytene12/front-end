// Destructing & Module
// 1. Destructuring / Desktruturisasi Array & Object
// let numbers = [1, 2, 3, 4, 5]; //Structuring

// Destructuring Array
// Cara lama
// let num1 = numbers[0];
// let num1 = numbers[0];
// let num2 = numbers[1];
// let num3 = numbers[2];
// let num4 = numbers[3];
// let num5 = numbers[4];
// console.log(num1, num2, num3, num4, num5); // 1 2 3 4 5

// const [a, b, c, d, e] = numbers; // Destructuring
// console.log(a, b, c, d, e); // 1 2 3 4 5

// Destructuring sebagian item saja
// const [x, y, , , z] = numbers;
// console.log(x, y, z); // 1 2 5

// Destructuring dengan rest parameter
// const [x, ...rest] = numbers;
// console.log(x, rest);

// Destructuring Object
// let student = {
//   fullName: "John Doe",
//   age: 20,
//   status: "Active",
// };

// const fullName = student.fullName;
// const age = student.age;
// const isActive = student.status;
// console.log(fullName, age, isActive); // John Doe 20 Active

// const{fullName: fn, age: a, status: s} = student;
// console.log(fn, a, s); // John Doe 20 Active

// Sebagian Item saja
// const {age} = student;
// console.log(age); // John Doe { age: 20, status: 'Active' }

// Dengan Rest Parameter
// const {fullName, ...rest} = student;
// console.log(fullName, rest); // John Doe { age: 20, status: 'Active' }

// Mini Exercise
// Cari di exercise 4, dibagian mana bisa ditambahkan destructuring

//1
// function calculateAge(birthYear){
// 	return 2019 - birthYear;
// }

// function yearUntilRetirement(year, firstName){
// 	var age = calculateAge(year);
// 	var retirement = 60 - age;

// 	if(retirement > 0){
//     	console.log(firstName + ' retires in '+ retirement + ' years');
// 	} else {
//     	console.log(firstName + ' is already retired.');
// 	}
// }

// yearUntilRetirement({year: 1987, firstName: 'John'});


// //3.

// var phi = 3.14;
// var power = 2;
// var radius = 0;

// var calculateArea = function (radius, power) {
//   return phi * Math.pow(radius, power);
// };

// radius = 21;
// var area21 = calculateArea({radius: radius, power: 2 });

// radius = 7;
// var area7 = calculateArea({radius: radius, power: 2 });

// console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);


// 2. Module

import { student, numbers } from "./data.js"; // Front end
import ucapkanSalam from "./sayGreetings.js";
// const student = require("./data.js"); //Back end
console.log(student); // { fullName: 'John Doe', age: 20, status: 'Active' }
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
ucapkanSalam("John"); // Hello, John