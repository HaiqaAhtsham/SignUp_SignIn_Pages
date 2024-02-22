document.addEventListener("DOMContentLoaded", function() {
    const signinForm = document.getElementById("signin-form");
    const signinUsername = document.getElementById("signin-username");
    const signinPassword = document.getElementById("signin-password");
    const agreeCheckbox = document.getElementById("agree-checkbox");

    signinForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const usernameValue = signinUsername.value.trim();
        const passwordValue = signinPassword.value.trim();
        const agreed = agreeCheckbox.checked;

        if (usernameValue === "") {
            alert("Username is required");
            return;
        }

        if (passwordValue === "") {
            alert("Password is required");
            return;
        }

        if (!agreed) {
            alert("Please agree that you are not a robot");
            return;
        }

        // Perform sign-in process here
        alert("Sign in successful!");
        // Redirect to dashboard or another page
    });

    const signupBtn = document.querySelector(".signup-btn");
    signupBtn.addEventListener("click", function() {
        // Redirect to sign-up page
        window.location.href = "signup.html";
    });
});
