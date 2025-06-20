
//shollow copy
const original = {
  name: "Asmita",
  address: {
    city: "Pune",
    pin: 411001
  }
};


const shallowCopy = { ...original };


shallowCopy.address.city = "Mumbai";

console.log("Original:", original.address.city); // Mumbai 
console.log("Copy:", shallowCopy.address.city);  // Mumbai

// deep copy

const original1 = {
  name: "Asmita",
  address: {
    city: "Pune",
    pin: 411001
  }
};

const deepCopy = JSON.parse(JSON.stringify(original));

// Modify deep copy
deepCopy.address.city = "Nagpur";

console.log("Original:", original.address.city); // Pune ✅
console.log("Copy:", deepCopy.address.city);     // Nagpur

//call
function greet(city) {
  console.log(`Hello ${this.name} from ${city}`);
}

const user = { name: "Asmita" };
greet.call(user, "Pune");

//apply 
greet.apply(user, ["Nagpur"]);

//bind 
const greetUser = greet.bind(user, "Delhi");
greetUser(); 

//prototype
function Person(name) {
  this.name = name;
}

// add method to prototype
Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

const user1 = new Person("Asmita");
user1.sayHello(); // Hello, my name is Asmita


function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + " makes a sound.");
};

function Dog(name) {
  Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const d = new Dog("Rocky");
d.speak(); 








//ES6 

// 1. let & const
let name = "Asmita";
const age = 25;
let city = "Nagpur";
console.log("1. let & const:", name, age, city);

// 2. Arrow Functions
const greet1 = () => "Hello!";
const add = (a, b) => a + b;
const square = x => x * x;
console.log("2. Arrow Functions:", greet1(), add(2, 3), square(4));

// 3. template Literals
console.log(`3. template Literals: My name is ${name}, I'm ${age} from ${city}`);

// 4. Object Destructuring
const person = { fname: "Asmita", location: "Mumbai" };
const { fname, location } = person;
console.log("4. Destructuring:", fname, location);


// 5. Spread Operator
const arr1 = [1, 2], arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log("5. Spread Operator:", combined);

// 6. Default Parameters
function welcome(user = "Guest") {
  console.log("6. Default Parameter:", `Welcome ${user}`);
}
welcome();
welcome("sir");

// 7. Classes
class Student {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hi, I’m ${this.name}`;
  }
}
const student = new Student("Asmita");
console.log("7. Class:", student.greet());

// 8. Promises
const promise = new Promise((resolve) => {
  setTimeout(() => resolve("8. Promise resolved!"), 1000);
});
promise.then(console.log);

//ES7 

// 1. includes()

let fruits = ["apple", "banana", "mango"];
console.log("1. includes:", fruits.includes("banana"), fruits.includes("grape"));

// 2. Exponentiation **
 console.log("2. Exponentiation:", 2 ** 3, 3 ** 2, 10 ** 0);

 //ES8 

// 1. Object.entries() & Object.values()

let user3 = { name: "Asmita", age: 25 };
console.log("1. Object.entries:", Object.entries(user3));
console.log("   Object.values:", Object.values(user3));

// 2. String Padding
let numStr = "5";
console.log("2. padStart & padEnd:", numStr.padStart(3, "0"), numStr.padEnd(4, "*"));

// 3. async/await

async function fetchData() {
  return "3. Async/Await: Data fetched!";
}
fetchData().then(console.log);

 //ES9 

// 1. Rest Operator in Objects
let profile = { id: 1, username: "asmita", country: "India" };
let { id, ...rest } = profile;
console.log("1. Rest operator in object:", rest);

// 2. Asynchronous Iteration
async function printLetters() {
  let letters = ["A", "B", "C"];
  for await (let letter of letters) {
    console.log("2. Async Iteration:", letter);
  }
}
printLetters();

// 3. Named Capture Groups in Regex
let dateStr = "2025-06-17";
let regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
let result = dateStr.match(regex);
console.log("3. RegExp Groups:", result.groups);

 ES10 

// 1. Array.flat()

let nested = [1, [2, 3], [4, [5]]];
console.log("1. flat():", nested.flat(1), nested.flat(2));

// 2. trimStart() & trimEnd()

let messyText = "   Hello World!   ";

console.log("2. trimStart & trimEnd:", `"${messyText.trimStart()}"`, `"${messyText.trimEnd()}"`);

// 3. Object.fromEntries()

let entryArr = [["name", "Asmita"], ["role", "dev"]];
let obj = Object.fromEntries(entryArr);
console.log("3. fromEntries:", obj);







