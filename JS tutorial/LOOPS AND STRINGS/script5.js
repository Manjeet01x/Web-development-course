// String methods used to manipulate strings new string created
let str = "Manjeet";
let newStr = str.toUpperCase();
console.log(str);
console.log(newStr);

//.toLowerCase

//remove whitespaces trim method from starting and end
let str2 = "     Manjeet     Mehra        ";
console.log(str2.trim());

// str.slice(start,end?)
let str3 = "hello world";
console.log(str3.slice(1,5));

//string concat
let str4 = "Manjeet";
let str5 = "Mehra";

let res = str4.concat(str5);  // same by str4+str5
console.log(res);

//replace method
let str6 = "Hello"
console.log(str6.replace("H","Y"));

//character at method
let str7 = "IloveJS";
 console.log(str7.charAt(5));


