const form = document.getElementById("user-input");

function signupHandler(event) {
  event.preventDefault();
  const userNameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const enteredUserName = userNameInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredUserName.trim().length === 0) {
    alert("Invalid input - username must not be empty");
    return;
  }

  if (enteredPassword.trim().length <= 5) {
    alert("Invalid input - password must be 6 characters or longer.");
    return;
  }

  const user = {
    userName: enteredUserName,
    password: enteredPassword,
  };

  console.log(user);
  console.log("Hi, I am " + user.userName);
}

form.addEventListener("sumbit", signupHandler);
console.log("Nesto");
