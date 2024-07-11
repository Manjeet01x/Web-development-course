// Loops 
//1. for loop
/*for(let count = 1; count <= 5; count++) {
    console.log("Manjeet");
} */


// Calculate sum of 1 to 5
let sum = 0;
for(let i = 1; i <= 5; i++){
    sum = sum + i;
}    
console.log("sum = ",sum);
console.log("loop has ended");

//infinite loops
//for(let i = i; i<=0; i++)


//while loop
/*i = 1;
while(i<=5) {
    console.log("i =",i);
    i++;
}*/


//Do while loop
/*let i = 1;
do {
    console.log("i =",i);
    i++;
} while(i<=5);  */


//for-of loops  to give loop to strings and arrays
let str = "Manjeet Mehra";
let size = 0;

for(let val of str) { //iterator - characters will come
    console.log("val = ",val);
    size++;
}

console.log("string size =",size);

//for-in loops used for objects and arrays , write the keys of the objects
let student = {
    name : "Manjeet",
    age : 20,
    cgpa : 9.5,
    isPass : true   
};

for(let val in student) {
    console.log("key = ", val, "value = ", student[val]);
}

