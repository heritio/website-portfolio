
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
function isEmailValid(email) {
  const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return reg.test(email);
}

//checkrequiredfields function
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSucces(input);
    }
  });
}
//  Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be atleast ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  }else{
    showSucces(input);
  }
}

//getFieldname function
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//eventlistener
form.addEventListener("submit", function (e) {
  e.preventDefault();

checkRequired([username, email, password, password2]); 
});
