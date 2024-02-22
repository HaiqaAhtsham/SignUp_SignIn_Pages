const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const fullname = document.getElementById("fullname");
const dob = document.getElementById("dob");
const phone = document.getElementById("phone");
const address = document.getElementById("address");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const fullnameValue = fullname.value.trim();
  const dobValue = dob.value.trim();
  const phoneValue = phone.value.trim();
  const addressValue = address.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters long");
  } else if (!/\d/.test(passwordValue) || !/[!@#$%^&*]/.test(passwordValue)) {
    setError(password, "Password must contain at least one special character and one numeric digit");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords do not match");
  } else {
    setSuccess(password2);
  }

  if (fullnameValue === "") {
    setError(fullname, "Full name is required");
  } else {
    setSuccess(fullname);
  }

  if (dobValue === "") {
    setError(dob, "Date of birth is required");
  } else {
    setSuccess(dob);
  }

  if (phoneValue === "") {
    setError(phone, "Phone number is required");
  } else if (!/^\d{10}$/.test(phoneValue)) {
    setError(phone, "Phone number must be 10 digits");
  } else {
    setSuccess(phone);
  }

  if (addressValue === "") {
    setError(address, "Address is required");
  } else {
    setSuccess(address);
  }
};
