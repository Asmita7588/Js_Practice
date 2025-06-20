let username: string = "Asmita";
console.log("Name:", username);

let age1: number = 25;
let price: number = 99.99;
console.log("Age:", age1);
console.log("Price:", price);

let isLoggedIn: boolean = true;
console.log("Logged In:", isLoggedIn);

let numbers: number[] = [1, 2, 3, 4];

let names: Array<string> = ["Asmita", "John", "Jane"];
console.log("Numbers:", numbers);
console.log("Names:", names);

let person1: [string, number] = ["Asmita", 25];
console.log("Person:", person1);

enum Direction {
  North,
  South,
  East,
  West
}
let dir: Direction = Direction.East;
console.log("Direction:", dir);

let randomValue: any = "Hello";
randomValue = 123;
randomValue = true;
console.log("Random:", randomValue);

let userInput: unknown;
userInput = "Hello";
userInput = 123;

console.log("Unknown:", userInput);

let u: undefined = undefined;
  let n: null = null;
console.log("Undefined:", u);
console.log("Null:", n);

// function greet1(): void {
//   console.log("Hello, welcome!");
// }
// greet1();

function throwError(msg: string): never {
  throw new Error(msg);
}


let student1: { name: string; age: number } = {
  name: "Asmita",
  age: 22,
};
console.log("Student:", student1);

let id1: number | string;
id = 101;
console.log("ID:", id);
id1 = "A101";
console.log("ID:", id);

type Employee = {
  empId: number;
  empName: string;
};

let emp: Employee = {
  empId: 1,
  empName: "Asmita"
};
console.log("Employee:", emp);
