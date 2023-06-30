const loginBtn = $("#login-form");
const signUpBtn = $("#signup-form");

const loginFormHandler = async (e) => {
  e.preventDefault();

  const email = $("#email-login").value.trim();
  const password = $("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      // TODO: Change from an alert to an appended message
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (e) => {
  e.preventDefault();

  const firstName = $("#firstName-signup").value.trim();
  const lastName = $("#lastName-signup").value.trim();
  const favoriteFruit = $("#favoriteFruit-signup").value.trim();
  const location = $("#location-signup").value.trim();
  const email = $("#email-signup").value.trim();
  const password = $("#password-signup").value.trim();

  if (firstName && lastName && favoriteFruit && location && email && password) {
    const response = await fetch("api/users", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        favoriteFruit,
        location,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      // TODO: Change from an alert to an appended message
      alert("Failed to sign up");
    }
  }
};

loginBtn.on("submit", loginFormHandler);
signUpBtn.on("submit", signupFormHandler);
