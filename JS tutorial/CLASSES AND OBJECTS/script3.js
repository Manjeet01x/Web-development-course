let data = "information";

class user {
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }
    
    viewData() {
        console.log(data);
    }
}

let student1 = new user("manjeet","manjeet@gamil.com");
let student2 = new user("rohan","rohan@gmail.com");

class admin extends user {
     constructor(name,email) {
        super(name,email);
     }

     editData() {
        data = "new information"
     }
}

let admin1 = new admin("admin","admin@gmail.com");

//Error handling try-catch

let a = 5;
let b = 3;
console.log(a+b);

try {
    console.log(a+c);
}catch(err) {
    console.log(err);
}