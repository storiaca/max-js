// const movieList = document.getElementById("movie-list");

// movieList.style["background-color"] = "red";
// movieList.style.display = "block";

// const userChosenKeyName = "level";

// let person = {
//   "first name": "Max",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   [userChosenKeyName]: "...",
//   greet: function () {
//     alert("Hi there!");
//   },
//   1.5: "hello",
// };

// // person.age = 31;
// delete person.age;
// person.isAdmin = true;

// const keyName = "first name";

// console.log(person[keyName]);

// console.log(person[1.5]);

// console.log(person[userChosenKeyName]);

// console.log(person);

/* ==== App Code ==== */
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const addMovieHandler = () => {
  let title = document.getElementById("title").value;
  let extraName = document.getElementById("extra-name").value;
  let extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  console.log(newMovie);
};

addMovieBtn.addEventListener("click", addMovieHandler);
