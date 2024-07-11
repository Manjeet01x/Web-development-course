/* 7primitive datatypes number, string, boolean, undefined, null, bigint, symbol*/ /*Non-Primitive objects(Arrays,Function)*/
let age = 24;

let fullName = "Tony Stark";

let x;

let a = null;

let s = BigInt("1234");

let y = Symbol("Hello!");

const student = {
    fullName : "Raman Kumar",
    age: 20,
    cgpa: 8.4,
    isPass: true
};
student["age"] = 22;
student["fullName"] = "Rahul Sharma";

console.log(student["age"]);
console.log(student.age);