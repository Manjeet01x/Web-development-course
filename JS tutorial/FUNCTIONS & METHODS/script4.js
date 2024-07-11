//forEach loop in arrays  it is actually a method   generally in arrow function not in normal function
//also called higher order function or higher order method

let arr = ["mumbai","pune","bangalore"];

arr.forEach((val, idx, arr) => { //each value at each index
     console.log(val.toUpperCase(), idx, arr);
});

