let mode = document.querySelector("button");
let body = document.querySelector("body");
let currMode = "light";

mode.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else {
        currMode = "light";
        body.classList.add("light");
    }

    console.log(currMode);
})


