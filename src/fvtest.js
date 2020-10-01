const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const email2 = document.getElementById("email2");
const password = document.getElementById("password");
const emailConf = document.getElementById("email-id");

form.addEventListener("submit", (e) => {
  if (
    username.parentElement.className != "form-control success" ||
    email.parentElement.className != "form-control success" ||
    email2.parentElement.className != "form-control success" ||
    password.parentElement.className != "form-control success"
  ) {
    e.preventDefault();
  }

  checkInputs();
});

username.addEventListener("keyup", (e) => {
  usernameCheck();
});

username.addEventListener("onblur", (e) => {
  usernameCheck();
});

email.addEventListener("keyup", (e) => {
  emailCheck();
});

email.addEventListener("onblur", (e) => {
  emailCheck();
});

email.addEventListener("keyup", (e) => {
  emailConf.classList.remove("hidden-class");
});

email2.addEventListener("keyup", (e) => {
  email2Check();
});

email2.addEventListener("onblur", (e) => {
  email2Check();
});

password.addEventListener("keyup", (e) => {
  passwordCheck();
});

password.addEventListener("onblur", (e) => {
  passwordCheck();
});

function usernameCheck() {
  const usernameValue = username.value.trim();

  if (usernameValue === "" || usernameValue == null) {
    setErrorFor(username, "Username cannot be blank");
  } else if (usernameValue.length <= 6) {
    setErrorFor(username, "Username must be longer than 6 characters");
  } else if (usernameValue.length >= 20) {
    setErrorFor(username, "Username must be less than 20 characters");
  } else {
    // add success class
    setSuccessFor(username);
  }
}

function emailCheck() {
  const emailValue = email.value.trim();

  if (emailValue === "" || emailValue == null) {
    setErrorFor(email, "Email cannot be blank");
  } else if (isEmail(emailValue) === false) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }
}

function email2Check() {
  const emailValue = email.value.trim();
  const email2Value = email2.value.trim();

  if (emailValue !== email2Value) {
    setErrorFor(email2, "Email doesn't match");
  } else {
    setSuccessFor(email2);
  }
}

function passwordCheck() {
  const passwordValue = password.value.trim();

  if (passwordValue === "" || passwordValue == null) {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue === "password" || passwordValue === "Password") {
    setErrorFor(password, "Password cannot be 'password'");
  } else if (passwordValue.length <= 8) {
    setErrorFor(password, "Password must be longer than 8 characters");
  } else if (passwordValue.length >= 40) {
    setErrorFor(password, "Username must be less than 40 characters");
  } else {
    // add success class
    setSuccessFor(password);
  }
}

function checkInputs() {
  usernameCheck();
  emailCheck();
  email2Check();
  passwordCheck();
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

