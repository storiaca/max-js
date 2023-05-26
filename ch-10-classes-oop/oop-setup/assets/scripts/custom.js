/* The "instanceof" Operator */

class Person {
  name = "Max";
}

const p = new Person();

console.log(typeof p); // object

console.log(p instanceof Person); // true

const btn = document.querySelector("button");

console.dir(btn);

console.log(btn instanceof HTMLButtonElement); // true

console.log(btn instanceof HTMLElement); // true
