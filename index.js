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
    
    const setRedBorder = (input) => {
        input.style.borderColor = "#ff3860";
    };

    // Reset border colors for all inputs
    const resetBorderColors = () => {
        [username, email, password, password2, fullname, dob, phone, address].forEach(input => {
            input.style.borderColor = "#f0f0f0"; // Set default border color
        });
    };

    // Trigger alert and set red border for the input field
    const showAlertAndSetBorder = (input, message) => {
        alert(message);
        setRedBorder(input);
    };

    // Reset border colors before starting validation
    resetBorderColors();

    if (usernameValue === "") {
        showAlertAndSetBorder(username, "Username is required");
        return false;
    } else {
        setSuccess(username);
        return true;
    }

    if (emailValue === "") {
        alert("Email is required");
        setRedBorder(email);
        return false;
    } else if (!isValidEmail(emailValue)) {
        alert("Provide a valid email address");
        setRedBorder(email);
        return false;
    } else {
        setSuccess(email);
        return true;
    }

    if (passwordValue === "") {
        showAlertAndSetBorder(password, "Password is required");
        return false;
    } else if (passwordValue.length < 8) {
        showAlertAndSetBorder(password, "Password must be at least 8 characters long");
    } else if (!/\d/.test(passwordValue) || !/[!@#$%^&*]/.test(passwordValue)) {
        showAlertAndSetBorder(password, "Password must contain at least one special character and one numeric digit");
        return false;
    } else {
        setSuccess(password);
        return true;
    }

    if (password2Value === "") {
         showAlertAndSetBorder(password2, "Please confirm your password");
        return false;
        } else if (password2Value !== passwordValue) {
        showAlertAndSetBorder(password2, "Passwords do not match");
        return false;
    } else {
        setSuccess(password2);
        return true;
    }

    if (fullnameValue === "") {
        showAlertAndSetBorder(fullname, "Full name is required");
        return false;
    } else {
        setSuccess(fullname);
        return true
    }

    if (dobValue === "") {
        showAlertAndSetBorder(dob, "Date of birth is required");
        return false;
    } else {
        setSuccess(dob);
        return true;
    }

    if (phoneValue === "") {
        showAlertAndSetBorder(phone, "Phone number is required");
        return false;
    } else if (NaN(phoneValue)) {
        showAlertAndSetBorder(phone, "Phone number must be 10 digits");
        return false;
    } else {
        setSuccess(phone);
        return true;
    }

    if (addressValue === "") {
        showAlertAndSetBorder(address, "Address is required");
        return false;
    } else {
        setSuccess(address);
        return true;
    }
};
