let n = prompt("type a number");
let arr = [];

for(let i=1; i<=n ; i++) {
    arr[i-1] = i;
}

let sum = arr.reduce((res,curr) => {
    return res +curr
});

console.log(sum);

let prod = arr.reduce((res,curr) => {
    return res*curr
});
console.log(prod);
