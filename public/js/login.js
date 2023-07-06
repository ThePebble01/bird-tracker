const signIn = $("#sign-in-btn");
const register = $("#register-btn");

const signInFormHandler = async (e) => {
  e.preventDefault();

  const email = $("#user-email").value.trim();
  const password = $("#user-password").value.trim();

  if (email && password) {
    const response = await fetch("/api/profile/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      // headers: { "Content-Type": "application/json" },
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

  const firstName = $("#register-first-name").value.trim();
  const lastName = $("#register-last-name").value.trim();
  const email = $("#register-email").value.trim();
  let password = "";

  // check if passwords match
  if (
    $("#register-password-confirm").value.trim() ==
    $("#register-password").value.trim()
  ) {
    password = $("#register-password-confirm").value.trim();
  } else {
    // TODO: change to modal pop up
    alert("Password does not match");
  }

  if (firstName && lastName && email && password) {
    const response = await fetch("api/profile", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
      // headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      // TODO: Change from an alert to an appended message
      alert("Failed to sign up");
    }
  }
};

signIn.on("click", signInFormHandler);
register.on("click", signupFormHandler);
