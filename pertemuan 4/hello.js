function greetings (fullName) {
  return"Hello, " + fullName 
}

const output = greetings("Tasya");
console.log(output); // Hello, Tasya!


//Global, Local, and Block Scope Variable
let globalVar = "I am a global variable";

function localScopeExample() {
  let localVar = "I am a local variable";
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible
}


//Mini exercise
//Modifikasi mini exercise tenteang menghitung BMI
// dengan menggunakan fungsi
// dimana berat dan tinggi sebagai argument (input) dan BMI sebagai output
function BMI(weight, height) {
  return weight / (height ** 2);
}

console.log(BMI(95, 1.7)); // 32.99