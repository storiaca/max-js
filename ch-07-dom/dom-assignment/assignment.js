// const body = document.querySelector("body");

// console.log(body);
// body.style.backgroundColor = "black";
// body.style.color = "white";

// const bodyList = document.getElementsByTagName("body");

// for (const body of bodyList) {
//   body.style.backgroundColor = "black";
//   body.style.color = "white";
// }

// const body2 = document.body;
// body2.style.backgroundColor = "black";
// body2.style.color = "white";

const task1El1 = document.getElementById("task-1");
//const task1El2 = document.querySelector("li");
const task1El2 = document.querySelector("#task-1");

task1El1.style.color = "white";
task1El2.style.backgroundColor = "black";

// const title = document.querySelector("title");

// title.textContent = "Assignment - Solved!";

const docHead = document.head;
const docTitle2 = document.head.querySelector("title");

docTitle2.textContent = "Assignment - Solved!";

// const head1 = document.querySelector("h1");

// head1.textContent = "Assignment - Solved!";

const h1 = document.getElementsByTagName("h1");
h1[0].textContent = "Assignment - Solved!";
