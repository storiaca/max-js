const numbers = [1, 2, 3];

console.log(numbers);

//const moreNumbers = new Array("Hi", "Welcome");
//const moreNumbers = new Array(5); // Array(5) [ <5 empty slots> ]
// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

//const moreNumbers = Array.from("Hi!");
//console.log(moreNumbers);

const listItems = document.querySelectorAll("li");
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ["Cooking", "Sports"];
const personalData = [30, "Max", { moreDetail: [] }];

const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(personalData[1]);
