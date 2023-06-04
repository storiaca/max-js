class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = "Max";

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old"
    );
  }
}

// function Person() {
//   this.age = 30;
//   this.name = "Max";
//   this.greet = function () {
//     console.log(
//       "Hi, I am " + this.name + " and I am " + this.age + " years old"
//     );
//   };
// }

// Person.describe = function () {
//   console.log("Creating persons...");
// };

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const p = new Person();

// p.greet();
// p.printAge();
// console.log(p.__proto__); // AgedPerson
// console.log(p);
// console.log(p.toString());

// const p2 = new p.__proto__.constructor();
// console.log(p2);
// console.log(p.__proto__ === Person.prototype); // true

// console.dir(Object.prototype); // ovo je fallback objekat za sve objekte i tu se zavrsava prototype lanac

const p = new Person();
console.log(p);
