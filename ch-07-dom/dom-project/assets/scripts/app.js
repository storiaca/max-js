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

const movies = [];

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
  clearMovieInputs();
};

const clearMovieInputs = () => {
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
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
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5)");
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);

  clearMovieInputs();

  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);

backdrop.addEventListener("click", backdropClickHandler);

cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);

confirmAddButton.addEventListener("click", addMoviehandler);

