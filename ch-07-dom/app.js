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

// const list = document.querySelector("ul");

// list.innerHTML = list.innerHTML + "<li>Item 4</li>"; // not good solution if we want to add  content on existing content

// const div = document.querySelector("div");

// div.insertAdjacentHTML("beforeend", "<p>Something went wrong</p>"); // better solution for adding content

// Adding Elements via createElement()

// const list = document.querySelector("ul");

// const newLi = document.createElement("li");

// list.appendChild(newLi);

// newLi.textContent = "Item 4";
// console.log(newLi);

// Inserting DOM Elements

// const list = document.querySelector("ul");

// list.append("Some text"); // We can add text, nodes, multiple nodes with append, no support for IE

// const newLi = document.createElement("li");
// newLi.textContent = "Item 4";

// list.prepend(newLi);

// list.lastElementChild.before(newLi); // no support for safari

// list.lastElementChild.after(newLi); // no support for safari

// list.firstElementChild.replaceWith(newLi);

// Drugi nacin da ubacimo element
// const secondLi = list.children[1];
// const newLi = document.createElement("li");
// newLi.textContent = "Item 4";

// secondLi.insertAdjacentElement("afterend", newLi);

// Cloning DOM Nodes
// const list = document.querySelector("ul");
// const newLi = document.createElement("li");
// newLi.textContent = "Item 4";

// newLi.cloneNode(false); // defaul, only clone element, not nested elements if we have in node
// const newLi2 = newLi.cloneNode(true); // clone element and all nested elements that in node

// list.append(newLi, newLi2);

// Live Node Lists vs static Node Lists
const list = document.querySelector("ul");

const listItems = list.querySelectorAll("li"); // none live list, just snapshot of dom, doesen't update
const listItems2 = list.getElementsByTagName("li");

const newLi = document.createElement("li");
newLi.textContent = "Item 4";
list.append(newLi);

console.log(listItems); // no update, but we cna change the content
listItems[0].textContent = "Item 11";
console.log(listItems2); // HTMLCollection, can be updated

// document.getElementBy // ovo uvek vraca niz objekte nad kojima mozemo da manipulisemo
