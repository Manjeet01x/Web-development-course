// to add/insert new element in DOM = 1st create the element then add it 2step process.
let newButton = document.createElement("button");
newButton.innerText = "click me";
console.log(newButton);

//to  add at the end of the node(inside)
let div = document.querySelector("div");
div.append(newButton);
//.prepend for starting
//node.before for add just before the node and outside it 
//node.after just after outside it.


//to remove/delete node
let heading = document.querySelector("h1");
heading.remove();