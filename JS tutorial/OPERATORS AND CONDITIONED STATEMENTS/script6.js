//Conditional statements
// 1st if statement
/*let age = 16;

if(age >= 18) {
    console.log(" You can vote");
}

if(age < 18) {
    console.log("You can't vote");
}


let mode = "dark";
let color;

if(mode === "dark") {
    color = "black";
}

if (mode === "light") {
    color = "white";
}

console.log(color); */

// 2nd if-else statement

let mode = "blue";
let color;

if(mode === "dark-mode") {
    color = "black";
}else {
    color = "white";
}

console.log(color);


// 3rd else-if statement

let age = "32";
let rank;

if(age <= 18) {
     rank = "Junior";
}
else if(age > 40) {
    rank = "senior";
}else {
    rank = "sub-senior";
}

console.log(rank);