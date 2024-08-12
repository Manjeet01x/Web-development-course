//Promises is a object
let promise = new Promise((resolve, reject) => {
    console.log("i'm a promise");
    resolve("success"); //reject and pending states also
});

//generally we get promises returned

const getPromise = () => {
    return new Promise ((resolve,reject) => {
        console.log("hello i'm a promise");
        resolve("success");
    });
};

let newPromise = getPromise();
newPromise.then(() => {
    console.log("promise fulfilled");
});

//promise.catch when promise get rejected

//Promise chain
function asyncFunc1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 4000);
    });
}

let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
    let p2 = asyncFunc2();
    p2.then((res) => {
        console.log(res);
    });
});

