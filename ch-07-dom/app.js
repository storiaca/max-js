const h1 = document.getElementById("main-title");

h1.textContent = "Some new title";
h1.style.color = "white";
h1.style.backgroundColor = "black";

const li = document.querySelector("li:last-of-type");
li.textContent = li.textContent + " Changed!";

const body = document.body;

//const listItemElements = document.querySelectorAll("li");
const listItemElements = document.getElementsByTagName("li");

for (const listItemEl of listItemElements) {
  console.log(listItemEl);
}

console.log(h1);

// Traversing Child Nodes
// const ul = document.querySelector("ul");

// console.log(ul.children[1]);

// console.log(ul.childNodes);

// console.log(ul.firstElementChild);

// console.log(ul.firstChild);

// console.log(ul.lastElementChild);

// console.log(ul.lastChild);

// Using parentNode and parentElement

// const liFirst = document.querySelector("li");

// console.log(liFirst.parentNode); // ul

// console.log(liFirst.closest('body')); // body

// Selecting siblings elements

const ul = document.querySelector("ul");

console.log(ul.previousSibling); // text node

console.log(ul.previousElementSibling); // header

console.log(ul.nextElementSibling); // input