// const numbers = [1, 2, 3];

// console.log(numbers);

//const moreNumbers = new Array("Hi", "Welcome");
//const moreNumbers = new Array(5); // Array(5) [ <5 empty slots> ]
// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

//const moreNumbers = Array.from("Hi!");
//console.log(moreNumbers);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ["Cooking", "Sports"];
// const personalData = [30, "Max", { moreDetail: [] }];

// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// push, pop, unshift, shift

const hobbies = ["Sports", "Cooking"];

hobbies.push("Reading"); // add at the end of array, return number
hobbies.unshift("Coding"); // add at the beginning of array, return number
const popedValue = hobbies.pop(); // remove last element from array, we can store that element in variable, returns string
hobbies.shift(); // removes first element from array
console.log(hobbies);

hobbies[1] = "Coding";
hobbies[5] = "Reading"; // rarely used
console.log(hobbies, hobbies[4]);
