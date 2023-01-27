const addMovieModal = document.getElementById("add-modal");
// const addModal = document.querySelector("#add-modal");
// const addModal = document.body.children[1];

const startAddMovieButton = document.querySelector("header button");
//const startAddMovieButton = document.querySelector("header").lastElementChild;

const backdrop = document.getElementById("backdrop");
//const backdrop = document.body.firstElementChild;

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll("input");
//const userInputs = addMovieModal.getElementsByTagName("input");

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

const addMoviehandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 1
  ) {
    alert("Please enter valid values (rating between 1 and 5)");
    return;
  }
};

startAddMovieButton.addEventListener("click", toggleMovieModal);

backdrop.addEventListener("click", backdropClickHandler);

cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);

confirmAddButton.addEventListener("click", addMoviehandler);

