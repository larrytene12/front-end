let people = ["Greg", "Mary", "Devon", "James"];

//1.
for(let i = 0; i < people.length; i++){
    console.log(people[i])
}

//2. 
people.forEach(function(item) {
    console.log(people);
  });

//3. 
people.shift()
console.log(people)

//4. 
people.pop()
console.log(people) 

//5.
people.unshift("Matt");
console.log(people);

//6. 
people.push("Daniel");
console.log(people)

//7. 
for(let i = 0; i < people.length; i++){
    console.log(people[i])
    if (people[i] === "Mary"){
        break
    }
}

//8. 
let filteredPeople = people.filter(person => person !== "Mary" && person !== "Matt");
let copyOfFilteredPeople = filteredPeople.slice();
console.log(copyOfFilteredPeople)

//9. 
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//10. 
let withBob = people.concat("Bob");
console.log(withBob);

//Object
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");

programming["difficulty"] = 7;

delete programming.jokes;

programming.isFun = true;

programming.languages = programming.languages.map((language, index) => `${index} - ${language}`);
console.log(programming.languages);