let age: number = 25;
let userName: string = "John";

function isAdult(age: number): boolean {
  return age >= 18;
}

console.log(`${userName} is adult: ${isAdult(age)}`);


export class AppComponent {
  greet(userName: string): string {
    return `Hello, ${userName}`;
  }
}
