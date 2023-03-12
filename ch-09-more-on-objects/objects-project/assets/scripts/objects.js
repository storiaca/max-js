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
/* ==== The Object Spread Operator (...) ==== */
// const person = { name: "Max", hobbies: ["Sports", "Cooking"] };

// const anotherPerson = person;
// person.age = 30;

// console.log("anotherPerson", anotherPerson);

// const person2 = { ...person };

// person.age = 31;

// person.hobbies.push("Coding");

// console.log("person2", person2);

// const person3 = { ...person, age: 29, hobbies: [...person.hobbies] };

// person.hobbies.pop();

// console.log("person", person);
// console.log("person3", person3);

/* ====  Understanding Object.assign() ==== */
// const person = { name: "Max" };

// const person2 = Object.assign({}, person);

// person.name = "Maximilian";

// console.log("person", person);
// console.log("person2", person2);

/* 
  (method) ObjectConstructor.assign(target: object, ...sources: any[]): any (+3 overloads)

  Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

  @param target — The target object to copy to.

  @param sources — One or more source objects from which to copy properties
*/
/* ==== "this" and Arrow Functions ==== */

// const members = {
//   teamName: "Blue Rockets",
//   people: ["Max", "Manuel"],
//   getTeamMembers() {
//     this.people.forEach((p) => {
//       console.log(p + " - " + this.teamName);
//     });
//   },
// };

const members = {
  teamName: "Blue Rockets",
  people: ["Max", "Manuel"],
  getTeamMembers() {
    this.people.forEach(function (p) {
      console.log(this);
      console.log(p + " - " + this.teamName); // this.teamName => undefined
    });
  },
};

console.log(members.getTeamMembers());


/* ==== App Code ==== */
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    
    // if('info' in movie) // check property in object
    // if(!(movie.info === undefined)) // check property in object
    
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    //const { title: movieTitle } = info;
    let { getFormattedTitle } = movie;
    //getFormattedTitle = getFormattedTitle.bind(movie);
    //let text = getFormattedTitle.apply(movie, []) + "-";
    let text = getFormattedTitle.call(movie) + "-";

    for (const key in info) {
      if (key !== "title" && key !== "_title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  let title = document.getElementById("title").value;
  let extraName = document.getElementById("extra-name").value;
  let extraValue = document.getElementById("extra-value").value;

  if (
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        if (val.trim() === "") {
          this._title = "DEFAULT";
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };
  
  newMovie.info.title = title;
  console.log(newMovie.info.title);
  
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = function () {
  console.log(this);
  const filterTerm = document.getElementById("filter-title").value;

  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
