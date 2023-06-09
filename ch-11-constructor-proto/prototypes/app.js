class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person {
  name = "Max";

  constructor() {
    //super();
    this.age = 30;
    // this.greet = function() {...}
  }

  // greet = function () {
  //   console.log(
  //     "Hi, I am " + this.name + " and I am " + this.age + " years old"
  //   );
  // };

  greet() {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old"
    );
  }
}

// function Person() {
//   this.age = 30;
//   this.name = "Max";
//   // this.greet = function() {...}
// }

// Person.prototype.greet = function () {
//   console.log("Hi, I am " + this.name + " and I am " + this.age + " years old");
// };

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

// const p = new Person();
// const p2 = new Person();

// p.greet();
// console.log(p);

// const button = document.getElementById("btn");
// button.addEventListener("click", p.greet.bind(p));

// console.log(p, p2);
// console.log(p.__proto__ === p2.__proto__); // true

const course = {
  title: "Javascript - The Complete Guide",
  rating: 5,
}; // new Object()

//console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

course.printRating();

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: "Max",
      writable: true,
    },
  }
);

// student.name = "Max";

Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});

student.printProgress();

console.log(student);
