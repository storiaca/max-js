const button = document.querySelector("button");

// button.onclick = function () {
//   console.log("Hello");
// };

const buttonClickHandler = () => {
  alert("Button was clicked");
};

const anotherButtonClickHandler = () => {
  console.log("This was clicked");
};

// button.onclick = buttonClickHandler;

// button.onclick = anotherButtonClickHandler;

// this won't work because we can't add more click events on button with onclick, only second function will be execute

// button.addEventListener('dblclick'); // double click

const boundFn = buttonClickHandler.bind(this);

button.addEventListener("click", boundFn);

setTimeout(() => {
  button.removeEventListener("click", boundFn);
}, 2000);
