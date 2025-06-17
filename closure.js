
//closures

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

function outer() {
  let outerVar = "I'm from outer function";

  function inner() {
    console.log(outerVar); 
  }

  return inner;
}

const closureFn = outer(); 
closureFn();



//generators

function* generatorFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorFunc();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// promises.all()

Promise.all([
  Promise.resolve("One"),
  Promise.resolve("Two")
]).then(values => {
  console.log(values); // ["One", "Two"]
});

//promises.race()

Promise.race([
  new Promise(res => setTimeout(() => res("First"), 100)),
  new Promise(res => setTimeout(() => res("Second"), 200))
]).then(console.log); // "First"

//allSettled()

Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Fail")
]).then(results => {
  console.log(results);
});

// any()

Promise.any([
  Promise.reject("Error 1"),
  Promise.resolve("Yay!"),
  Promise.reject("Error 2")
]).then(console.log); // "Yay!"



const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Fail");

Promise.allSettled([p1, p2]).then(results => {
  console.log(results);
});




