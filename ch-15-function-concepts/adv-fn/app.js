function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(34));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  let sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(4, 8));

const hobbies = ["Sports", "Cooking"];

function printHobbies(h) {
  h.push("NEW HOBBY");
  console.log(h);
}

printHobbies(hobbies);

/* Closures */

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

//multiplier = 1.2;

console.log("vat amount", calculateVatAmount(100));
console.log("vat amount", calculateVatAmount(200));
console.log("income amount", calculateIncomeTaxAmount(200));
// ovo je: Note: P.L.S.R.D: Persistent Lexical Scope Referenced DataNote: P.L.S.R.D: Persistent Lexical Scope Referenced Data

/* Closures in Practice */
let userName = "Max";

function greetUser() {
  let name = "Anna";
  console.log("Hi " + name); // Hi Anna
}

let name = "Maximilian";
userName = "Manuel";

console.log(greetUser());

/* Introducing "Recursion" */

// function powerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

function powerOf(x, n) {
  // if (n === 1) {
  //   return x;
  // }
  // return x * powerOf(x, n - 1);

  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2 * 2 * 2

/* Advanced Recursion */

const myself = {
  name: "Max",
  friends: [
    {
      name: "Manuel",
      friends: [
        {
          name: "Chris",
          friends: [
            {
              name: "Hari",
            },
            {
              name: "Amilia",
            },
          ],
        },
      ],
    },
    {
      name: "Julia",
    },
  ],
};

function getFriendsNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendsNames(friend));
  }

  return collectedNames;
}

console.log(getFriendsNames(myself));
