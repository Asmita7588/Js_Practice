var username = "Asmita";
console.log("Name:", username);
var age = 25;
var price = 99.99;
console.log("Age:", age);
console.log("Price:", price);
var isLoggedIn = true;
console.log("Logged In:", isLoggedIn);
var numbers = [1, 2, 3, 4];
var names = ["Asmita", "John", "Jane"];
console.log("Numbers:", numbers);
console.log("Names:", names);
var person = ["Asmita", 25];
console.log("Person:", person);
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
var dir = Direction.East;
console.log("Direction:", dir);
var randomValue = "Hello";
randomValue = 123;
randomValue = true;
console.log("Random:", randomValue);
var userInput;
userInput = "Hello";
userInput = 123;
console.log("Unknown:", userInput);
var u = undefined;
var n = null;
console.log("Undefined:", u);
console.log("Null:", n);
function greet() {
    console.log("Hello, welcome!");
}
greet();
function throwError(msg) {
    throw new Error(msg);
}
// throwError("Something went wrong!");
var student = {
    name: "Asmita",
    age: 22,
};
console.log("Student:", student);
var id;
id = 101;
console.log("ID:", id);
id = "A101";
console.log("ID:", id);
var emp = {
    empId: 1,
    empName: "Asmita"
};
console.log("Employee:", emp);
