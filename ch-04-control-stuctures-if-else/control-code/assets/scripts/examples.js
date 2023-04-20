/* === Introducing "if" Statements & Boolean (Comparison) Operators === */

2 == 2; // true

2 == "2"; // true

2 === 2; // true

2 === "2"; // false

/* === Beware When Comparing Objects & Arrays for Equality! === */
const person1 = { name: "Max" };

const person2 = { name: "Max" };

person1 === person2; // false

person1.name === person2.name; // true

const person3 = person1;

person3 === person1; // true

const hobbies = ["Sports", "Cooking"];

const moreHobbies = ["Sports", "Cooking"];

hobbies === moreHobbies; // false

/* === Logical Operator "Tricks" & Shorthands === */
const userInput = "";

//const isValidInput = userInput ? true : false;
// isto kao ovo gore samo krace:
const isValidInput = !!userInput;

console.log(isValidInput); // false

const userName = userInput || "Max";

console.log(userName); // Max

const realUserInput = "Manu";

const realUserName = realUserInput || "Aleksandar";

console.log(realUserName); // Manu

let isLoggedIn = true;

isLoggedIn && ""; // ""

const shoppingCart = isLoggedIn && ["Books"];

console.log(shoppingCart); // ["Books"]

isLoggedIn = false;

const cart = isLoggedIn && ["Books"];

console.log(cart); // false

null && ["Books"]; // null

/* === The "while" & "do-while" Loops === */
let randomNumbers = [];

let finished = false;

while (!finished) {
  const rndNumber = Math.random();
  randomNumbers.push(rndNumber);
  if (rndNumber > 0.5) {
    finished = true;
    console.log(randomNumbers);
  }
}
