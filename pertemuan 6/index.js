//ARray & Object in JavaScript
//.1 Array
// Cara mendeklarasikan array
//Cara .1 Array literal
let students = ["John", "Jack", "Peter", "Bob"]
let john = ["John", 30, true, [80, 90, 100]]

//Cara .2 Kata kunci "new"
let employees = new Array("John", "Jack", "Peter", "Bob");

console.log(students);

//Meruba
console.log(students[2]);
john[2] = false; //modifikasi array

console.log(john.length);
console.log(students[students.length-1]);

//Array Method
let array = [1,2,3, "Hello", false, true];
array.toString(); //mengubah array menjadi string

//2. Join
console.log(array.join(" - ")); //mengubah array menjadi string dengan pemisah
console.log(array.join(" * ")); //mengubah array menjadi string dengan pemisah
array.pop(); //menghapus elemen terakhir pada array
array.push("Yehka"); //menambah elemen terakhir pada array
array.shift(); //menghapus elemen pertama pada array
array.unshift("First"); //menambah elemen pertama pada array
array.splice(2, 0, "New"); //menambah elemen pada index tertentu

let numbers = array.slice(2, 4); //menghapus elemen pada index tertentu
console.log(numbers);

//Concat
let num1 = [1,2,3];
let num2 = [4,5,6];
let num3 = [7,8,9];
let allNum = num1.concat(num2, num3); //menggabungkan array

array.sort(); //mengurutkan elemen pada array
console.log(array);

//2. Object -> memiliki properti dan nilai
let johnObj = {
  fullName: "John Doe",
  age: 30,
  isActive: true,
  grade: [80, 90, 100],
  address: {
    street: "Jl. ABC No. 123",
    city: "Jakarta",
    country: "Indonesia"
  },
  sayHello: function() {
    console.log("Hello, " + this.fullName);
    // return "Hello, " + this.fullName;
  }
}

console.log(johnObj);
console.log(johnObj.fullName); //mengakses properti pada object
console.log(johnObj.grade[1]); //mengakses properti pada object
console.log(johnObj.address.street); //mengakses properti pada object
johnObj.sayHello(); //mengakses method pada object

//Cara 2. Bracket notation
console.log(johnObj["fullName"]); //mengakses properti pada object
console.log(johnObj["grade"][1]); //mengakses properti pada object
console.log(johnObj["address"]["street"]); //mengakses properti pada object
johnObj["sayHello"](); //mengakses method pada object

johnObj.job = "Developer"; //menambah properti pada object
console.log(johnObj);