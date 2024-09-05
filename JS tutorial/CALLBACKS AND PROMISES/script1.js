//synchronous programming 1st one work then 2nd,in a sequence
console.log("one");
console.log("two");
console.log("three");

//asynchronous, for code which take too much time like seconds
function hello() {
    console.log("hello");
}

setTimeout(hello, 2000); //in milliseconds

console.log("four");

//Callbacks function which passes in another function as an argument
function sum(a,b) {
    console.log(a + b);
}
function calculator(a,b, sum) {
    sum(a,b);
}

calculator(1,2,sum);

//asynchronous callbacks
const hi = () => {
    console.log("hi");
}

setTimeout(hi,3000);

//callback hell
//nesting happen sometimes 
//nested if else

let age = 19;
if(age >= 18) {
    if(age >= 60) {
        console.log("senior");
    }else{
        console.log("middle");
    }
}else{
    console.log("minor");
}

//nested loops also exist
for(let i=0; i < 5; i++) {
    for(let m = 0; m<5; m++) {
        console.log(m);
    }
}

//nesting can also happen in callbacks that is callback hell

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
} 

//callback hell or nested callbacks form pyramid structure
getData(1, () => {
    getData(2, () => {
        getData(3);
    });
});



