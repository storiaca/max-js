//const buttons = document.querySelectorAll("button");
const button = document.querySelector("button");

// button.onclick = function () {
//   console.log("Hello");
// };

const buttonClickHandler = (event) => {
  //event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log("This was clicked");
};

// button.onclick = buttonClickHandler;

// button.onclick = anotherButtonClickHandler;

// this won't work because we can't add more click events on button with onclick, only second function will be execute

// button.addEventListener('dblclick'); // double click

//const boundFn = buttonClickHandler.bind(this);

//button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

// buttons.forEach((button) => {
//   button.addEventListener("mouseenter", buttonClickHandler);
// });

// window.addEventListener("scroll", (event) => {
//   console.log(event);
// });

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector("div");

div.addEventListener("click", (event) => {
  console.log("Clicked DIV");
  console.log(event);
});

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Clicked Button");
  console.log(event);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// });

// list.addEventListener("click", (event) => {
//   if (!event.target.closest("li")) {
//     console.log("return");
//     return;
//   }
//   const myClosestLi = event.target.closest("li");
//   myClosestLi.classList.toggle("highlight");
// });

list.addEventListener("click", (event) => {
  // console.log(event.currentTarget);
  // event.target.classList.toggle("highlight");
  event.target.closest("li").classList.toggle("highlight");
  //form.submit();
  button.click();
});
