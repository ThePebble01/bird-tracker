const logoutBtn = $("#logout-button");

const logout = async () => {
  // POST request to end the session
  const response = await fetch("/api/profile/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

// Event listener
logoutBtn.on("click", logout);
