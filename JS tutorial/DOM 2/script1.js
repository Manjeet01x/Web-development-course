//DOM manipulation

//to get attribute value
let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

//to set attribute value
let heading = document.querySelector("h1");
console.log(heading);
let head = heading.setAttribute("id","head");

//to get Style (for inline styling)
let div2 = document.querySelector("div");
console.log(div2);
div.style.backgroundColor = "brown";
div.style.color = "white";
div.innerText = "Hello!";


