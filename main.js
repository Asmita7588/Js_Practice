var age = 25;
var userName = "John";
function isAdult(age) {
    return age >= 18;
}
console.log("".concat(userName, " is adult: ").concat(isAdult(age)));

// Regular Function
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Alice"));

// arrow Function
const greetArrow = (name) => `Hello, ${name}`;
console.log(greetArrow("Bob"));

// No-name  or Anonymous Function
setTimeout(function() {
    console.log("This is an anonymous function inside setTimeout");
}, 1000);

//js variable 
var x = 10;   // function-scoped
let y = 20;   // block-scoped
const z = 30; // block-scoped and cannot be reassigned

console.log(x, y, z);

// scooping
function outer() {
    let outerVar = "I am outside!";
    function inner() {
        console.log(outerVar);  
    }
    inner();
}
outer();

// blocking (synchronous)
console.log("Start");
for (let i = 0; i < 1e8; i++) {} // blocks UI
console.log("End");

// non-blocking (asynchronous)
console.log("Start");
setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);
console.log("End");




//callbacks
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback();
    }, 1000);
}

fetchData(() => {
    console.log("Callback executed!");
});



//hoisting

console.log(hoistedVar); // undefined
var hoistedVar = "This variable is hoisted";

hoistedFunction(); // works because functions are hoisted
 function hoistedFunction() {
    console.log("I am hoisted!");
}

//array methods
const nums = [1, 2, 3, 4, 5];

const squared = nums.map(n => n * n);
console.log(squared);

const evens = nums.filter(n => n % 2 === 0);
console.log(evens);

const sum = nums.reduce((sum, n) => sum + n, 0);
console.log(sum);

//string methods
const str = " Hello JavaScript! ";
console.log(str.trim());
console.log(str.toUpperCase());
console.log(str.includes("Java"));
console.log(str.split(" "));

// promises

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved!");
    }, 1000);
});

myPromise.then((msg) => {
    console.log(msg);
});

//call apply bind 
const person = {
    name: "John",
    greet: function(city) {
        console.log(`Hello, I am ${this.name} from ${city}`);
    }
};

person.greet.call({ name: "Akshit" }, "Paris");
person.greet.apply({ name: "asmita" }, ["London"]);

const boundGreet = person.greet.bind({ name: "ankita" }, "france");
boundGreet();

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    console.log("start");
    await delay(1000);
    console.log("after 1 second");
}

run();


