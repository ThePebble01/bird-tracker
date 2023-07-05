const signIn = $("#sign-in-btn");
const register = $("#register-btn");

const signInFormHandler = async (e) => {
  e.preventDefault();

  const email = $("#user-email").val();
  const password = $("#user-password").val();

  if (email && password) {
    const response = await fetch("/api/profile/login", {
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

  const username = $("#register-username").val();
  const email = $("#register-email").val();
  const password = $("#register-password").val();

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
      // TODO: Change from an alert to an appended message
      alert("Failed to sign up");
    }
  }
};

signIn.on("click", signInFormHandler);
register.on("click", signupFormHandler);
