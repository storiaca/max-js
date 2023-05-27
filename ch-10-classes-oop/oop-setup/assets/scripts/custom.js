/* The "instanceof" Operator */

// class Person {
//   name = "Max";
// }

// const p = new Person();

// console.log(typeof p); // object

// console.log(p instanceof Person); // true

// const btn = document.querySelector("button");

// console.dir(btn);

// console.log(btn instanceof HTMLButtonElement); // true

// console.log(btn instanceof HTMLElement); // true

/* Built-in Classes */

const obj = new Object();

// ovo gore je isto kao i da smo napisali ovo

const obj2 = {};

// samo sto je ovo drugo brze

// new Array() etc..

/* Understanding Object Descriptors */
const person = {
  name: "Max",
  greet() {
    console.log(this.name);
  },
};

console.log(person.greet()); // Max

// svaki objekat ima descriptor
console.log(Object.getOwnPropertyDescriptors(person));

/* {
    "name": {
        "value": "Max",
        "writable": true,
        "enumerable": true,
        "configurable": true
    },
    "greet": {
        "writable": true,
        "enumerable": true,
        "configurable": true
    }
} */
// dobijamo  nov objekat sa property descriptorima

// nekada cemo zeleti da zakljucamo property
Object.defineProperty(person, "name", {
  value: person.name,
  writable: false,
  enumerable: true,
  configurable: true,
});

// stavili smo da name ne moze da se menja, mozemo takodje da dodjemo nove propertije sa defineProperty, koja prima 3 argumenta

// mozemo da je obrisemo sa
delete person.name;

// ali ako stavimo configurable na false onda necemo moci da brisemo

Object.defineProperty(person, "name", {
  value: person.name,
  writable: false,
  enumerable: true,
  configurable: false,
});

// enumerable se koristi za for in loop
// ako sada prodjemo kroz person sa for in ovako:
for (const key in person) {
  console.log(key);
}

// videcemo name i greet kao rezultat, posto je greet metoda nekad ne zelimo da prikazemo, prodjemo sa loop-om kroz propertije koji su metoda
Object.defineProperty(person, "greet", {
  value: person.greet,
  writable: false,
  enumerable: false,
  configurable: true,
});
