const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const passWord = document.getElementById("password");
const passWord2 = document.getElementById("password2");

//error function for validation
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
//succesfull submition function
function showSucces(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
//Emailvalidator with regex

//if statements

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (userName.value === "") {
    showError(userName, "Username is required");
  } else {
    showSucces(userName);
  }

  if (email.value === "") {
    showError(email, "Email is required");
  } else {
    showSucces(email);
  }

  if (passWord.value === "") {
    showError(passWord, "Password is required");
  } else {
    showSucces(passWord);
  }

  if (passWord2.value === "") {
    showError(passWord2, "Password2 is required");
  } else {
    showSucces(passWord2);
  }
});
