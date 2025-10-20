// JavaScript Conditional & Loop
// 1. JavaScript Conditional
// if, else
// let suhu = 35;
// if (suhu >= 38) {
//   console.log("Suhu Panas");
// }
// else{
//   console.log("Suhu Normal");
// }



// // if, else if, else
// let nilai = 80;
// if (nilai >= 91 && nilai <=100) {
//   console.log("A");
// }
// else if (nilai >= 81 && nilai <=100) {
//   console.log("B");
// }
// else if (nilai >= 71  && nilai <=80) {
//   console.log("C");
// }
// else if (nilai <= 71) {
//   console.log("D");
// }
// else{
//   console.log("Out of Range");
// }

// // switch case
// let hari = 5;
// switch (hari) {
//   case 1:
//     console.log("Senin");
//     break;
//   case 2:
//     console.log("Selasa");
//     break;
//   case 3:
//     console.log("Rabu");
//     break;
//   case 4:
//     console.log("Kamis");
//     break;
//   case 5:
//     console.log("Jumat");
//     break;
//   case 6:
//     console.log("Sabtu");
//     break;
//   case 7:
//     console.log("Minggu");
//     break;
//   default:
//     console.log("Out of Range");
//     break;
// }


// 2. JavaScript Loop
// for
// for (let i = 1; i <= 10; i++) {
//   console.log("Perulangan ke - " + i);
// }

// while
// let j = 1;
// while (j <= 10) {
//   console.log("Perulangan ke - " + j);
//   j++;
// }


// do...while
// let k = 1;
// do {
//   console.log("Perulangan ke - " + k);
//   k++;
// } while (k <= 10);


// for...in
// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers);
// for (i = 0; i < numbers.length; i++) {
//   console.log("Index ke - " + i + " adalah " + numbers[i]);
// }

let numbers = [10, 20, 30, 40, 50];
// for (let index in numbers) {
//   console.log("Index ke - " + index + " adalah " + numbers[index]);
// }

// Built-in Method
// 1. ForEach()
numbers.forEach(function(value){
  console.log(value);
});

// 2. map()
let output = numbers.map(function(value){
  return value + 2;
});

console.log(output);

// 3. filter()
let filterOutput = numbers.filter(function(value){
  return value > 25;
});

console.log(filterOutput);

// 4. find()
let findOutput = numbers.find(function(value){
  return value > 25;
});
console.log(findOutput);

// 5. reduce()
let reduceOutput = numbers.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
}, 0);

console.log(reduceOutput);

// 6. findIndex()
let findIndexOutput = numbers.findIndex(function(value){
  return value > 25;
});
console.log(findIndexOutput);

// 7. some()
let someOutput = numbers.some(function(value){
  return value > 25;
});
console.log(someOutput);

// 8. every()
let everyOutput = numbers.every(function(value){  
  return value > 5;
});
console.log(everyOutput);
