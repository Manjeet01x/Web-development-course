//Methods in arrays
//Push() method = to add something in the end

let veggies = ["Potato", "Brinjal", "Caluliflower", "Onion"];
console.log(veggies);
veggies.push("cucumber", "peas");
console.log(veggies);

//Pop() delete from end and return

let foodItems = ["rice", "chips", "biscuit"];
console.log(foodItems);
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("deleted item = ",deletedItem);

//.toString = to convert an array to string and return new string
let fruits = ["apple", "mango", "papaya", "banana"];
console.log(fruits);
console.log(fruits.toString());

//.concat() method = to join multiple arrays
let marvelHeroes = ["hulk", "ironman" , "hawkeye", "spiderman"];
let dcHeroes = ["superman", "batman"];

let heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);

//Unshift method = to add in the start
let furniture = ["chair","table"];
furniture.unshift("bench")
console.log(furniture);

//shift method = delete from start and reprint
let accessories = ["mouse","keyboard", "scanner"];
let deletedAccessory = accessories.shift();
console.log("deleted accessory =",deletedAccessory);

//slice() = returns a piece of array
let groceries = ["apple", "chocolate", "litchi", "biscuit", "coffee"];
console.log(groceries);
console.log(groceries.slice(1,4));

//splice() = change original array (add, remove, replace)
//splce(startIdx,delCount,newElement)
let items = ["apple", "chocolate", "litchi","rice", "chips", "biscuit"];
console.log(items);
items.splice(2,3,"books","pages");
console.log(items);

//Add element only
//items.splice(2,0,"pen")

//delete element only
//items.splice(3,1)

//Replace element
//items.splice(3,1,"bookmark")







