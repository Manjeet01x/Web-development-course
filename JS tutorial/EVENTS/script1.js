//event handling

let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn1 was clicked.");
    let a = 25;
    a++;
    console.log(a);
}

let box= document.querySelector("div");
/*box.onmouseover = (e) => { //event object has details about the object
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log("box was hovered");
} */

// same work through event listeners can be created multiple times
box.addEventListener("mouseover", () => {
    console.log("box was hovered 1");
})

box.addEventListener("mouseover", (evt) => {
    console.log(evt);
})

box.addEventListener("mouseover", () => {
    console.log("box was hovered 2");
})

const handler3 = () => {
    console.log("box was hovered 3");
}
box.addEventListener("mouseover",handler3)

//remove event listener  we should add it in a variable
box.removeEventListener("mouseover",handler3)

