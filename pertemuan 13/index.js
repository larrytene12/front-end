// Asynchronous JavaScript

// Synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3"); //Proses yang memakan waktu lama
// console.log("Proses 4");

// Asynchronous -> multi thread -> non blocking
// 1. Paralell
// setTimeout(() => {
//   console.log("Proses 1");
// }, 4000);
// setTimeout(() => {
//   console.log("Proses 2");
// }, 2000);
// setTimeout(() => {
//   console.log("Proses 3");
// }, 5000);
// setTimeout(() => {
//   console.log("Proses 4");
// }, 1000);

// 2. Concurrent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//         console.log("Proses 3");
//         setTimeout(() => {
//           console.log("Proses 4");
//       }, 1000000);
//     }, 5000);
//   }, 5000);
// }, 1000);

// Promise
let condition = true;
const newPromise = new Promise((resolve, reject) => {
  if (condition){
    resolve("Berhasil")
  } else {
    reject("Gagal")
  }
});

// Cara menggunakan Promise
// 1. then catch
newPromise
.then((result) => console.log(result))
.then((result2) => console.log(result2))
.catch((error) => console.log(error));

// //2. Async/await
// // Buat didalam fungsi
// const getData = async () => {
//   const result = newPromise;
//   console.log(result);
// };
// getData();

// Get data dari API menggunakan fetch
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((result) => result.json())
// .then((json) => console.log(json));

// const getUser = async() => {
//   const result = await fetch("https://jsonplaceholder.typicode.com/users");
//   const json = await result.json();
//   json.forEach(({name}) => console.log(name));
// }

// getUser();

// Mini Exercise
// Ubah then-catch diatas dengan menggunakan async/await
// dan tampilkan field name saja