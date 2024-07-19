// some more important array methods

// Map method similar to for each but forms a new array
let nums = [23,35,54];
let newArr = nums.map((val) => {
    return val;
});
console.log(newArr);

//Filter method and gives true for a condition will return to us in a new array
let arr = [1,2,3,4,5,6,7,8];
let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);

//Reduce method reduces the array to a single value and returns that single value
let numbers = [1,2,3,4];

const output = numbers.reduce((prev, curr) => {
    return prev + curr;
});
console.log(output);


 
