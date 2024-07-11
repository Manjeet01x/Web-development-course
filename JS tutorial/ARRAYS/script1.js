//Arrays collection of items, linear form to store info.
let students = ["manjeet","rahul","sahil","rohan","sachin"];
let marks = [83,24,63,56];
console.log(marks);
console.log(students.length);

//Array indices
let heroes = ["hulk", "ironman", "hawkeye", "spiderman"];
console.log(heroes[0]);
heroes[3] = "black panther";
console.log(heroes[3]);

//for loop
for(let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

//for of and for in can also be used but for arrays for of loop is preferred
let heroes2 = ["hulk", "ironman", "hawkeye", "spiderman"];
for (let hero of heroes2) {
    console.log(hero);
}

let cities = ["Delhi", "Pune", "Gurugram" , "Mumbai"];
for(let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
