const buttons = document.querySelectorAll("button");

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

buttons.forEach((button) => {
  button.addEventListener("mouseenter", buttonClickHandler);
});

window.addEventListener("scroll", (event) => {
  console.log(event);
});
