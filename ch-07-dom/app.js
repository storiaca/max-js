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

// const ul = document.querySelector("ul");

// console.log(ul.previousSibling); // text node

// console.log(ul.previousElementSibling); // header

// console.log(ul.nextElementSibling); // input

// DOM Traversasl vs Query Methods

// const ul = document.body.firstElementChild.nextElementSibling;
// const firstLi = ul.firstElementChild;
// console.log(ul); // ul
// console.log(firstLi); // <li class="list-item">

// Styling DOM Elements

// const section = document.querySelector("section");
// const button = document.querySelector("button");

// section.style.backgroundColor = "green";

// section.className = "red-bg";

// button.addEventListener("click", () => {
//   // if (section.className === "red-bg visible") {
//   //   section.className = "red-bg invisible";
//   // } else {
//   //   section.className = "red-bg visible";
//   // }

//   section.classList.toggle("invisible");
// });

// Adding elements via HTML in Code

const list = document.querySelector("ul");

list.innerHTML = list.innerHTML + "<li>Item 4</li>"; // not good solution if we want to add  content on existing content

const div = document.querySelector("div");

div.insertAdjacentHTML("beforeend", "<p>Something went wrong</p>"); // better solution for adding content
