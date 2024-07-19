//we can access html in windows -> document
let heading = document.getElementById("heading"); 
console.dir(heading);

let headings = document.getElementsByClassName("heading");
console.dir(headings);

let paras = document.getElementsByTagName("p");
console.dir(paras);

//better one is query selector
let element = document.querySelector("button"); //class name by .class always and #forId
console.dir(element);

let El = document.querySelectorAll("p");
console.dir(El);
