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
