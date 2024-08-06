const student = {
    name : "manjeet",
    marks : 94,
    printMarks : function() {
        console.log(`marks = ${this.marks}`);
    },  
}

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    }
}

const rahul = {
    salary : 50000,
    calcTax() {
        console.log("tax rate is 20%");
    }
}

rahul.__proto__ = employee;