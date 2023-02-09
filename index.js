// ----- 00. First JavaScript Code ----- //
console.log("Hello World");

// ----- 01. Variables ----- //
let personName = "Muaaz";
console.log(personName);

// Rules for Defining Variables:
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let firstName = "Muaaz";
let lastName = "Shoaib";

// ----- 02. Constants ----- //
const interestRate = 0.3;
console.log(interestRate);

// ----- 03. Primitive / Value Type ----- //
// String, Number, Boolean, undefined, null
let name = "Muaaz"; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let personFirstName = undefined;
let selectedColor = null;

// ----- 04. Dynamic Typing ----- //
console.log(typeof name);

name = 22;
console.log(typeof name);

console.log(typeof age);
age = 22.22;
console.log(typeof age);

console.log(typeof isApproved);
console.log(typeof firstName);
console.log(typeof selectedColor);

// ----- 05. Objects ----- //
// Reference Type
// Object, Array, Function

let person = {
  name: "Muaaz",
  age: 22,
};
console.log(person);

// Dot Notation
person.name = "Shoaib";
console.log(person.name);
console.log(person.age);

// Bracket Notation
person["name"] = "Ali";
console.log(person["name"]);
console.log(person["age"]);

let selection = "name";
console.log(person[selection]);

// ----- 06. Arrays ----- //

let selectedColors = ["red", "blue"];
console.log(selectedColors);
console.log(selectedColors[0]);

selectedColors[2] = 1;
console.log(selectedColors);

console.log(typeof selectedColors);
console.log(selectedColors.length);

// ----- 07. Functions ----- //

function greet(firstName, lastName) {
  console.log("Hi, " + firstName + " " + lastName);
}

greet("Muaaz", "Shoaib");

// ----- 08. Type of Functions ----- //
// 01. Performing a task
function greet(firstName, lastName) {
  console.log("Hi, " + firstName + " " + lastName);
}

greet("Muaaz", "Shoaib");

// 02. Calculating a value
function square(number) {
  return number * number;
}

console.log(square(2));
