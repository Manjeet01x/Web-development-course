let divs = document.querySelectorAll(".box");
console.dir(divs[0]);
console.dir(divs[1]);
console.dir(divs[2]);

let idx = 1;
for(div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++; 
}

/*divs[0].innerText = "Hello World";
divs[1].innerText = "Hey";
divs[2].innerText = "Hello";*/