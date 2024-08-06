//classes
class toyotaCar{
    constructor(brand,mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }

     start() {
        console.log("start");
     }

     stop() {
        console.log("stop");
     }

}

let fortuner = new toyotaCar("fortuner",10);
let lexus = new toyotaCar("lexus",8);

//Inheritance

class parent {
    hello() {
        console.log("hello");
    }
}

class child extends parent {
    work() {
        console.log("work");
    }
}

let object = new child();

//super keyword to call parent's constructor must be called before creating new constructor in child class
class person {
    constructor() {
        this.species = "homo sapiens";
    }

    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }
}

class doctor extends person {
    constructor(branch) {
        super();
        this.branch = branch;
    }
    work() {
        console.log("treat patients");
    }
}

let manjeet = new doctor("dentist");