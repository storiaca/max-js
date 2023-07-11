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

multiplier = 1.2;

console.log("vat amount", calculateVatAmount(100));
console.log("vat amount", calculateVatAmount(200));
console.log("income amount", calculateIncomeTaxAmount(200));
// ovo je: Note: P.L.S.R.D: Persistent Lexical Scope Referenced DataNote: P.L.S.R.D: Persistent Lexical Scope Referenced Data
