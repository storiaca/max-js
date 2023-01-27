const addMovieModal = document.getElementById("add-modal");
// const addModal = document.querySelector("#add-modal");
// const addModal = document.body.children[1];

const startAddMovieButton = document.querySelector("header button");
//const startAddMovieButton = document.querySelector("header").lastElementChild;

const backdrop = document.getElementById("backdrop");
//const backdrop = document.body.firstElementChild;

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

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

const cancelAddMovie = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);

backdrop.addEventListener("click", backdropClickHandler);

cancelAddMovieButton.addEventListener("click", cancelAddMovie);
