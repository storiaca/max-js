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
// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

// const storedResults = testResults.concat([3.99, 2]); // we can add elements at the end array, combine two arrays, we get new array
// console.log(testResults);
// console.log(storedResults);

/* === Retrieving indexes with indexOf() and lastIndexOf() === */
//const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];

//console.log(testResults.indexOf(1.5)); // result: 2, if we have 2 same values returns firts to find

/* 
  indexOf() => (method) Array<number>.indexOf(searchElement: number, fromIndex?: number | undefined): number

  Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

  @param searchElement — The value to locate in the array.

  @param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. 
*/
//console.log(testResults.lastIndexOf(1.5)); // look from the end of an array, result: 4
/* 
  lastIndexOf() => (method) Array<number>.lastIndexOf(searchElement: number, fromIndex?: number | undefined): number

  Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

  @param searchElement — The value to locate in the array.

  @param fromIndex — The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.
*/

//const personData = [{ name: "Max" }, { name: "Manuel" }];
//console.log(personData.indexOf({ name: "Manuel" })); // result: -1, this metod don't work well with other types, except numbers

/* === Finding Stuff: find() and findIndex() === */
// const personData = [{ name: "Max" }, { name: "Manuel" }];

// const manuel = personData.find((person, idx, persons) => {
//   return person.name === "Manuel";
// }); // stops when find first element is found, returns same object, not new object
// manuel.name = "Anna";
// console.log(manuel);
/* 
  find() => (method) Array<{ name: string; }>.find<{
    name: string;
  }>(predicate: (this: void, value: {
    name: string;
  }, index: number, obj: {
    name: string;
  }[]) => value is {
    name: string;
  }, thisArg?: any): {
    name: string;
  } | undefined (+1 overload)

  Returns the value of the first element in the array where predicate is true, and undefined otherwise.

  @param predicate
  find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.

  @param thisArg
  If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
*/

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === "Max";
// });
// console.log(maxIndex);
/* 
  findIndex() => (method) Array<{ name: string; }>.findIndex(predicate: (value: {
    name: string;
  }, index: number, obj: {
    name: string;
  }[]) => unknown, thisArg?: any): number

  Returns the index of the first element in the array where predicate is true, and -1 otherwise.

  @param predicate
  find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.

  @param thisArg
  If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
*/
/* === includes() === */
// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

// console.log(testResults.includes(10.99)); // result: true

// // same thing with indexOf()
// console.log(testResults.indexOf(10.99) !== -1);

/* === Alternatives to for Loops: The forEach() method === */
// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });
/* 
  forEach() => Array<number>.forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void

  Performs the specified action for each element in an array.

  @param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

  @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/
//console.log(taxAdjustedPrices);
/* === Transforming Data with map() === */
// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   return priceObj;
// });
// console.log(prices, taxAdjustedPrices);
/* 
  map() => Array<number>.map<void>(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void[]

  Calls a defined callback function on each element of an array, and returns an array that contains the results.

  @param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

  @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/
/* 
  Exercise: map()
 
  Your task is to add the missing logic to a transformToObjects() function that transforms a list of numbers into a list of JavaScript objects.

  For the provided input [1, 2, 3] the transformToObjects() function should return [{val: 1}, {val: 2}, {val: 3}].
*/

// function transformToObjects(numberArray) {
//   // Todo: Add your logic
//   // should return an array of objects

//   let newArray = numberArray.map((number) => {
//     let obj = { val: number };
//     return obj;
//   });

//   return newArray;
// }

// transformToObjects([1, 2, 3]);

/* === sort()ing and reverse()ing === */

// const prices = [10.99, 5.99, 3.99, 6.59];

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedPrices);
/* 
  sort() => Array<number>.sort(compareFn?: ((a: number, b: number) => number) | undefined): number[]

  Sorts an array in place. This method mutates the array and returns a reference to the same array.

  @param compareFn
  Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

  [11,2,22,1].sort((a, b) => a - b)
*/
//console.log(sortedPrices.reverse());
/* 
  reverse() => Array<number>.reverse(): number[]

  Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
*/

/* === Filtering Arrays with filter() === */
// const prices = [10.99, 5.99, 3.99, 6.59];

// const filteredArray = prices.filter((price, index, prices) => {
//   return price > 6;
// });

// Shorter: Where Arrow Functions Shine!
//const filteredArray = prices.filter(p => p > 6);

//console.log(filteredArray);

/* 
  filter() => Array<number>.filter(predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): number[] (+1 overload)

  Returns the elements of an array that meet the condition specified in a callback function.

  @param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

  @param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
*/

/* === The Important reduce() Method === */
//const prices = [10.99, 5.99, 3.99, 6.59];

// let sum = 0;

// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);

// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//   return prevValue + curValue;
// }, 0);

// shorter
//const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// console.log(sum);

/* 
  reduce() => Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number (+2 overloads)

  Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

  @param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

  @param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
*/
/* === Arrays and strings - split() and join() === */
// const data = "new york;10.99;2000";

// const transformedData = data.split(";");
// transformedData[1] = +transformedData[1];

// console.log(transformedData);
/* 
  split() => String.split(separator: string | RegExp, limit?: number | undefined): string[] (+1 overload)

  Split a string into substrings using the specified separator and return them as an array.

  @param separator — A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.

  @param limit — A value used to limit the number of elements returned in the array.
*/
// const nameFragments = ["Max", "Schwarz"];
// const nameJoin = nameFragments.join(" ");

// console.log(nameJoin);

/* === The Spread Operator (...) === */
const nameFragments = ["Max", "Schwarz"];

const copiedNameFragments = [...nameFragments];

console.log(copiedNameFragments);
