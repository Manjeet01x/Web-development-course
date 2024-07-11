//functions = block of code performs a specific task and call/invoke it.

function myFunction() {
    console.log("I'm here");
    console.log("We are learning JS");
}

myFunction();

function function1(msg, n) { //parameter 
    console.log(msg);
}

function1("I'm the best.", 245); //argument

function sum(a, b) {
   console.log(a + b);
}

sum(1, 2);

function sum2(x,y) {
    //parameters are local varaibles of function.
    sum = x + y;
    return sum;
}

let value = sum2(3,4);
console.log(value);

//Arrow functions  used to write functions in short form (Modern JS)
//Used for small tasks

/* function sub(a,b) {
    return a - b;
}

function mul(a,b) {
    return a * b;
} */

const arrowSum = (a,b) => {
    console.log(a + b);
};
arrowSum(5,3);

const multi = (x,y) => {
    console.log(x * y);
}
multi(7,2);
multi(3,2);

const print = () => {
    console.log("Hello");
}
print();

