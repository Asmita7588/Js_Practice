//regular function
function work() {
  console.log("working");
}
work();

//anonymous Function

const work1 = function () {
  console.log("anonymouus function is working!");
};
work1();

//arraow function 
const arraowFunction = () => {
  console.log("inside arraow function!");
};
arraowFunction();


const add = (a, b) => a + b;
console.log(add(2, 3)); // output: 5

//async 
//callbacks
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData((data) => console.log(data));

//promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data from promise"), 1000);
});

promise.then(data => console.log(data));

//async await
async function getData() {
  const data = await new Promise(resolve => {
    setTimeout(() => resolve("Data from async/await"), 1000);
  });
  console.log(data);
}

getData();


// operation on array type of data
let numbers = [5, 12, 8, 130, 44];


// 1. reverse the array

let reversed = [...numbers].reverse(); 
console.log("Reversed Array:", reversed);


// 2. sort the array (ascending)
let sortedAsc = [...numbers].sort((a, b) => a - b);
console.log("Sorted in Ascending:", sortedAsc);

// Sort the array (descending)
let sortedDesc = [...numbers].sort((a, b) => b - a);
console.log("Sorted Descending:", sortedDesc);


// 3. Filter array (values > 10)
let filtered = numbers.filter(num => num > 10);
console.log("Filtered (greater than 10):", filtered);


// 4. map array (square each number)
let squared = numbers.map(num => num * num);
console.log("Squared Numbers:", squared);


// 5. reduce (sum of all numbers)
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("sum of numbers:", sum);


// 6. Add (push) and Remove (pop) elements
let newArray = [...numbers]; // Clone to avoid changes in original
newArray.push(99);
console.log("after push (99):", newArray);

newArray.pop();
console.log("After Pop (remove last):", newArray);


// 7. Check if all elements are > 0
let allPositive = numbers.every(num => num > 0);
console.log("All numbers > 0:", allPositive);


// 8. Check if some elements are > 100
let someLarge = numbers.some(num => num > 100);
console.log("Some numbers > 100:", someLarge);


// 9. Find first element > 100
let firstLarge = numbers.find(num => num > 100);
console.log("First number > 100:", firstLarge);


// 10. Index of a specific element
let index = numbers.indexOf(130);
console.log("Index of 130:", index);


//operations on string 
//reverse string
function reverseString(str) {
  return str.split('').reverse().join('');
}

let input = "hello";
console.log("Reversed:", reverseString(input));  // Output: "olleh"

//to upperCase and lowerCase
let str = "JavaScript";
console.log("Uppercase:", str.toUpperCase());  // JAVASCRIPT
console.log("Lowercase:", str.toLowerCase());  // javascript

//include
let sentence = "I like JavaScript!";
console.log("Includes 'like':", sentence.includes("like"));  // true
console.log("Index of 'Java':", sentence.indexOf("Java"));   // 7


//replace
let msg = "Hello World";
let newMsg = msg.replace("World", "Asmita");
console.log("Replaced:", newMsg);  // Hello Asmita

//split and join
let data = "apple,banana,mango";
let arr = data.split(",");       // ["apple", "banana", "mango"]
console.log(arr);

let joined = arr.join(" | ");    // apple | banana | mango
console.log(joined);

//trim extra spaces
let raw = "   Hello World   ";
console.log("Trimmed:", raw.trim());  // "Hello World"

//count character
let line = "I love JS";
console.log("character count:", line.length);
console.log("word count:", line.split(" ").length);





