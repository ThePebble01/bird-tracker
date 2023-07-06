const signIn = $("#sign-in-btn");
const register = $("#register-btn");

const signInFormHandler = async (e) => {
  e.preventDefault();

  // Variable decalarations
  const email = $("#user-email").val();
  const password = $("#user-password").val();

  // If the form has been filled out, send a post request to log the user in

  if (email && password) {
    const response = await fetch("/api/profile/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (e) => {
  e.preventDefault();

  // Variable declarations
  const username = $("#register-username").val();
  const email = $("#register-email").val();
  const password = $("#register-password").val();

  // If the form has been filled out, send a POST request to create a new user and log them in
  if (username && email && password) {
    const response = await fetch("api/profile", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert("Failed to sign up");
    }
  }
};

// Event listeners
signIn.on("click", signInFormHandler);
register.on("click", signupFormHandler);
