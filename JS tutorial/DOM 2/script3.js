let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);

//Ques 2

let para = document.querySelector("p");
para.classList.add("newPara");
