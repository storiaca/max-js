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

/* === push, pop, unshift, shift === */

// const hobbies = ["Sports", "Cooking"];

// hobbies.push("Reading"); // add at the end of array, return number
// hobbies.unshift("Coding"); // add at the beginning of array, return number
// const popedValue = hobbies.pop(); // remove last element from array, we can store that element in variable, returns string
// hobbies.shift(); // removes first element from array
// console.log(hobbies);

// hobbies[1] = "Coding";
// hobbies[5] = "Reading"; // rarely used
// console.log(hobbies, hobbies[4]);

/* === The splice() Method === */
// const hobbies = ["Sports", "Cooking"];

// //hobbies.splice(0, 0, "Good Food"); // add at the beginnig of an array
// hobbies.splice(1, 0, "Good Food"); // add at the first index of an array

// const removedElement = hobbies.splice(0, 1); // removes one element from the start of an array, returns removed element
// //hobbies.splice(0); // removes all elements from the array
// const removedFromEndElements = hobbies.splice(-1, 1); // removes from the end of an array one element
// console.log(hobbies);

/* === Selecting ranges and creating copies woth slice() === */
// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// // slice returns brand new array, good for copying
// const storedResults = testResults.slice(); // this is copy, when we change this variable it won't have effect on original array
// storedResults.push(5.91);

// // we can also specify start and end index, what should be copied
// const newCopyResult = testResults.slice(0, 2); // result: [1, 5.3]
// console.log(newCopyResult);
// // if we use negative numbers, both needs to be negative
// const negativeResult = testResults.slice(-3, -1); // [10.99, -5]
// console.log(negativeResult);

// // we can select from specific index, write only 1 argument in slice
// const fromResult = testResults.slice(2); // start from second index and selet all, result: [1.5, 10.99, -5, 10]
// console.log(fromResult);

// console.log(storedResults, testResults);

/* === Adding Arrays to Arrays with concat() === */
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

const storedResults = testResults.concat([3.99, 2]); // we can add elements at the end array, combine two arrays, we get new array
console.log(testResults);
console.log(storedResults);

